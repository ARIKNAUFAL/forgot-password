import { useRouter } from "next/router";

const AccountProfilePage = () => {
  const router = useRouter();
  const id = router.query.id;

  return <div>{id} asd</div>;
};

export default AccountProfilePage;
