import backgroundImage from "../../../public/hero.jpg";
import Image from "next/image";
import "./hero.scss";

export default function HeroBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //source of the "hack" for the background image: https://github.com/vercel/next.js/discussions/18357
    <div className="relative">
      <span className="absolute top-0 right-0 z-50 w-screen hidden lg:block">
        <svg
          width="100%"
          viewBox="0 0 1640 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            width="100%"
            d="M-0.5 0H1640.5V114L-0.5 61V0Z"
            fill="url(#paint0_linear_3_45)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3_45"
              x1="806.5"
              y1="-93.5"
              x2="895"
              y2="451.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop className="hero__stop1" stopColor="#0069B5" />
              <stop className="hero__stop2" offset="1" stopColor="#6FBAF0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      {/*clipPath:'inset(0)' is used to hide the fixed image inside of it
      source of the solution: https://stackoverflow.com/a/68466386/14131879
      */}
      <div
        style={{ clipPath: "inset(0)" }}
        className="relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgb(0,105,181)]/40 dark:after:bg-[rgb(0,0,0)]/40"
      >
        {/* Be careful when modifying stuff, you  need to keep the image optimized and with a fixed effect: https://stackoverflow.com/questions/73528598/how-can-i-use-next-js-image-and-attach-it-to-the-background */}
        <div className="fixed h-full w-full left-0 top-0">
          <Image
            priority
            fill
            className="object-cover pointer-events-none left-0 top-0"
            src={backgroundImage}
            alt={
              "background image of the hero showing a meeting of a dynamic startup"
            }
          />
        </div>
        <div className="relative h-[80vh] lg:h-[90vh] z-10 flex items-center justify-center">
          <div className="flex items-center justify-center">
            <svg
              className="w-[24rem] max-w-[98vw] md:min-w-[35rem] md:w-[60vw] lg:w-[35rem]"
              // height='100vh'
              viewBox="0 0 213 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                width="100%"
                height="100%"
                cx="106.019"
                cy="52.1803"
                rx="106.019"
                ry="52.1803"
                className="fill-[#0069b5] dark:fill-[#365854]"
                fill=""
                fillOpacity="0.8"
              />
            </svg>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
