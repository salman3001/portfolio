import { BsDownload } from "react-icons/bs";

const Resume = () => {
  return (
    <div
      id="resume"
      className="  bg-base-100  padding-1 padding-2  flex flex-col"
    >
      <div>
        <h1 id="projects" className="text-4xl font-bold">
          Resume
        </h1>
        <div className="divider"></div>
        <div className="flex flex-col justify-center items-center gap-8 text-rose-500 cursor-pointer">
          <a
            className="text-black flex-wrap justify-center flex gap-2 text-2xl underline py-6 text-center"
            href={import.meta.env.VITE_BASE_URL + "/pdf/salman-CV-June2023.pdf"}
            target="_blank"
          >
            <BsDownload size={30} /> Click to download My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
