import React from 'react';
import myFile from "../../../images/Md_Imran_Hossain_CV.pdf";
const About = () => {
    return (
        <>
        <h2 className="text-center text-4xl text-red-500  my-8">About Me</h2>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1"
        >
          <div className="flex justify-center ">
            <img
              className="lg:h-screen"
              src="https://i.ibb.co/KWdJ96w/AIUB-CS-PROM-14-1-153-of-914.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="px-2 flex items-center mb-20 lg:pr-16"
          >
            <div className="text-justify">
              <h2 className="text-2xl font-bold">Name : Md Imran Hossain</h2>
              <p className="my-2 w-4/6 w-full lg:w-full ">
                I have worked as a Fullstack Web developer for the past 28 months,
                focusing on MERN stack development. Alongside my professional
                experience, I am currently enrolled in a Masters program in High
                Integrity Systems at Frankfurt University of Applied Sciences. My
                main interest lies in creating sophisticated web applications that
                address real-life challenges faced by a large number of users. I
                consider myself a problem solver who finds joy in coding, and I am
                always eager to learn from experienced professionals while making
                valuable contributions to meaningful projects.
              </p>
              <p className="my-4">
                <b className="text-red-500 ">Languages: </b>Javascript,
                Typescript, Python, C#, C++, R, HTML5/CSS3
              </p>
              <p className="my-4">
                <b className="text-red-500 ">Databases: </b>No SQL (MongoDb), SQL
                Server, MySQL, Postgres
              </p>
              <p className="my-4">
                <b className="text-red-500 ">Framework: </b>ReactJs, NextJs,
                NodeJs, ExpressJs, Prisma, GraphQL, Mongoose
              </p>
              <p className="my-4">
                <b className="text-red-500 ">Tools & Technologies: </b>Git,
                Docker, Kubernetes, AWS, VS Code, Jira
              </p>
              <p className="my-4">
                <b className="text-red-500 "> BI Tools: </b>PowerBI, Tableau
              </p>
              <div>
                <p>
                  Feel free to connect with me through my LinkedIn profile or the
                  contact form on this website for any relevant opportunities or
                  just to connect. Thank you for visiting my website! To know more
                  <a
                    href={myFile}
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 text-red-400"
                  >
                    Click To See My Resume.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default About;