import React, { useState } from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isRoot = location.pathname === "/";
  const handelClick = () => {
    setOpen((state: boolean) => (state === true ? false : true));
  };
  return (
    <div className="bg-base-100 text-black">
      <Navbar handelClick={handelClick} open={open} />
      <SideMenu open={open} setOpen={setOpen} />
      {isRoot && (
        <div
          className={`hero ${
            import.meta.env.VITE_BASE_URL !== ""
              ? "sm:bg-[url('/portfolio/images/profile-pic.jpg')] bg-[url('/portfolio/images/profile-pic-sm.jpg')]"
              : "sm:bg-[url('/images/profile-pic.jpg')] bg-[url('/images/profile-pic-sm.jpg')]"
          }`}
        >
          <div className="hero-overlay">
            <div className="flex min-h-screen justify-center h-full  padding-1 padding-2">
              <div className="flex flex-col  items-center justify-center max-w-5xl text-white">
                {/* avatar */}
                {/* <div className="avatar py-5">
                <div className="w-40 rounded-full">
                  <img
                    src={
                      import.meta.env.VITE_BASE_URL +
                      "/images/profile-pic-sm.jpg"
                    }
                    alt=""
                  />
                </div>
              </div> */}
                <span className="text-2xl text-left w-full ">
                  Hi there! I am{" "}
                  <span className="text-rose-700 text-3xl">Salman</span>, I Make
                  full Stack Web Applications.
                </span>
                <br />I am specialized in Mern Stack developments. I have
                developed multiple projects with Reactjs, ExpressJs, NestJs
                Mongodb and many more libraries. With in depth knowledge of
                programming languages like typescript and javascript i can
                develope the complex applications to meet the clients need.
                Check out my projects below.
                <div className="flex justify-start py-4 gap-4 w-full">
                  <a className="btn-1 group" href="#projects">
                    View Projects
                    <AiOutlineArrowRight className="group-hover:rotate-90 transition-transform" />
                  </a>
                  <a href="#skills" className="btn-2 group">
                    View Skills{" "}
                    <div>
                      <AiOutlineArrowRight className="group-hover:rotate-90 transition-transform" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
