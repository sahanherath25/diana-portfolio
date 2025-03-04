import React from "react";
import Image from "next/image";

const Testimonial = () => {
    return (
        <section id={"testimonials"}
                 className={"testimonials text-black  m-4 flex flex-col flex-wrap w-full  my-0 mx-auto md:items-center  md:w-[80%] md:flex-row md:justify-center   md:my-0 md:mx-auto "}>

            <div className="testimonials__customer--1 my-2   w-[90%] my-0 mx-auto my-0  md:basis-[40%]  relative group  ">

                <div className="testimonials__customer--1__bg-Image h-[450px] aspect-[9/16]  md:aspect-[4/3] lg: h[450px]  md:h-[100%]  w-full flex flex-col  ">
                    <Image
                        className={"object-cover w-full  h-full"}
                        src={"https://plus.unsplash.com/premium_photo-1670282392820-e3590c1c5c54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGdpcmx8ZW58MHx8MHx8fDA%3D"}
                        width={"450"}
                        height={"350"}
                        style={{objectFit: "cover"}}
                        alt={""}
                    />
                </div>
                <div
                    className="testimonials__customer--1__content absolute top-[60%]  md:top-[60%] p-4 lg:p-8 left-0 z-10 w-[80%] lg:w-[50%] text-white bg-[#000]  transform opacity-0 translate-y-0  group-hover:opacity-100 transition-all origin-top  group-hover:translate-y-8  transition-all duration-1000 ease-in-out ">
                    <h2 className={"text 3xl uppercase text-3xl font-semibold"}>Remarkable Eye</h2>
                    <p className={"text-base text-l"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet beatae consectetur
                        dicta labore mollitia perferendis quasi vel vitae?</p>
                </div>
            </div>
            <div className="testimonials__customer--2 my-2   w-[90%] my-0 mx-auto my-0   md:basis-[40%] relative  group ">
                <div className="testimonials__customer--2__bg-Image w-full  h-[450px]  md:h-[100%] aspect-[9/16]   md:aspect-[4/3]  flex flex-col items-center md:items-stretch ">
                    <Image
                        className={" w-full  h-full object-cover"}
                        src={"https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        width={"450"}
                        height={"350"}
                        style={{objectFit: "cover"}}
                        alt={""}
                    />
                </div>
                <div className="testimonials__customer--2__content absolute left-0 top-[60%] p-4 z-10 text-white bg-[#000] lg:w-[50%]  transform opacity-0 translate-y-0  group-hover:opacity-100 transition-all origin-top  group-hover:translate-y-8  transition-all duration-1000 ease-in-out ">
                    <h2 className={"text 3xl uppercase text-3xl font-semibold"}>Remarkable Eye</h2>
                    <p className={"text-base"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet beatae consectetur
                        dicta labore mollitia perferendis quasi vel vitae?</p>
                </div>
            </div>
            <div className="testimonials__customer--3 my-2  w-[90%] my-0 mx-auto my-0  md:basis-[40%] flex flex-col  relative group">

                <div className="testimonials__customer--3__bg-Image h-[450px] md:h-full   aspect-[9/16]  md:aspect-[4/3] flex flex-col items-stretch ">
                    <Image
                        className={" w-full h-full object-cover"}
                        src={"https://plus.unsplash.com/premium_photo-1663045960088-fda623767cf1?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        width={"450"}
                        height={"450"}
                        style={{objectFit: "cover"}}
                        alt={""}
                    />
                </div>
                <div className="testimonials__customer--3__content absolute  left-0 top-[60%] p-4  w-[80%] lg:w-[50%]  text-white bg-[#000]  transform opacity-0 translate-y-0  group-hover:opacity-100 transition-all origin-top  group-hover:translate-y-8  transition-all duration-1000 ease-in-out ">
                    <h2 className={"text 3xl uppercase text-3xl font-semibold"}>Remarkable Eye</h2>
                    <p className={"text-base"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet beatae consectetur
                        dicta labore mollitia perferendis quasi vel vitae?</p>
                </div>

            </div>
            <div className="testimonials__customer--4 my-2  w-[90%] my-0 mx-auto my-0  md:basis-[40%]  relative group">
                <div className="testimonials__customer--4__bg-Image w-full h-[450px] md:h-full  aspect-[9/16]  md:aspect-[4/3] items-stretch ">
                    <Image
                        className={" w-full h-full object-cover"}
                        src={"https://plus.unsplash.com/premium_photo-1670282392820-e3590c1c5c54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGdpcmx8ZW58MHx8MHx8fDA%3D"}
                        width={"450"}
                        height={"350"}
                        style={{objectFit: "cover"}}
                        alt={""}
                    />
                </div>
                <div className="testimonials__customer--4__content absolute text-white  left-0 top-[60%] p-4 w-[80%] lg:w-[50%]  bg-[#000]  transform opacity-0 translate-y-0  group-hover:opacity-100 transition-all origin-top  group-hover:translate-y-8  transition-all duration-1000 ease-in-out ">
                    <h2 className={"text 3xl uppercase text-3xl font-semibold"}>Remarkable Eye</h2>
                    <p className={"text-base"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet beatae consectetur
                        dicta labore mollitia perferendis quasi vel vitae?</p>
                </div>
            </div>


        </section>
    )
}

export default Testimonial