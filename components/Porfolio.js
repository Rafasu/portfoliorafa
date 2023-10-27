import React from 'react';
import Image from "next/image";
import project1 from "../public/project1.png";
import project2 from "../public/project2.png";
import project3 from "../public/project3.png";
import project4 from "../public/project4.png";
import project5 from "../public/project5.png";
import project6 from "../public/project6.png";

export default function Portfolio() {
    return (
    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 ">
          <Image
            className="rounded-lg object-cover"
            width={"80%"}
            height={"50%"}
            layout="responsive"
            src={project1}
            alt="Unqork Project"
          />
        <h3 className="text-lg text-teal-500 font-medium pt-8 pb-2  ">
            Unqorks Web App
        </h3>
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"80%"}
            height={"50%"}
            layout="responsive"
            src={project2}
            alt="Funko Project"
          />
        <h3 className="text-lg text-teal-500 font-medium pt-8 pb-2  ">
            Funkos Mobile and Web App
        </h3>
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"80%"}
            height={"50%"}
            layout="responsive"
            src={project3}
            alt="Lululemon Project"
          />
         <h3 className="text-lg text-teal-500 font-medium pt-8 pb-2  ">
            Lululemonss Internal app
        </h3>
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"80%"}
            height={"50%"}
            layout="responsive"
            src={project4}
            alt="NYL Project"
          />
        <h3 className="text-lg text-teal-500 font-medium pt-8 pb-2  ">
            New York Lifes Internal apps
        </h3>
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"80%"}
            height={"50%"}
            layout="responsive"
            src={project5}
            alt="Corelight Project"
          />
        <h3 className="text-lg text-teal-500 font-medium pt-8 pb-2  ">
            Corelights Internal Web App
        </h3>
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"80%"}
            height={"50%"}
            layout="responsive"
            src={project6}
            alt="Disney Project"
          />
        <h3 className="text-lg text-teal-500 font-medium pt-8 pb-2  ">
            Disneys Internal Web App
        </h3>
        </div>
    </div>

    );

}