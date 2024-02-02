import { useEffect } from "react"
import { gsap } from "gsap"
import SplitType from "split-type"


function Header() {


    useEffect(() => {
        const logoTxt = new SplitType('#logo-txt')


        gsap.to('.char', {
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            duration: .1
        })
        gsap.to('.char', {
            autoAlpha: 0,
            stagger: .1,
            delay: 2,
            duration: .01,
            repeat: -1,
            repeatDelay: 1,
            yoyo: true,
        })
        gsap.to('#banner-1', {
            x: 0,
            delay: 3,
        })
        gsap.to('#banner-2', {
            opacity: 1,
            delay: 6
        })
    }, []);
    return (
        <div>
            <div className="font-custom-1 flex justify-between bg-[#0A8754]">
                <div>
                    <p className="ml-4 mt-4 pb-4">logo</p>
                </div>
                <div className=" cursor-pointer flex">
                    <p className="mr-4 mt-2 text-[25px] hover:text-[#004F2D]">Home</p>
                    <p className="mr-4 mt-2 text-[25px] hover:text-[#004F2D]">About</p>
                    <p className="mr-4 mt-2 mb-2 pl-2 pr-2 rounded-xl text-[25px] bg-[#BFD7EA] hover:bg-[#91AEC1] hover:text-[#004F2D] ">Contact</p>
                </div>
            </div>
            <div className=" bg-[#004F2D] h-screen flex items-center justify-center"> 
                <img className=" opacity-90 absolute h-[75%] right-[20.5%]" src="https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <h1 id="logo-txt" className="leading-11 clip-polygon text-[105px] font-custom ">Wild Roots Nature.</h1>
            </div>
            <div className="bg-[#91AEC1] flex items-center text-center justify-between ">
                <p id="banner-1" className="w-[45%] h-auto p-16 font-custom-1 text-[20px]">
                Empowering communities to become stewards of their natural environments while advocating for policies that promote conservation and biodiversity. Together, we can safeguard our planet's ecological diversity for generations to come.</p>
                <p id="banner-2" className="opacity-0 w-[45%] h-auto p-12 font-custom-1 text-[20px]">
                Join our conservation organization in the fight to preserve Earth's biodiversity, combat climate change, and protect vital ecosystems threatened by human activities. Together, we can make a meaningful impact, ensuring a sustainable future for generations to come.</p>
            </div>  
        </div>
    )
}

export default Header