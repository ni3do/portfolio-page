import { Avatar } from "@mantine/core";
import type { NextComponentType } from "next";

const About: NextComponentType = () => {
  return (
    <div className="font-sen my-8 flex flex-row items-center justify-between px-3">
      <div>
        <p className="text-3xl font-bold text-white">Simon Wachter</p>
        <p className="mt-1 text-lg text-gray-300">Student and Developer</p>

        <p className="mt-4 text-gray-400">
          I am interested in technology, programming and physics. I study
          computer science at ETH Zürich.
        </p>
      </div>

      <div className="custom:block hidden">
        <Avatar
          src="/images/naruto_avatar.png"
          size={200}
          radius={200}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
