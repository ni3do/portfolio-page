import { GoPrimitiveDot } from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="font-sen my-16 px-3 text-white" id="skills">
      <p className="text-3xl font-bold text-white">Skills</p>

      <div className="text-md custom:text-lg my-8 flex flex-col font-medium md:text-xl">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <GoPrimitiveDot size="20" />
          <span className="text-white">
            Python, C, C++, Java, Solidity, Typescript, Javascript
          </span>
          &nbsp;as programming languages
        </p>
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <GoPrimitiveDot size="20" />
          <span className="text-white">SQL, postgres, MongoDB</span>
          &nbsp;as databases
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <GoPrimitiveDot size="20" />
          <span className="text-white">React, Nextjs</span>
          &nbsp;as web development frameworks
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <GoPrimitiveDot size="20" />
          <span className="text-white">PyTorch, pandas, numpy</span>
          &nbsp;as important python libraries
        </p>
      </div>

      <p className="text-lg font-medium text-slate-300">
        ...more skills include <span className="text-white">Linux</span>,{" "}
        <span className="text-white">AWS</span>,{" "}
        <span className="text-white">ethersjs/web3.py</span>,{" "}
        <span className="text-white">docker</span>{" "}
      </p>
    </div>
  );
};

export default Skills;
