import React from "react";
import { exploreCards } from "./data";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ExploreCards = () => {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {exploreCards.map(({ image, title, description, href }) => (
        <li key={title}>
          <Link
            href={href}
            key={title}
            className="group hover:bg-accent w-full transition-all ease-in flex items-start gap-5 p-5 rounded-md"
          >
            <div className="relative w-[110px] aspect-square">
              <Image fill src="/bar-grid.svg" alt="Bar Grid" />
            </div>
            <div className="">
              <h3 className="font-semibold text-xl">{title}</h3>
              <p className="text-muted-foreground mt-2">{description}</p>
              <div className="flex mt-3 font-semibold text-blue-500 items-center gap-1 ">
                <span>Explore</span>
                <ArrowRight className="size-5 group-hover:translate-x-3 transition " />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ExploreCards;
