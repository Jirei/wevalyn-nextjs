"use client";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { useAppear } from "@/hooks/use-appear";
import { cn } from "@/lib/common";

export function DemoWebsiteItem({
  name,
  imgURL,
}: {
  name: string;
  imgURL: StaticImageData;
}) {
  const intersectionRef = useRef(null);
  const hasAppeared = useAppear(intersectionRef);
  return (
    <li
      ref={intersectionRef}
      className={cn(
        "opacity-0 duration-3000 flex flex-col items-center gap-y-9",
        hasAppeared && "opacity-100"
      )}
    >
      <h2 className="text-primary-light dark:text-primary-light-dark-theme text-2xl">
        {name}
      </h2>
      <Image src={imgURL} alt={name + " site screenshot"} />
      <button
        onClick={() =>
          alert(
            "Fun fact: the demo sites actually do exist but aren't hosted so can't be seen."
          )
        }                                                                                                                                              // used to cancel hover in dark theme
        className="bg-primary-gradient dark:bg-primary-gradient-dark-theme text-white text-xl px-6 py-4 rounded hover:cursor-pointer hover:scale-105 dark:hover:scale-100 border border-transparent dark:hover:border-primary-light-dark-theme"
      >
        See live demo
      </button>
    </li>
  );
}
