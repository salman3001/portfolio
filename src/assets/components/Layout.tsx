import { useState } from "react";
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
            <div className="flex min-h-screen justify-start h-full items-center  padding-1 padding-2 w-full ">
              <div className="flex flex-col py-12  items-center justify-start max-w-2xl text-gray-400 text-sm ">
                <span className="text-2xl text-left w-full ">
                  Hi, I am
                  <span className="text-rose-700 text-3xl"> Salman</span>, I am
                  a full stack developer.
                </span>
                <br />I can work with multiple stacks and tools like Reactjs, Vue js, Laravel, ExpressJs,
               Adonis js, NestJs, My Sql, Mongodb etc. With strong grasp of typescript,
                javascript and Php I make immersive user experiences through responsive
                designs. Keeping up with industry trends and best practices, I
                ensure high-quality work that exceeds client expectations. With
                a detail-oriented approach and problem-solving abilities, I
                deliver exceptional solutions. Let's bring your ideas to life
                and create remarkable digital experiences together. Thank you
                for visiting my portfolio! Check out my projects below.
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
