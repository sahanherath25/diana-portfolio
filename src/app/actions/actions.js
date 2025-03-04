"use server"

export  const   handleFormSubmit=async(formData)=>{

    console.log("FROM DATA ",formData)

    const firstName=formData.get("firstname")
    const lastName=formData.get("lastname")
    const email=formData.get("email")

    console.log("FORM DATA",firstName.value)
    console.log("FORM DATA",lastName.value)
    console.log("FORM DATA",email.value)

}