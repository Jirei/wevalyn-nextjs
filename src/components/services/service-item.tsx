"use client";
import { useAppear } from "@/hooks/use-appear";
import { Locale } from "@/internationalization/i18n-config";
import { cn } from "@/lib/common";
import { useRef } from "react";
import React from "react";

export function ServiceItem({
  logos,
  names,
  descriptions,
  yellowRibbon,
  appearFrom,
  lang,
}: {
  logos: React.JSX.Element[];
  names: { en: string; jp: string };
  descriptions: { en: string; jp: string };
  yellowRibbon?: boolean;
  appearFrom: "left" | "right";
  lang: Locale;
}) {
  const intersectionRef = useRef(null);
  const hasAppeared = useAppear(intersectionRef);
  return (
    <li
      ref={intersectionRef}
      className={cn(
        "relative max-w-[24rem] overflow-hidden rounded-[5px] text-white shadow-service-card transition-transform duration-2000",
        appearFrom === "right" &&
          "max-sm:translate-x-[90vw] md:translate-x-[45vw] xl:translate-x-[25vw] 2xl:translate-x-[20vw]",
        appearFrom === "left" &&
          "max-sm:-translate-x-[90vw] md:-translate-x-[45vw] xl:-translate-x-[25vw] 2xl:-translate-x-[20vw]",
        yellowRibbon &&
          "after:absolute after:left-[35%] after:top-0 after:z-10 after:h-14 after:w-full after:rotate-45 after:bg-[#EDDC40]",
        hasAppeared && "!translate-x-0",
      )}
    >
      {/* md:h-full so that the smaller card in tablet view is stretched to fill the row height */}
      <div className="flex flex-col items-center gap-y-8 bg-primary-gradient p-5 py-16 dark:bg-primary-gradient-dark-theme md:h-full">
        <div>
          <div className="flex gap-x-4">{[...logos]}</div>
        </div>
        <h2 className="text-center text-2xl font-bold">{names[lang]}</h2>
        <p className="text-center text-xl">{descriptions[lang]}</p>
      </div>
    </li>
  );
}
