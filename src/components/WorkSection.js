import React from "react";
import Image from "next/image";
import imageSahan from "../../public/images/kelly.jpg"

const WorkSection = () => {
    return (
        <section id={"work"}
                 className={"   w-[100%]  bg-[#0B192C]"}>
            <div
                className=" flex  flex-wrap flex-col  h-auto w-[100%] md:w-[100%] my-0 mx-auto   lg:w-[80%] xl:w-[90%] justify-center lg:flex-row h-full  justify-center items-center  ">
                <div
                    className="work__card flex aspect-[1/1]  h-[100%] md:basis-[250px] items-stretch  lg:basis-[350px] xl:basic-[450px] p-4  m-5 ">
                    <Image className={"h-full object-cover  lg:basis-[350px]"} style={{objectFit: "cover"}}
                           src={"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                           alt={"poster"} width={"450"} height={"450"}/>
                </div>
                <div className="work__card    md:basis-[450px] lg:basis-[350px] xl:basic-[450px]   p-4 m-5 ">
                    <Image className={"h-full"} style={{objectFit: "cover"}} src={"/images/diana.jpeg"} alt={"poster"}
                           width={"450"} height={"350"}/>
                </div>
                <div className="work__card   md:basis-[450px]  lg:basis-[350px] xl:basic-[450px]   p-4 m-5 ">
                    <Image className={"h-full"} style={{objectFit: "cover"}} src={"/images/diana.jpeg"} alt={"poster"}
                           width={"450"} height={"350"}/>
                </div>
                <div className="work__card   md:basis-[450px] lg:basis-[350px] xl:basic-[450px]  p-4 m-5 ">
                    <Image className={"h-full"} style={{objectFit: "cover"}} src={"/images/diana.jpeg"} alt={"poster"}
                           width={"450"} height={"350"}/>
                </div>
                <div className="work__card   md:basis-[450px] lg:basis-[350px] xl:basic-[450px] p-4 m-5 ">
                    <Image className={"h-full"} style={{objectFit: "cover"}} src={"/images/diana.jpeg"} alt={"poster"}
                           width={"450"} height={"350"}/>
                </div>
                <div className="work__card   md:basis-[450px]  lg:basis-[350px] xl:basic-[450px]   p-4  m-5 ">
                    <Image className={"h-full"} style={{objectFit: "cover"}} src={"/images/diana.jpeg"} alt={"poster"}
                           width={"450"} height={"350"}/>
                </div>
            </div>
        </section>
    )
}

export default WorkSection