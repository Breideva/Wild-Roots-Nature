import { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

function Header() {
  useEffect(() => {
    const logoTxt = new SplitType("#logo-txt");

    gsap.to(".char", {
      opacity: 1,
      stagger: 0.1,
      duration: 0.1,
    });
  }, []);
  return (
    <div className="h-screen w-full flex items-center justify-center absolute top-0 left-0">
      <img
        className="opacity-85 absolute h-1/4 xl:h-3/4 right-[35%]"
        src="https://images.pexels.com/photos/566496/pexels-photo-566496.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <img
        className="opacity-85 absolute h-1/4 xl:h-3/4  right-[12%]"
        src="https://images.pexels.com/photos/109391/pexels-photo-109391.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <img
        className="opacity-85 absolute h-1/4 xl:h-3/4  right-[20.5%]"
        src="https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <h1
        id="logo-txt"
        className=" text-black leading-11 clip-polygon text-xl xl:text-9xl font-custom"
      >
        Wild Roots Nature.
      </h1>
    </div>
  );
}

export default Header;
