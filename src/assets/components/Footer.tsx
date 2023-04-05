import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer px-10 py-4 border bg-base-200 inset-7 text-base-content border-base-300">
      <div className="flex gap-2 justify-center items-center">
        <div className="w-20">
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/SK-logo.png"}
            alt=""
          />
        </div>
        <p>
          Salman <br />
          Sharjah, United Aram Emirates
        </p>
      </div>
      <div className="md:place-self-center md:justify-self-end">
        <div className="grid grid-flow-col  gap-4">
          <a href="https://github.com/salman3001/" target="_blank">
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/salman-k-b922a2144"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a href="mailto:therodfighter@gmail.com" target="_blank">
            <MdOutlineEmail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
