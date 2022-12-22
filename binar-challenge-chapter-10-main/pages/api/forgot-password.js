const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');
const nodemailer = require('nodemailer');

router.post('/forgot-password', async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await db.query(
            'SELECT id, password_reset_token, password_reset_expiration FROM users WHERE email = $1',
            [email]
        );
        if (!user.rows.length) {
            return res.status(400).json({ error: 'Email tidak terdaftar' });
        }
        const token = jwt.sign(
            { userId: user.rows[0].id },
            config.jwtSecret,
            { expiresIn: '1h' }
        );
        await db.query(
            'UPDATE users SET password_reset_token = $1, password_reset_expiration = $2 WHERE id = $3',
            [token, new Date(), user.rows[0].id]
        );
        const transporter = nodemailer.createTransport({
            host: config.emailHost,
            port: config.emailPort,
            auth: {
                user: config.emailUsername,
                pass: config.emailPassword,
            },
        });
        const resetLink = `${config.frontendUrl}/reset-password/${token}`;
        const mailOptions = {
            from: config.emailFrom,
            to: email,
            subject: 'Reset Kata Sandi',
            html: `<p>Klik <a href="${resetLink}">link ini</a> untuk mereset kata sandi Anda.</p>`,
        };
        await transporter.sendMail(mailOptions);
        res.json({ message: 'Email reset kata sandi sudah dikirim' });
    } catch (error) {
        next(error);
    }
});

router.post('/reset-password/:token', async (req, res, next) => {
    try {
        const { token } = req.params;
        const { password } = req.body;
        const decoded = jwt.verify(token, config.jwtSecret);
        const user = await db.query(
            'SELECT id, password_reset_token, password_reset_expiration FROM users WHERE id = $1',
            [decoded.userId]
        );
        if (!user.rows.length) {
            return res.status(400).json({ error: 'Pengguna tidak ditemukan' });
        }
        if (user.rows[0].password_reset_token !== token) {
            return res.status(400).json({ error: 'Token tidak valid' });
        }
        const now = new Date();
        if (now > user.rows[0].password_reset_expiration) {
            return res.status(400).json({ error: 'Token sudah kedaluwarsa' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.query(
            'UPDATE users SET password = $1, password_reset_token = NULL, password_reset_expiration = NULL WHERE id = $2',
            [hashedPassword, decoded.userId]
        );
        res.json({ message: 'Kata sandi berhasil diubah' });
    } catch (error) {
        next(error);
    }
});

module.exports = router;


