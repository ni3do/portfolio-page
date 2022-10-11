import type { NextPage } from "next";

import {
  About,
  Contact,
  Education,
  Header,
  Projects,
  Skills,
} from "../components";

const Home: NextPage = () => {
  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <Header />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
