import React from "react";
import {MdOutlineDesignServices, MdOutlineSettingsSystemDaydream, MdWeb} from "react-icons/md";
import {BsPassportFill} from "react-icons/bs";
import {FaSearchengin} from "react-icons/fa";
import {IoIosAppstore} from "react-icons/io";

const Services = () => {
    return (
        <section id={"services"} className={"services text-black w-full   flex mt-8 "}>


            <div className="content-wrapper px-2  flex flex-wrap col w-full  md:flex-row  my-0 mx-auto justify-center items-center  md:w-[80%]">
                <div id={"service"} className="service z-1 services__service-1  service-after   grow p-5 relative   md:basis-[42%]  lg:basis-[32%] bg-[#FFF5E0] m-1    after:content=[''] ">
                    <MdOutlineDesignServices size={40}/>
                    <h3 className="services__service-1-title uppercase bold text-3xl">UX UI Engineering</h3>
                    <p className="services__service-1 text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, omnis!</p>
                </div>
                <div className=" service services__service-2  service-after  grow p-5   md:basis-[42%] lg:basis-[32%] bg-[#FFF5E0] m-1">
                    <IoIosAppstore size={40} />
                    <h3 className="services__service-2-title  text-3xl">Mobile App Development</h3>
                    <p className="services__service-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, omnis!</p>
                </div>
                <div className="service services__service-3  service-after grow p-5  md:basis-[42%]   lg:basis-[32%] bg-[#FFF5E0] m-1">
                    <MdWeb size={40} />
                    <h3 className="services__service-3-title  text-3xl">Web Development</h3>
                    <p className="services__service-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, omnis!</p>
                </div>
                <div className="service services__service-4 grow  service-after  p-5   md:basis-[42%]  lg:basis-[32%] bg-[#FFF5E0] m-1">
                    <FaSearchengin size={40} />
                    <h3 className="services__service-4-title  text-3xl">Reverse Engineering</h3>
                    <p className="services__service-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, omnis!</p>
                </div>
                <div className="service services__service-5 grow p-5  service-after  md:basis-[42%] lg:basis-[32%] bg-[#FFF5E0] m-1">
                    <BsPassportFill size={40} />
                    <h3 className="services__service-5-title  text-3xl">Portfolio Design</h3>
                    <p className="services__service-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, omnis!</p>
                </div>
                <div className="service services__service-6  grow p-5  service-after  md:basis-[42%]    lg:basis-[32%] bg-[#FFF5E0] m-1">
                    <MdOutlineSettingsSystemDaydream size={40} />
                    <h3 className="services__service-6-title  text-3xl">ERP Solutions</h3>
                    <p className="services__service-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, omnis!</p>
                </div>

            </div>

        </section>
    )
}

export default Services