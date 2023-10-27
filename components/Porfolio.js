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
          />
        <h3 className="text-lg text-teal-500 font-medium pt-8 pb-2  ">
            Unqork's Web App
        </h3>
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"80%"}
            height={"50%"}
            layout="responsive"
            src={project2}
          />
        <h3 className="text-lg text-teal-500 font-medium pt-8 pb-2  ">
            Funko's Mobile and Web App
        </h3>
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"80%"}
            height={"50%"}
            layout="responsive"
            src={project3}
          />
         <h3 className="text-lg text-teal-500 font-medium pt-8 pb-2  ">
            Lululemons's Internal app
        </h3>
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"80%"}
            height={"50%"}
            layout="responsive"
            src={project4}
          />
        <h3 className="text-lg text-teal-500 font-medium pt-8 pb-2  ">
            New York Life's Internal apps
        </h3>
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"80%"}
            height={"50%"}
            layout="responsive"
            src={project5}
          />
        <h3 className="text-lg text-teal-500 font-medium pt-8 pb-2  ">
            Corelight's Internal Web App
        </h3>
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"80%"}
            height={"50%"}
            layout="responsive"
            src={project6}
          />
        <h3 className="text-lg text-teal-500 font-medium pt-8 pb-2  ">
            Disney's Internal Web App
        </h3>
        </div>
    </div>

    );

}