import React from "react";

const Skills = () => {
    return (
        <section className={"skills p-4 bg-red-400 flex w-full text-black lg:w-[80%] my-0 mx-auto "}>

            <div className="skills__design bg-white grow basis-[40%] ">

                <h1 className="skills__design--title">Design Skills</h1>

                <div className="skills__design__wrapper">
                    <h4>Wen Design</h4>
                    <div className="skills__design--progress">
                        <span className="skills__design--progress__1"></span>
                    </div>
                </div>

                <div className="skills__design__wrapper">
                    <h4>Wen Design</h4>
                    <div className="skills__design--progress">
                        <span className="skills__design--progress__1"></span>
                    </div>
                </div>

                <div className="skills__design__wrapper">
                    <h4>Wen Design</h4>
                    <div className="skills__design--progress">
                        <span className="skills__design--progress__1"></span>
                    </div>
                </div>

                <div className="skills__design__wrapper">
                    <h4>Wen Design</h4>
                    <div className="skills__design--progress">
                        <span className="skills__design--progress__1"></span>
                    </div>
                </div>


            </div>

            <div className="skills__coding grow  basis-[40%] bg-black">
                <h1 className="skills__design--title">Coding Skills</h1>

            </div>

        </section>
    )
}

export default Skills