import React from "react";

const AboutMe = () => {
  return (
    <div
      id="aboutme"
      className="  bg-base-100 padding-1 padding-2  flex flex-col"
    >
      <div>
        <h1 id="projects" className="text-4xl font-bold">
          About Me
        </h1>
        <div className="divider"></div>
      </div>
      <div className="max-w-5xl pl-2 font-semi-bold">
        <div>
          <p>
            My name is Salman. I live in Sharjah, UAE. I am a self taught full
            stack developer sepcialized in multiple stack and tools for web development. I am a very
            quick learner and easily adapting to new technologies. Below are
            some of the keypoints i am good at :-{" "}
          </p>
        </div>
        <ul className="pl-7 pt-5 italic flex flex-col gap-2 list-disc opacity-80">
          <li>Developing beautifull and intractve UI with React js, Vue js, Blade and edge templating engine.</li>
          <li>Developing Backend servers with Laravel, Expressjs, Nestjs and Adonisjs. </li>
          <li>
            Working with Material UI designs, Bootstrap, styled components,
            tailwing CSS and vanila CSS.
          </li>
          <li>
            Using Redux, RTK query, Axios to manage client side applications.
          </li>
          <li>Code version control with git and github.</li>
          <li>
            In depth understating of typescript, javascript and Php programming
            language.
          </li>
          <li>Server side authentication, Authorization, Roles and permissions</li>
          <li>
            Implementing various kinds of authentications like Username password, jwt auth, Passportjs, O-auth with google, facebook, github
            etc, cookie base authentication.
          </li>
          <li>Server side rendering with MVC pattern.</li>
          <li>
            Generating automated email notifications.
          </li>
          <li>
            Working with My Sql and mongodb database. In depth knowledge of mySql relationsships. Performing Crud operations and Quering data.
          </li>
          <li>Knowledge about webpack and babel.</li>
          <li>Working with docker containers.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
