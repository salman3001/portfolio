import React from "react";

const AboutMe = () => {
  return (
    <div id="aboutme" className="  bg-base-100 p-10 flex flex-col">
      <div>
        <h1 id="projects" className="text-4xl font-bold">
          About Me
        </h1>
        <div className="divider"></div>
      </div>
      <div className="max-w-5xl">
        <div>
          <p>
            Hi, I am Salman.I am a self tought full stack developer sepcialized
            in mern stack development. I am a very quick learner and easily
            adapting to new technologies. Below are some of the keypoints i am
            capable in.{" "}
          </p>
        </div>
        <ul className="p-5 flex flex-col gap-2">
          <li>Developing beaitifull and intractve UI with React js.</li>
          <li>
            Managing App state by global state manager like redux and context
            api's.
          </li>
          <li>Fetching the data from rest api's and displaying in the app.</li>
          <li>
            Usinh RTK query,Axios to manage the rest api's at clent side with
            data validation and invalidation.
          </li>
          <li>Form validation with libraries like formik and joe.</li>
          <li>
            Working with Material UI designs,styled components, tailwing CSS and
            vanila CSS.
          </li>
          <li>Code version control with git and github.</li>
          <li>client side authentication and route protection.</li>
          <li>
            In depth understating of typescript and javascript programming
            language.
          </li>
          <li>Server side authentication and routes protection.</li>
          <li>
            Implementing various kinds of authentications like local strategy
            with express sesions, jwt auth, O-auth with google, facebook, github
            etc, cookie base auth .
          </li>
          <li> Creatng Rest api server with nestjs and expressjs.</li>
          <li>Server side rendering with MVC pattern.</li>
          <li>
            Working with mongodb database. Query, sorting, filtering and
            searching data.
          </li>
          <li>
            Using mongoosejs and schema's to intract with mongodb database.{" "}
          </li>
          <li>Basic knowledge about webpack and babel.</li>
          <li>
            Static site generation and hybrid app (client + server) development
            with next js.
          </li>

          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
