"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import Starfield from "react-starfield";
import unit_logo from "../public/unit_logo.png";

export default function Home() {
  const [grantData, setGrantData] = useState<{ [key: string]: string }[]>([]);
  const [logoWidth, logoHeight] = [100, 100];

  useEffect(() => {
    const sheetId = "1QODX9bIXybLLMjCwdWDhKhEVBk6EL8StIosWP6JIqlE";
    const sheetName = encodeURIComponent("Applications");
    const sheetURL =
      `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;
    fetch(sheetURL)
      .then((response) => response.text())
      .then((csvText) => {
        console.log(csvText);
        const rows = csvText.replaceAll('"', "").split("\n");
        const headers = rows[0].split(",");

        console.log(headers);
        console.log(rows);

        const data = rows.slice(1).map((row) => {
          const values = row.split(",");
          return headers.reduce(
            (obj: { [key: string]: string }, header, index) => {
              obj[header] = values[index];
              return obj;
            },
            {},
          );
        });

        data.map((grant) => {
          console.log(grant);
        });
        setGrantData(data);
        // You can parse the CSV text here if needed
      })
      .catch((error) => {
        console.error("Error fetching the Google Sheet:", error);
      });
  }, []);

  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center bg-slate-950">
      <Starfield
        starCount={2000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <section className="lg:w-[40%] w-full lg:h-screen py-10 px-12">
        <div className="flex flex-col items-start space-y-3">
          <Image
            src={`https://media.licdn.com/dms/image/v2/D5603AQGKrqZzQD90AA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708447488766?e=1740614400&v=beta&t=UcDCuYhE534vBXJOjhoIPxThGNc3eJ5WLPhAdJhOxcg`}
            alt="profile"
            width={180}
            height={180}
            className="rounded-full"
          />
          <h1 className="text-3xl font-extrabold text-white dark:text-white">
            May Thin Kyu
          </h1>
          <h2 className="text-xl font-semibold text-gray-300 dark:text-white">
            System Analyst
          </h2>
          <h2 className="text-xl font-semibold text-gray-300 dark:text-white">
            Bangkok Thailand
          </h2>
          <p className="text-gray-300 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque
            delectus eum repellendus odio nam pariatur a non et, aut aperiam
            perferendis unde.
          </p>

          <div className="flex gap-x-2 items-center">
            <button className="text-white bg-gray-800 hover:bg-slate-50 hover:text-black focus:outline-none font-semibold rounded-full text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex gap-2 items-center justify-center border">
              Download CV
            </button>
            <Link
              href="https://www.linkedin.com/in/may-thin-kyu-helen-081332175/"
              className="opacity-80 hover:opacity-100"
            >
              <FaLinkedin color="white" size={25} />
            </Link>
            <Link
              href="mailto:phonethetnaing34@gmail.com"
              className="opacity-80 hover:opacity-100"
            >
              <MdOutlineEmail color="white" size={25} />
            </Link>
          </div>
        </div>
      </section>
      <section className="lg:w-[60%] w-full h-screen py-10 px-12  overflow-y-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-white dark:text-white">
            About Me
          </h1>
          <p className="text-gray-300 mb-2">
            Software Solution Analyst with more than 5 years experience in scrum
            master, sprint planning, data analysis, development technical
            supporting, testing, preparing user training, and liaison between
            different departments. Also 3 years’ experience with software
            development using C#, JavaFX and ASP.Net.
          </p>
          <p className="text-gray-300">
            The main background is related to banking, digital financing and
            microfinance industries. My analyst background includes hands-on
            experience with PowerBI, including with Crystal Report in SAP
            Business One. Currently working as a scrum master and also QA in
            Hana Microfinance which is one of the best microfinance companies in
            Myanmar. Holding a strong digital transformation background in the
            Microfinance Industry.
          </p>
        </div>

        <h1 className="text-3xl font-extrabold text-white dark:text-white mb-4">
          Experience
        </h1>
        <div className="mb-10 px-8 border-l-2 border-gray-300">
          {/* Company image, title and timeline */}
          <div className="flex space-x-2">
            <span className="lg:h-auto h-[40px]">
              <Image
                src={"https://media.licdn.com/dms/image/v2/D560BAQHcAZwAFrLlJw/company-logo_200_200/company-logo_200_200/0/1708049657281/comin_khmere_logo?e=1743638400&v=beta&t=bD_v0euursnXxWhzFHy6oIbi7utPmKH6iJVdHHgaJ1I"}
                width={logoWidth}
                height={logoHeight}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="compay logo"
                className="rounded-full"
              />
            </span>

            <div className="flex flex-col text-white">
              <h1 className="text-xl font-semibold text-gray-300 dark:text-white">
                System Analyst
              </h1>
              <Link
                href={"https://www.linkedin.com/company/comin-asiakh/"}
                className="opacity-80 hover:opacity-100"
              >
                <h2 className="text-lg font-semibold text-gray-300 dark:text-white">
                  Comin Asia, Phnom Penh, Cambodia
                </h2>
              </Link>
              <h3 className="text-lg font-semibold text-gray-300 dark:text-white">
                Oct 2024 - Present
              </h3>
            </div>
          </div>
          {/* Job Description */}
          <ul className="text-gray-300 list-disc px-4 font-normal mt-2 space-y-2">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>

        {/* Hana */}
        <div className="mb-10 px-8 border-l-2 border-gray-300">
          <div className="flex space-x-2">
            <span className="lg:h-auto h-[40px]">
              <Image
                src={"https://media.licdn.com/dms/image/v2/C510BAQGWVIodsndZbA/company-logo_200_200/company-logo_200_200/0/1630604981488/hana_microfinance_logo?e=1743638400&v=beta&t=sxr1clG4LWcZ0GyMFDz8LNt2DwWgTpSUUpkZsBycOO4"}
                width={logoWidth}
                height={logoHeight}
                alt="compay logo"
                className="rounded-full"
              />
            </span>
            <div className="flex flex-col text-white">
              <h1 className="text-xl font-semibold text-gray-300 dark:text-white">
                System Analyst
              </h1>
              <Link
                href={"https://www.linkedin.com/company/comin-asiakh/"}
                className="opacity-80 hover:opacity-100"
              >
                <h2 className="text-lg font-semibold text-gray-300 dark:text-white">
                  Hana Microfinance, Yangon, Myanmar
                </h2>
              </Link>
              <h3 className="text-lg font-semibold text-gray-300 dark:text-white">
                Sep 2023 - Present
              </h3>
            </div>
          </div>
          {/* Job Description */}
          <ul className="text-gray-300 list-disc px-4 font-normal mt-2 space-y-2">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>

        {/* Education */}
        <h1 className="text-3xl font-extrabold text-white dark:text-white mb-4">
          Education
        </h1>
        <div className="mb-10 px-8 border-l-2 border-gray-300">
          <div className="flex space-x-2">
            <span className="lg:h-auto h-[40px]">
              <Image
                src={unit_logo}
                width={logoWidth}
                height={logoHeight}
                alt="compay logo"
                className="rounded-full"
              />
            </span>
            <div className="flex flex-col text-white">
              <h1 className="text-xl font-semibold text-gray-300 dark:text-white">
                Bachelor of Engineering
              </h1>
              <Link
                href={"https://www.linkedin.com/company/comin-asiakh/"}
                className="opacity-80 hover:opacity-100"
              >
                <h2 className="text-lg font-semibold text-gray-300 dark:text-white">
                Thanlyinn Technology University, Myanmar
                </h2>
              </Link>
              <h3 className="text-lg font-semibold text-gray-300 dark:text-white">
                2011 - 2017
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
