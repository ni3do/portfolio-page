import type { NextComponentType } from "next";

import { AiOutlineGithub, MdEmail } from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="font-sen px-3" id="contact">
      <p className="text-3xl font-bold text-white">Contact</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/ni3do" />
        <Icon icon={<MdEmail />} url="mailto:simon.wachter@outlook.com" />
      </div>
    </div>
  );
};

export default Contact;
