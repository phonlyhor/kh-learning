import Hero from "../../components/Hero/Hero";
import ClassCard from "../../components/ClassCard/ClassCard";
import SubjectCard from "../../components/SubjectCard/SubjectCard";
import Statistics from "../../components/Statistics/Statistics";

import "./Home.css";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import FQA from "../../components/FQA/FQA";

const Home = () => {
  return (
    <>
      <Hero />

      <ClassCard />

      <SubjectCard />

      <Statistics />

      <WhyChooseUs />

      <FQA />
    </>
  );
};

export default Home;
