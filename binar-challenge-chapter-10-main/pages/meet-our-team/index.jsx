import { Hero } from "../../components/partial/MeetOurTeam/Hero";
import Layout from "../../components/Layout";
import { TeamMember } from "../../components/partial/MeetOurTeam/TeamMember";
const index = () => {
  return (
    <Layout>
      <Hero />
      <TeamMember />
    </Layout>
  );
};

export default index;
