import React from "react";
import Link from "next/link";

const Navbar=()=>{
    return(
        <nav className={"flex flex-col md:flex-row py-5   "}>
            <Link className={"pl-2 mr-auto  transition-links transition-all duration-300 ease-in-out hover:text-blue-500 hover:underline "}  href={"/"}>Profile</Link>
            <Link className={"px-2  transition-all duration-300 ease-in-out hover:text-blue-500 hover:underline"} href={"/"}>Home</Link>
            <Link className={"px-2"}  href={"/contact"}>Contact</Link>
            <Link className={"px-2"}  href={"/hireme"}>Hire Me</Link>
            <Link className={"px-2"}  href={"/projects"}>Projects</Link>
            <Link className={"px-2"} href={"/services"}>Services</Link>
        </nav>
    )
}

export default Navbar