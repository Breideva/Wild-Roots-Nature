import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  useEffect(() => {
    gsap.to("#nav > a", {
      opacity: 1,
      duration: 1,
      stagger: 0.3,
      delay: 0.1,
      x: 0,
    });
  }, []);

  const [position, setPosition] = useState(0);
  const changePosition = () => {
    setPosition(window.scrollY);
  };
  window.addEventListener("scroll", changePosition);
  useEffect(() => {
    console.log(position);
  }, [position]);

  return (
    <div className="w-full flex justify-center z-30 absolute top-0">
      <div
        className={`z-10 w-full fixed py-2 font-custom-1 flex justify-center bg-bg  transition-all duration-200
          ${position === 0 ? "shadow-none" : "shadow-md"}`}
      >
        <div
          id="nav"
          className="flex items-center gap-4 md:gap-6 font-normal text-sm xl:text-2xl"
        >
          <a
            href="#"
            className=" cursor-pointer opacity-0 -translate-x-5 duration-75"
          >
            Home
          </a>
          <a
            href="#about"
            className=" cursor-pointer opacity-0 -translate-x-5 duration-75"
          >
            About
          </a>
          <a
            href="#contact"
            className=" cursor-pointer opacity-0 -translate-x-5 duration-75"
          >
            Contact
          </a>
          <a
            href=""
            className="px-2 py-1 rounded-xl  bg-bgBlue text-white hover:bg-slate-300 cursor-pointer shadow-md opacity-0 -translate-x-5 duration-75"
          >
            Donate
          </a>
        </div>
      </div>
    </div>
  );
}
