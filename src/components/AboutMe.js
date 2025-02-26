import React from "react";
import Image from "next/image";

const AboutMe=()=>{
    return(
        <section className={"about__me flex flex-col w-full text-black lg:flex-row"}>
            <div className="about__me__content   flex flex-col w-full text-black lg:flex-row items-center lg:w-[80%] my-0 mx-auto   ">
                <div className="about__me__content--image-wrapper grow my-6  border-2 lg:h-[800px]  basis-[50%]">
                    <Image className={"h-full w-full"} style={{objectFit: "cover"}} src={"https://images.unsplash.com/photo-1509356587986-64d19828e173?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={"poster"}
                           width={"450"} height={"800"}/>
                </div>
                <div className="about__me__content--title basis-[45%]  lg:p-16">
                    <h2
                        className={"text-8xl relative mb-5  after:content=[''] after:absolute after:left-0  after:bottom-0 after:border-red-200 after:border-2 after:w-[20%]"}
                    >About Me</h2>
                    <p className={"text-[16px] mb-4"}>
                        As a passionate designer, I transform ideas into stunning visual experiences. With an eye for detail
                        and a love for creativity, I specialize in designing digital and brand identities that resonate with
                        your audience. Let’s bring your vision to life with designs that make an impact.
                    </p>
                    <button
                        className={"text-3xl border border-1 p-4 rounded border-gray-500  relative overflow-hidden group  hover:text-[#D3E671]  z-10  "}
                    >
                        Read More
                        <span
                            className="absolute z-minus inset-0 bg-black w-full h-full transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-1 "></span>
                    </button>
                </div>

            </div>
        </section>
    )
}

export default AboutMe