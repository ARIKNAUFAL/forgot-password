import Layout from "../components/Layout";
import { Hero } from "../components/partial/HomePage/Hero";
import { Games } from "../components/partial/HomePage/Games";
import { SystemRequirement } from "../components/partial/HomePage/SystemRequirement";
import { Newsletter } from "../components/partial/HomePage/Newsletter";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Games />
      <SystemRequirement />
      <Newsletter />
    </Layout>
  );
};

export default HomePage;
