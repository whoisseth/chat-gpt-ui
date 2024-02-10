/** @format */
"use client";

import Link from "next/link";
import React from "react";
import { BsArchiveFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { FaChevronLeft } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { TbMinusVertical } from "react-icons/tb";

import { useState } from "react";
import { cn } from "@/utils/cn";

import { usePathname } from "next/navigation";

type Props = {};

type Timeline = {
  label: string;
  timelines: {
    title: string;
    href: string;
  }[];
};

const timelineData: Timeline[] = [
  {
    label: "Today",
    timelines: [
      {
        href: "tag-generator",
        title: "Tag generator"
      },
      {
        href: "title-generator",
        title: "Title generator"
      },
      {
        href: "image-editor",
        title: "Image editor"
      },
      {
        href: "video-maker",
        title: "Video maker"
      },
      {
        href: "audio-mixer",
        title: "Audio mixer"
      }
    ]
  },
  {
    label: "Yesterday",
    timelines: [
      {
        href: "article-editor",
        title: "Article editor"
      },
      {
        href: "chart-generator",
        title: "Chart generator"
      },
      {
        href: "diagram-creator",
        title: "Diagram creator"
      },
      {
        href: "calendar-planner",
        title: "Calendar planner"
      },
      {
        href: "task-tracker",
        title: "Task tracker"
      }
    ]
  },
  {
    label: "Last Week",
    timelines: [
      {
        href: "code-editor",
        title: "Code editor"
      },
      {
        href: "presentation-builder",
        title: "Presentation builder"
      },
      {
        href: "music-composer",
        title: "Music composer"
      },
      {
        href: "notebook-app",
        title: "Notebook app"
      },
      {
        href: "game-designer",
        title: "Game designer"
      }
    ]
  }
];

export default function Sidebar({}: Props) {
  const [isSidebar, setSidebar] = useState(true);

  function toggleSidebar() {
    setSidebar(!isSidebar);
  }

  return (
    <div
      className={cn("min-h-screen relative transition-all ", {
        "-translate-x-full": !isSidebar,
        "w-full  max-w-[244px]": isSidebar
      })}
    >
      {isSidebar && (
        <div
          className={cn(
            "min-h-screen   w-full  pl-4 pr-6 pt-20 dark:bg-[#0D0D0D]   "
          )}
        >
          {/* new chat btn */}
          <div className="absolute top-5 left-0 pl-4 pr-6 w-full ">
            <Link
              href={"/"}
              className="flex  dark:bg-[#0D0D0D] justify-between w-full  items-center p-2 hover:bg-slate-800 rounded-lg transition-all "
            >
              <section className="flex items-center gap-2">
                {/* logo */}
                <div className=" h-7 w-7 bg-white p-1 rounded-full">
                  <img src="/assets/chatgpt-log.svg" alt="" />
                </div>

                <p className="text-sm">New Chat </p>
              </section>

              <FiEdit className="text-white text-sm" />
            </Link>
          </div>

          {/* timeles */}
          <div className="w-full flex flex-col gap-5">
            {timelineData.map((d, i) => (
              <Timeline key={i} label={d.label} timelines={d.timelines} />
            ))}
          </div>
        </div>
      )}
      <div className=" absolute inset-y-0 right-[-30px]  flex items-center justify-center w-[30px]">
        <button
          onClick={toggleSidebar}
          className=" h-[100px] group  text-gray-500 hover:text-white   w-full flex items-center justify-center  transition-all   "
        >
          {/* <FaChevronLeft /> */}
          <FaChevronLeft className="hidden group-hover:flex  text-xl    delay-500 duration-500 ease-in-out transition-all" />
          <TbMinusVertical className="text-3xl group-hover:hidden   delay-500 duration-500 ease-in-out  transition-all" />
        </button>
      </div>
    </div>
  );
}

function Timeline(props: Timeline) {
  const pathName = usePathname();

  console.log("pathName", pathName);

  //
  return (
    <div className="w-full flex flex-col  ">
      <p className="text-sm text-gray-500 font-bold p-2">{props.label}</p>

      {props.timelines.map((d, i) => (
        <Link
          key={i}
          className={cn(
            "p-2 group ease-in-out duration-300 hover:bg-slate-800 rounded-lg transition-all items-center text-sm w-full flex justify-between  ",
            { "bg-slate-800": `/${d.href}` === pathName }
          )}
          href={d.href}
        >
          <div className="text-ellipsis overflow-hidden w-[80%] whitespace-nowrap">
            {d.title}
          </div>
          <div className="  transition-all items-center gap-2 hidden group-hover:flex ease-in-out duration-300 ">
            <BsThreeDots />
            <BsArchiveFill />
          </div>
        </Link>
      ))}
    </div>
  );
}
