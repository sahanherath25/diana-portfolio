import React from "react";

const Skills = () => {
    return (
        <section id={"skills"} className={"skills my-4  flex flex-wrap w-full text-black flex-col lg:p-6 lg:p-4 lg:flex-row lg:w-[80%] my-0 mx-auto "}>



            <div className="skills__design bg-white grow basis-[40%] p-2 lg:p-4  uppercase">

                <h1 className="skills__design--title text-3xl">Design Skills</h1>

                <div className="skills__design__wrapper">
                    <h4>Wen Design</h4>
                    <div className="skills__design--progress">
                        <span className="skills__design--progress__1"></span>
                    </div>
                </div>

                <div className="skills__design__wrapper">
                    <h4>Wen Design</h4>
                    <div className="skills__design--progress">
                        <span className="skills__design--progress__2"></span>
                    </div>
                </div>

                <div className="skills__design__wrapper">
                    <h4>Wen Design</h4>
                    <div className="skills__design--progress">
                        <span className="skills__design--progress__3"></span>
                    </div>
                </div>

                <div className="skills__design__wrapper">
                    <h4>Wen Design</h4>
                    <div className="skills__design--progress">
                        <span className="skills__design--progress__4"></span>
                    </div>
                </div>

                <div className="skills__design__wrapper">
                    <h4>Wen Design</h4>
                    <div className="skills__design--progress">
                        <span className="skills__design--progress__5"></span>
                    </div>
                </div>

                <div className="skills__design__wrapper">
                    <h4>Wen Design</h4>
                    <div className="skills__design--progress">
                        <span className="skills__design--progress__6"></span>
                    </div>
                </div>


            </div>

            <div className="skills__coding grow  basis-[40%]  p-4 uppercase">
                <h1 className="skills__coding--title text-3xl">Coding Skills</h1>

                <div className="skills__design__wrapper">
                    <h4>JavaScript</h4>
                    <div className="skills__coding--progress animation-design-1">
                        <span className="skills__coding--progress__1"></span>
                    </div>
                </div>

                <div className="skills__design__wrapper">
                    <h4>Java</h4>
                    <div className="skills__coding--progress">
                        <span className="skills__design--progress__2"></span>
                    </div>
                </div>

                <div className="skills__design__wrapper">
                    <h4>Python</h4>
                    <div className="skills__coding--progress">
                        <span className="skills__design--progress__3"></span>
                    </div>
                </div>

                <div className="skills__design__wrapper">
                    <h4>React</h4>
                    <div className="skills__coding--progress">
                        <span className="skills__design--progress__4"></span>
                    </div>
                </div>

                <div className="skills__design__wrapper">
                    <h4>C#</h4>
                    <div className="skills__coding--progress">
                        <span className="skills__design--progress__5"></span>
                    </div>
                </div>

                <div className="skills__design__wrapper">
                    <h4>React Native</h4>
                    <div className="skills__coding--progress">
                        <span className="skills__design--progress__6"></span>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default Skills