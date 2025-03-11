"use client"
import Image from "next/image";

import {Montserrat} from "next/font/google"
import {Roboto} from "next/font/google"
import SideNav from "@/components/SideNav";
import Link from "next/link";
import {GiHamburgerMenu} from "react-icons/gi";
import {useState} from "react";
import ShowCase from "@/components/ShowCase";
import WorkSection from "@/components/WorkSection";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import ContactForm from "@/components/ContactForm";


const HeroFont = Montserrat({
    style: ["normal", "italic"],
    subsets: ["latin"],
    weight: ["400", "700"],
    fallback: ["Arial", "sans-serif"],
});

const ParaFont = Roboto({
    style: ["normal", "italic"],
    subsets: ["latin"],
    weight: ["400", "700"],
    fallback: ["Arial", "sans-serif"],
});

export default function Home() {

    const [showMenu, setShowMenu] = useState(true);

    const onClickMenu = () => {
        // setShowMenu(!showMenu);
    }

    return (
        <div className={"flex w-full h-full bg- overflow-auto relative  "}>
            {/*<h1 className={`${HeroFont.className}`}>I'm Diana</h1>*/}
            {/*<p className={`${ParaFont.className}`}>From USA</p>*/}
            <SideNav/>
            <main className={" text-white grow border-white bg-red-500"}>
                <header id={"header "} className={" w-full h-[54px] bg-[#021526]  items-center "}>
                    <nav id={"header__main-nav"} className={" h-[100%]"}>

                        <ul className="header__main__nav--links  w-[100%] h-[100%] flex hidden  md:flex justify-end items-center ">
                            <li className={"px-2"}><Link
                                className={"relative inline-block  opacity-80 rounded px-6 mx-2 hover:opacity-100 hover:bg-red-400  transition-all duration-500 ease-in-out "}
                                href="#">Home</Link></li>
                            <li className={"px-2"}><Link
                                className={"relative inline-block opacity-80 rounded px-6 mx-2 hover:opacity-100 hover:bg-red-400  transition-all duration-500 ease-in-out "}
                                href="#">About</Link></li>
                            <li className={"px-2"}><Link
                                className={"relative inline-block  opacity-80 rounded px-6 mx-2 hover:opacity-100 hover:bg-red-400  transition-all duration-500 ease-in-out "}
                                href="#">Projects</Link></li>
                            <li className={"px-2"}><Link
                                className={"relative inline-block  opacity-80 rounded px-6 mx-2 hover:opacity-100 hover:bg-red-400  transition-all duration-500 ease-in-out"}
                                href="#">Services</Link></li>
                            <li className={"px-2"}><Link
                                className={"relative inline-block opacity-80 rounded px-6 mx-2 hover:opacity-100 hover:bg-red-400  transition-all duration-500 ease-in-out "}
                                href="#">Hire Me</Link></li>
                            <li className={"px-2 mr-3"}><a
                                className={"relative inline-block opacity-80 rounded px-6 mx-2 hover:opacity-100 hover:bg-red-400  transition-all duration-500 ease-in-out"}
                                href="#">Contact Me</a></li>
                        </ul>

                        <div className={`header__main__nav--hamburg none  w-full z-2 flex rounded relative  justify-end items-center  md:hidden  mr-5 `} >
                            <GiHamburgerMenu size={50}
                                             className={` mr-5 z-2 ${!showMenu ? "hidden" : 'hello after:content-["123"] after:z-5 after:absolute after:bg-white after:right-0 after:mb-2  after:top-[54px] after:bottom-[54px] after:w-full after:h-[100vh] '}`}
                                             onClick={onClickMenu}/>
                        </div>

                        {/*after:content=["] after:absolute after:bg-white after:right-0 after:mb-2  after:top-[54px] after:bottom-[54px] after:w-full after:h-[100vh]*/}

                    </nav>
                </header>
                <ShowCase/>
                <WorkSection/>
                <AboutMe/>
                <Services/>
                <Skills/>
                <Testimonial/>
                <ContactForm/>
            </main>

        </div>
    );
}
 // className={`mr-5 ${!showMenu?'hello after:content-["123"]``}