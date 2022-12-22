import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import Head from "next/head";

function Layout(props) {
  return (
    <>
      <Head>
        <title>CH-10</title>
      </Head>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
