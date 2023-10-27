import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useState } from "react";
import rafasu from "../public/RafaGithub.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import Portfolio from "../components/Porfolio";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Rafasus Portfolio</title>
        <meta name="description" content="Rafael Solis Uttilla Porfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl">Rafasu </h1>
            <ul className="flex items-center">
              <li>
                {
                  darkMode ?   
                  <BsFillSunFill 
                    onClick={() => setDarkMode(false)}
                    className=" cursor-pointer text-2xl"
                  /> : 
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(true)}
                    className=" cursor-pointer text-2xl"
                  />
                }
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/public/Rafael_Solis_Resume.pdf"
                  alt="alt text"
                  target="_blank"
                  rel="noopener noreferrer"
                  locale={false}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Rafael Solis Utrilla
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Welcome, my name is Rafael Solis, Full Stack Developer based in Mexico. I have developed
              many types of applications for large companies to startups.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Passionate about new solutions that help others and understanding systems and the complexity
              behind them. Please feel free to contact me. 
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Please feel free to contact me. 
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/rafasu/" target="_blank" rel="noreferrer">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/rafasu" target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={rafasu} layout="fill" objectFit="cover" alt="Rafael Solis picture"/>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey I had work for
              <span className="text-teal-500"> Consultancy Services </span>
              like <span className="text-teal-500">Deloitte, TCS and Globant </span>
              and collaborated with talented clients around the world. 
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer a wide range of services which include the following technologies:
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="Code logo 1"/>
              <h3 className="text-lg text-teal-600 font-medium pt-8 pb-2 ">
                Front-End
              </h3>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">React-query</p>
              <p className="text-gray-800 py-1">Redux</p>
              <p className="text-gray-800 py-1">Semantic/Material UI</p>
              <p className="text-gray-800 py-1">TypeScript</p>
              <p className="text-gray-800 py-1">GraphQl/Apollo</p>
              <p className="text-gray-800 py-1">Html, JS, CSS</p>
              <p className="text-gray-800 py-1">NextJs</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="Code logo 2"/>
              <h3 className="text-lg text-teal-600 font-medium pt-8 pb-2 ">
                Back-End
              </h3>
              <p className="text-gray-800 py-1">NodeJs</p>
              <p className="text-gray-800 py-1">Express</p>
              <p className="text-gray-800 py-1">Java Spring Boot</p>
              <p className="text-gray-800 py-1">TypeScript</p>
              <p className="text-gray-800 py-1">Mongoose/Sequelize</p>
              <p className="text-gray-800 py-1">Posgresql/Mongo</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="Consulting logo" />
              <h3 className="text-lg text-teal-600 font-medium pt-8 pb-2 ">
                Other Tools
              </h3>
              <p className="text-gray-800 py-1">Jest</p>
              <p className="text-gray-800 py-1">Jenkins</p>
              <p className="text-gray-800 py-1">Git/Gitlab</p>
              <p className="text-gray-800 py-1">Npm</p>
              <p className="text-gray-800 py-1">AWS</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Here are some of the Projects I had collaborated with
            </p>
          </div>
          <Portfolio />
         
        </section>
      </main>
    </div>
  );
}
