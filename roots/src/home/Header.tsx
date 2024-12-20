import { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import img from "../imgs/header-img.png";

function Header() {
  useEffect(() => {
    const logoTxt = new SplitType("#logo-txt");
    const tl = gsap.timeline({})
    tl.to("#bg", {
      opacity: .9,
      duration: 1,
      delay: .1,
    })
    .to(".char", {
      opacity: 1,
      stagger: 0.1,
      duration: 0.1,
    });
  }, []);
  return (
    <div className="h-screen w-full flex items-center justify-center absolute top-0 left-0">
      <div className="w-10/12 h-full flex items-center relative">
        <div
        id="bg"
          className="w-full h-1/2 lg:h-3/4 opacity-0"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <h1
        id="logo-txt"
        className=" text-black leading-11 clip-polygon text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-custom absolute"
      >
        Wild Roots Nature.
      </h1>
    </div>
  );
}

export default Header;
