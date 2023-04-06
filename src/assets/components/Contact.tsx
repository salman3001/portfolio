import axios from "axios";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import ReCaptcha from "./ReCaptcha";

const Contact = () => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitstat, setsubmitState] = useState(false);
  const [num1, setNum1] = useState<number>(Math.floor(Math.random() * 100));
  const [num2, setNum2] = useState<number>(Math.floor(Math.random() * 10));
  const [result, setRsult] = useState<number>();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setsubmitState(true);
    console.log(result);
    console.log(num1 + num2);

    if (Number(result) === num1 + num2) {
      try {
        // const res = await axios.post(import.meta.env.VITE_EMAIL_URL, {
        //   username,
        //   email,
        //   message,
        // });
        alert(
          `Hello Mr/Ms. ${username}!. Thanks for contacting, I will get to you shortly`
        );
        setusername("");
        setEmail("");
        setMessage("");
        setNum1(Math.floor(Math.random() * 100));
        setNum2(Math.floor(Math.random() * 10));
        setRsult(0);
        setsubmitState(false);
      } catch (error) {
        alert(
          "Sorry, There was an an while processing you request! Please contact me through social links and email"
        );
        setsubmitState(false);
        setNum1(Math.floor(Math.random() * 100));
        setNum2(Math.floor(Math.random() * 10));
        setRsult(0);
      }
    } else {
      alert("reCaptcha did not match. Please try again");
      setsubmitState(false);
      setNum1(Math.floor(Math.random() * 100));
      setNum2(Math.floor(Math.random() * 10));
      setRsult(0);
    }
  };
  return (
    <div id="contact" className="  bg-base-100 p-10 flex flex-col gap-4">
      <div>
        <h1 id="projects" className="text-4xl text-rose-700 font-bold">
          Lets Connect
        </h1>
        <div className="divider"></div>
        <p className="opacity-60">Enter your details below.</p>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[350px] flex justify-center items-center flex-col gap-4">
          <div className="w-full">
            <form
              action=""
              className="flex flex-col gap-4"
              onSubmit={submitHandler}
            >
              <div>
                <label htmlFor="username" className="label opacity-60">
                  Name
                </label>
                <input
                  type="text"
                  required
                  minLength={2}
                  maxLength={20}
                  name="username"
                  className="input invalid:input-error input-secondary w-full"
                  value={username}
                  onChange={(e) => {
                    setusername(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="email" className="label opacity-60">
                  Email Id
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  className="input invalid:input-error input-secondary w-full"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="message" className="label opacity-60">
                  Message
                </label>
                <textarea
                  required
                  maxLength={200}
                  name="name"
                  className="textarea invalid:textarea-error textarea-secondary w-full"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col justify-start w-full items-start gap-4">
                <p className="opacity-60">reCAPTCHA</p>
                <ReCaptcha
                  num1={num1}
                  num2={num2}
                  captcha={result}
                  setCaptcha={setRsult}
                />
              </div>
              <button
                disabled={submitstat ? true : false}
                className="btn-1 disabled:bg-rose-300 hover:bg-rose-700 w-full "
              >
                {submitstat === false ? (
                  "Submit"
                ) : (
                  <div className=" h-11 w-11 rounded-full border-2 border-t-transparent animate-spin  border-white"></div>
                )}
              </button>
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
