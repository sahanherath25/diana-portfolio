"use client"
import * as action from "@/app/actions/actions"
const ContactForm=()=>{

    // async  function  handleFormSubmit(formData){
    //
    //     "use server"
    //     console.log("FROM DATA ",formData)
    //
    //     const firstName=formData.get("firstname")
    //     const lastName=formData.get("lastname")
    //
    //     console.log("FORM DATA",firstName)
    //     console.log("FORM DATA",lastName)
    //
    // }

    return(
        <section
            className={"form text-black my-8 px-[20px]   flex flex-col relative bg-red-400 w-full justify-center  after:w-[100%] after:content=[''] after:absolute after:top-0 after:left-0 after:right-0 after:bg-black after:h-[100%] after:opacity-[70%] "}
            style={{
                backgroundImage: `url(/images/diana.jpeg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'top ',
                height: 'calc(50vh - 54px)',
                backgroundColor: 'black',
                backgroundAttachment: 'fixed',
            }}
        >

            <div className="form-content flex z-10 flex-col text-white pb-5  px-4  bg-[#021526] opacity-[100%] w-[50%] lg:w-[30%]  my-0 mx-auto">

                <h1 className={"text-6xl self-center my-5"}>Contact Me</h1>

                <div className="form-container  ">

                    <form action={action.handleFormSubmit} className={"flex flex-col"}>

                        <div className="form-fields basis-[40%] grow flex p-4">
                            <input
                                placeholder={"First Name "}
                                className={"basis-[40%] grow py-4 text-2xl text-black rounded border-2 border-gray-300 focus:border-[#00FF9C] focus:ring-2 focus:ring-[#00FF9C]  focus:ring-opacity-50 focus:outline-none transition-all duration-300 ease-in-out "}
                                type="text"
                                name={"firstname"}
                            />
                        </div>

                        <div className="form-fields basis-[40%] grow flex p-4">

                            <input
                                className={"basis-[40%] grow py-4 text-black text-2xl rounded rounded border-2 border-gray-300 focus:border-[#00FF9C] focus:ring-2 focus:ring-[#00FF9C] focus:ring-opacity-50 focus:outline-none transition-all duration-300 ease-in-out "}
                                type="text"
                                name={"lastname"}
                                placeholder={"Last  Name "}
                            />

                        </div>

                        <div className="form-fields basis-[40%] grow flex p-4 mb-4">

                            <input
                                className={"basis-[40%]  grow py-4  text-2xl text-black rounded rounded border-2 border-gray-300 focus:border-[#00FF9C] focus:ring-2 focus:ring-[#00FF9C] focus:ring-opacity-50 focus:outline-none transition-all duration-300 ease-in-out "}
                                type="email"
                                name={"email"}
                                placeholder={"Email"}

                            />
                        </div>

                        <button className={" w-[30%] my-4 py-1 rounded mx-auto bg-[#000] px-6 py-6 text-2xl border  hover:border-1 hover:border-white  transition-colors duration-500 hover:bg-[#B6FFA1]  hover:text-black "} type={"submit"}>Submit </button>
                    </form>
                </div>

            </div>

        </section>
    )
}

export default ContactForm