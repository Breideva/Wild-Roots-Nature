import { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

function Header() {
  useEffect(() => {
    const logoTxt = new SplitType("#logo-txt");

    gsap.to(".char", {
      opacity: 1,
      stagger: 0.1,
      delay: 0.2,
      duration: 0.1,
    });

    const handleScroll = () => {
      const banner1 = document.getElementById("banner-1");
      const banner2 = document.getElementById("banner-2");
      //const navigation = document.getElementById("nav");

      const scrollPosition = window.scrollY;

      /*if(scrollPosition > 0) {
        navigation.style.backgroundColor = 'white'
      } else {
        navigation.style.backgroundColor = 'rgb(22 101 52)'
      }*/


      if (scrollPosition > 75) {
        gsap.to(banner1, { opacity: 1, duration: 1 });
        gsap.to(banner2, { opacity: 1, duration: 1 });
      } else {
        gsap.to(banner1, { opacity: 0, duration: 1 });
        gsap.to(banner2, { opacity: 0, duration: 1 });
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <div
        id="nav"
        className="z-10 fixed w-[100%] font-custom-1 flex justify-between bg-white"
      >
        <div>
          <img className="ml-4 pb-4" src="" />
        </div>
        <div className="flex">
          <p className="mr-10 mt-2 text-[25px] cursor-pointer ">Home</p>
          <p className="mr-10 mt-2 text-[25px] cursor-pointer ">About</p>
          <p className="mr-10 mt-2 text-[25px] cursor-pointer ">Contact</p>
          <p className="mr-10 mt-2 mb-2 pl-2 pr-2 rounded-xl text-[25px] bg-white hover:bg-slate-300 cursor-pointer ">
            Donate
          </p>
        </div>
      </div>
      <div className="bg-white h-screen flex items-center justify-center">
        <img
          className="opacity-85 absolute h-[75%] right-[35%]"
          src="https://images.pexels.com/photos/566496/pexels-photo-566496.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
          className="opacity-85 absolute h-[75%] right-[12%]"
          src="https://images.pexels.com/photos/109391/pexels-photo-109391.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
          className="opacity-85 absolute h-[75%] right-[20.5%]"
          src="https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <h1
          id="logo-txt"
          className=" text-black leading-11 clip-polygon text-[140px] font-custom "
        >
          Wild Roots Nature.
        </h1>
      </div>
      <div className="flex items-center text-center justify-between m-24">
        <p
          id="banner-1"
          className=" bg-slate-200 w-[45%] h-auto p-16 font-custom-1 text-[20px]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A temporibus
          illum quos? Odio, inventore. Cupiditate quasi tenetur similique odit
          voluptatum corrupti facere temporibus labore, accusantium expedita?
          Nobis exercitationem vel officia voluptate optio quae earum quisquam,
          dignissimos nostrum doloribus inventore tenetur.
        </p>
        <p
          id="banner-2"
          className=" bg-slate-200 opacity-0 w-[45%] h-auto p-16 font-custom-1 text-[20px]"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          blanditiis odit autem ex. Enim consequatur tenetur adipisci ducimus
          quaerat, exercitationem dignissimos aperiam soluta libero, voluptatem
          illum! Beatae accusamus adipisci temporibus magni ex! Possimus quos
          consequuntur facilis? Deleniti, ducimus non? Voluptate!
        </p>
      </div>
    </div>
  );
}

export default Header;
