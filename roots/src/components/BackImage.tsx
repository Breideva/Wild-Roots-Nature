import { useEffect } from "react";
import Trees from "../imgs/Trees.webp";
import { gsap } from "gsap";

export default function BackImage() {
  useEffect(() => {
    gsap.to("#backImg", {
      opacity: 1,
      duration: 2.5,
      delay: 1.25,
    });
  }, []);
  return (
    <div
      id="backImg"
      className="h-screen w-full sticky top-0 z-0 opacity-0"
      style={{
        backgroundImage: `url(${Trees})`,
        backgroundSize: "50%",
        backgroundPosition: "bottom",
        backgroundRepeat: "repeat-x",
      }}
    ></div>
  );
}
