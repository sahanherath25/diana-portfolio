import React from "react";
import Image from "next/image";
import ProfileDiana from"../../public/images/diana.jpeg"
import {FaFacebookF, FaLinkedin, FaTiktok} from "react-icons/fa";
import {FaSquareDribbble, FaSquareXTwitter} from "react-icons/fa6";
import {FiInstagram} from "react-icons/fi";



const SideNav=()=>{
    return(
        <aside id={"side-nav "} className={" sticky top-0 left-0  h-screen   md:sticky top-0 left-0  h-screen  bg-[#021526]"}>
            <div className="side-nav__content h-[100%] flex flex-col   md:h-[100%] flex flex-col justify-between">
                <div className="side-nav__content--logo w-[54px] h-[54px]">
                    <Image src={ProfileDiana} width={"100%"} height={"100%"} alt={"Diana Profile Picture"}/>
                </div>
                <ul className="side-nav__content--social md:flex flex-col justify-center items-center pb-3">
                    <a href="#" className="# my-2" ><FaFacebookF size={40} color={"white"} /></a>
                    <a href="#" className="# my-2"><FaSquareXTwitter size={40} color={"white"} /></a>
                    <a href="#" className=" my-2"><FaLinkedin size={40} color={"white"} /></a>
                    <a href="#" className="my-2"><FiInstagram size={40} color={"white"} /></a>
                    <a href="#" className="my-2"><FaSquareDribbble size={40} color={"white"} /></a>
                    <a href="#" className=""><FaTiktok size={40} color={"white"} /></a>
                </ul>
            </div>
        </aside>
    )
}

export default SideNav