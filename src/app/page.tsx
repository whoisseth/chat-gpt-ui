/** @format */
import { FaChevronDown } from "react-icons/fa";

import Image from "next/image";
import { FaArrowUp } from "react-icons/fa6";

const cardData = [
  {
    heading: "Customer Loyalty Program",
    description: "Earn points for every purchase "
  },
  {
    heading: "Marketing Strategies for Sunglasses (Gen Z)",
    description: "Collaborate with influencers, "
  },
  {
    heading: "Madagascar Wildlife Exploration on a Budget",
    description: "Visit national parks, opt for budget tours."
  },
  {
    heading: "Explaining Superconductors",
    description: "Materials that conduct electricity loss of energy."
  }
];

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-between gap-3 pb-5 ">
      {/* nav */}
      <button className="text-lg font-bold flex items-center gap-2  rounded-xl p-2 hover:bg-slate-800 transition-all w-fit ">
        <p>ChatGPT 3.5</p>
        <FaChevronDown className="text-xs text-gray-500  " />
      </button>

      {/* main */}
      <main className="flex flex-col items-center text-center justify-center gap-4">
        <div className=" h-10 w-10 bg-white p-1 rounded-full">
          <img src="/assets/chatgpt-log.svg" alt="" />
        </div>

        <p className="text-2xl font-semibold  ">How can I help you today?</p>
      </main>
      {/* bottom section */}
      <section className="max-w-3xl mx-auto flex flex-col gap-5">
        {/* card */}
        <div className="grid grid-cols-2 gap-3">
          {cardData.map((d, i) => (
            <Card key={i} discription={d.description} heading={d.heading} />
          ))}
        </div>
        {/* Searchbar */}

        <div className="flex relative ">
          <input
            type="text"
            placeholder="Message ChatGPT..."
            className="w-full h-12 bg-inherit rounded-xl border border-gray-500 px-4 "
          />
          <button className=" text-black hover:opacity-80 bg-slate-500 w-fit rounded-xl p-3 absolute right-2 top-1 ">
            <FaArrowUp />
          </button>
        </div>
      </section>
    </div>
  );
}

type CardProp = {
  heading: string;
  discription: string;
};

function Card(props: CardProp) {
  return (
    <button className="w-full hover:bg-slate-800 transition-all flex flex-col gap-1 p-3 text-sm font-semibold border border-gray-500 rounded-xl">
      <h2>{props.heading}</h2>
      <p className="text-gray-500">{props.discription}</p>
    </button>
  );
}
