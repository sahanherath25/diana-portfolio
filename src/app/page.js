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
                                className={"relative inline-block  nav-bar-hover-before nav-bar-hover-after  "}
                                href="#">Home</Link></li>
                            <li className={"px-2"}><Link
                                className={"relative inline-block  nav-bar-hover-before nav-bar-hover-after   "}
                                href="#">About</Link></li>
                            <li className={"px-2"}><Link
                                className={"relative inline-block  nav-bar-hover-before nav-bar-hover-after  "}
                                href="#">Projects</Link></li>
                            <li className={"px-2"}><Link
                                className={"relative inline-block  nav-bar-hover-before nav-bar-hover-after   "}
                                href="#">Services</Link></li>
                            <li className={"px-2"}><Link
                                className={"relative inline-block  nav-bar-hover-before nav-bar-hover-after  "}
                                href="#">Hire Me</Link></li>
                            <li className={"px-2 mr-3"}><a
                                className={"relative inline-block  before:content-[''] before:absolute before:left-0 before:top-0 before:bg-white before:h-[2px] before:w-full      after:content-[''] after:absolute after:bg-white  after:w-full after:h-[2px]  after:left-0  after:bottom-0"}
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
            </main>

        </div>
    );
}
 // className={`mr-5 ${!showMenu?'hello after:content-["123"]``}