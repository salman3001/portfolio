import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex opacity-60 flex-col gap-4 sm:flex-row sm:justify-between sm:items-center padding-1 py-2  border bg-base-200 inset-7 text-base-content border-base-300 w-full">
      <div className="flex gap-4 items-center justify-between grow-1  sm:justify-evenly w-full">
        <div className="w-20">
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/SK-logo.png"}
            alt=""
          />
        </div>
        <a href="https://github.com/salman3001/" target="_blank">
          <BsGithub size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/salman-k-b922a2144"
          target="_blank"
        >
          <AiFillLinkedin size={25} />
        </a>
        <a href="mailto:therodfighter@gmail.com" target="_blank">
          <MdOutlineEmail size={25} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
