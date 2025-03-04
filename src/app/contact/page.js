"use client"
import * as actions from "@/app/actions/actions"

const ContactForm=()=>{

    const modifiedAction=actions.handleFormSubmit.bind(null,)

    return(
        <section className={"form text-black bg-red-400 w-[80%] lg:w-[80%] my-0 lg:my-auto"}>
            <form action={modifiedAction}>

                <label htmlFor="firstname">First Name</label>
                <input type="text" name={"firstname"}/>

                <label htmlFor="lastname">LAst Name</label>
                <input type="text" name={"lastname"}/>

                <button type={"submit"}>Submit </button>

            </form>

        </section>
    )
}

export default ContactForm