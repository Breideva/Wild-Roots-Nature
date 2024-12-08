import { useEffect, useState } from "react";

export default function Navbar() {
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
        id="nav"
        className={`z-10 w-full fixed py-2 font-custom-1 flex justify-center bg-bg  transition-all duration-200
          ${position === 0 ? "shadow-none" : "shadow-md"}`}
      >
        <div>{/* <img className="ml-4 pb-4" src="" /> */}</div>
        <div className="flex items-center gap-4 font-normal">
          <a href="#" className="text-2xl cursor-pointer ">Home</a>
          <a href="#about" className="text-2xl cursor-pointer ">About</a>
          <a href="#contact" className="text-2xl cursor-pointer ">Contact</a>
          <a href="" className="px-2 py-1 rounded-xl text-2xl bg-bgBlue text-white hover:bg-slate-300 cursor-pointer shadow-md">
            Donate
          </a>
        </div>
      </div>
    </div>
  );
}
