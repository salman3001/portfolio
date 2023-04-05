import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact" className="  bg-base-100 p-10 flex flex-col gap-4">
      <div>
        <h1 id="projects" className="text-4xl text-rose-700 font-bold">
          Lets Connect
        </h1>
        <div className="divider"></div>
        <p className="opacity-60">
          Enter your details below. I will contact you shortly
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[350px] flex justify-center items-center flex-col gap-4">
          <div className="w-full">
            <form action="" className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="label opacity-60">
                  Name
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  className="input input-secondary w-full"
                />
              </div>
              <div>
                <label htmlFor="emial" className="label opacity-60">
                  Email Id
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  className="input input-secondary w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="label opacity-60">
                  Message
                </label>
                <textarea
                  required
                  name="name"
                  className="textarea textarea-secondary w-full"
                />
              </div>
              <button className="btn-1 hover:bg-rose-700 w-full">Submit</button>
            </form>
          </div>
          <div className="divider"> or </div>
          <div className="flex w-full px-4 justify-between ">
            <a href="https://github.com/salman3001/" target="_blank">
              <BsGithub size={50} />
            </a>
            <a
              href="https://www.linkedin.com/in/salman-k-b922a2144"
              target="_blank"
            >
              <AiFillLinkedin size={50} />
            </a>
            <a href="mailto:therodfighter@gmail.com" target="_blank">
              <MdOutlineEmail size={50} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
