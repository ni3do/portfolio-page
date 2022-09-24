import type { NextComponentType } from "next";

const Projects: NextComponentType = () => {
  return (
    <div className="font-sen my-16 px-3" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <a
          href="/public/assests/Critique_of_MemXCT_memory-centric_X-ray_CT_reconstruction_with_massive_parallelization_by_SCC_Team_from_ETH_Zrich.pdf"
          download
          className="h-[8rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-primary flex h-full w-full flex-col items-center justify-center rounded-lg px-2 text-center font-medium">
            <p className="text-xl font-semibold">Racklette HPC Team</p>
            <p>Paper released at competition</p>
          </div>
        </a>
        <a
          href="/public/assests/thesis.pdf"
          download
          className="h-[8rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-primary flex h-full w-full flex-col items-center justify-center rounded-lg px-2 text-center font-medium">
            <p className="text-xl font-semibold">Bachelors Thesis</p>
            <p>Arbitrage Opportunities on Decentralized Exchanges</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
