import React from "react";
import {CiLocationArrow1} from "react-icons/ci";

import localFont from "next/font/local"

import {Montserrat} from "next/font/google"
import {Inder} from "next/font/google"

const Viana=localFont({
    src:"../../public/assets/fonts/vegan-style.ttf"
})

const MontserratFont=Montserrat({
    style:["normal","italic"],
    subsets:["latin"],
    weight:["400","700"],
    fallback: ["Arial", "sans-serif"],
})

const IndieFlowerFont=Inder({
    style:["normal"],
    subsets:["latin"],
    weight:["400"],
    fallback: ["Arial", "sans-serif"],
})

const ShowCase = () => {

    return (

        <section
            id={"showcase"}
            className={ `bg-black h-[calc(100vh-54px)] text-white relative w-full z-10  flex  md: flex  justify-start items-center  after:absolute after:content=["dasdas"]  after:w-full after:h-[calc(100vh-54px)] after:opacity-30 after:bg-[#021526] after:top-0 after:bottom-0 after:z-2  after:left-0  after:right-0  animation-hero  `}
            style={{
                backgroundImage: `url(/images/diana.jpeg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                height: 'calc(100vh - 54px)',
                backgroundColor: 'black',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="showcase__content bg-[#021526] text-white z-10 max-w-[75%] flex flex-col flex-wrap items-start md: p-[20px] text-black w-1da/3 max-w-[40%]  opacity-75 ">
                <h1 className={`showcase__content--title text-7xl md:text-9xl uppercase  transition-colors duration-300 ease-in-out hover:text-[#D3E671]`}>Diana Watson</h1>
                <h2 className={`showcase__content--para p-1 mt-4 text-2xl ${IndieFlowerFont.className}`}>
                    UX UI Engineer / Engineer
                </h2>
                <button className={" flex items-center  bg-[#E9762B] p-3 px-6  z-10 rounded  mt-3 text-3xl text-white after:content=[''] after:absolute after:top-0 after:left-0 after:width-full after:bg-black  after:absolute relative overflow-hidden  after:z--1  relative overflow-hidden group  hover:text-[#E9762B]  "}>
                    <CiLocationArrow1 size={20} className={"mr-2"}/>Click Start
                    <span
                        className="absolute z-minus inset-0 bg-black w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-1 "></span>
                </button>
                {/*<p className={`${MontserratFont.className} animation-fadeIn`}>sahan</p>*/}
            </div>
        </section>
    )
}

export default ShowCase