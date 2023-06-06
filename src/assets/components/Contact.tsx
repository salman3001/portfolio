import axios from "axios";
import { useFormik } from "formik";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import ReCaptcha from "./ReCaptcha";
import * as Yup from "yup";

const Contact = () => {
  const [num1, setNum1] = useState<number>(Math.floor(Math.random() * 100));
  const [num2, setNum2] = useState<number>(Math.floor(Math.random() * 10));
  const [result, setRsult] = useState<number>();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      email: Yup.string().email("Not a valid email").required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      if (Number(result) === num1 + num2) {
        try {
          const res = await axios.post(import.meta.env.VITE_EMAIL_URL, {
            username: values.username,
            email: values.email,
            message: values.message,
          });
          alert(
            `Hello Mr/Ms. ${values.username}!. Thanks for contacting, I will get to you shortly`
          );
          formik.resetForm();
          setNum1(Math.floor(Math.random() * 100));
          setNum2(Math.floor(Math.random() * 10));
          setRsult(0);
        } catch (error) {
          alert(
            "Sorry, There was an an while processing you request! Please contact me through social links and email"
          );
          setNum1(Math.floor(Math.random() * 100));
          setNum2(Math.floor(Math.random() * 10));
          setRsult(0);
        }
      } else {
        alert("reCaptcha did not match. Please try again");
        setNum1(Math.floor(Math.random() * 100));
        setNum2(Math.floor(Math.random() * 10));
        setRsult(0);
      }
    },
  });

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  return (
    <div
      id="contact"
      className="  bg-base-100 padding-1 padding-2  flex flex-col gap-4"
    >
      <div>
        <h1 id="projects" className="text-4xl font-bold">
          Lets Connect
        </h1>
        <div className="divider"></div>
        <p className="opacity-60">Enter your details below.</p>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-96 flex justify-center items-center flex-col gap-8">
          <div className="w-full">
            <form
              action=""
              className="flex flex-col gap-4 xl:gap-8"
              onSubmit={submitHandler}
            >
              <div>
                <label htmlFor="username" className="label opacity-60">
                  Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className={`input ${
                    formik.touched.username && Boolean(formik.errors.username)
                      ? "input-error"
                      : "input-bordered"
                  } w-full`}
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
                {formik.touched.username && Boolean(formik.errors.username) && (
                  <p className="text-red-500">{formik.errors.username}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="label opacity-60">
                  Email Id
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className={`input ${
                    formik.touched.email && Boolean(formik.errors.email)
                      ? "input-error"
                      : "input-bordered"
                  } w-full`}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && Boolean(formik.errors.email) && (
                  <p className="text-red-500">{formik.errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="label opacity-60">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`input ${
                    formik.touched.message && Boolean(formik.errors.message)
                      ? "textarea-error"
                      : "textarea-bordered"
                  } w-full`}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                />
                {formik.touched.message && Boolean(formik.errors.message) && (
                  <p className="text-red-500">{formik.errors.message}</p>
                )}
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
                disabled={formik.isSubmitting}
                className="btn-1  disabled:bg-rose-300 hover:bg-rose-700 w-full pt"
              >
                {formik.isSubmitting === false ? (
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
