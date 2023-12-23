"use client"
import { useState } from "react"
import * as yup from "yup"
import DisplayContact from "./displayContact"
import { contactTypes, onChangeEventType } from "@/types/components"


export function ContactForm() {
  const [contactInfo, setContactInfo] = useState<contactTypes>({
    name: "",
    lname: "",
    UserName: "",
    Cnic: 0,
    Country: "",
    City: "",
    CompanyName: "",
    email: "",
    phone: 0,
    message:"",
  })

  const [errors, setError ] = useState<string[]>([])

  const contactInfoSchema = yup.object().shape({
    name: yup.string().required().min(4).max(30),
    email: yup.string().email().required(),
    message: yup.string().required()
 })

  const [contactList, setContactList] = useState<contactTypes[]>([])

  const onChangeHandler = (e: onChangeEventType) => {
    let userDetails = {
      ...contactInfo,
      [e.target.name]: e.target.value
    }
    setContactInfo(userDetails)
  }


  const onClickHandler = async () => {
     try {
      const result = await contactInfoSchema.validate(contactInfo)
      console.log(result);
      
       
      if (!result) {
        return 
      }
      
      let newContactList:contactTypes[] = [...contactList, contactInfo]
      setContactList(newContactList)
  
      setError([])
      setContactInfo({
        name: "",
        lname: "",
        UserName: "",
        Cnic: 0,
        Country: "",
        City: "",
        CompanyName: "",
        email: "",
        phone: 0,
        message:"",
        
      })
     } catch (err) {

      setError(err.errors)

       console.log("error",err.errors);     
     }  
  }
  return (
    <>
      {/* <form className="max-w-md mx-auto"> */}

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          First Name
        </label>
        <input
          value={contactInfo.name}
          onChange={onChangeHandler}
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
         Last Name
        </label>
        <input
          value={contactInfo.lname}
          onChange={onChangeHandler}
          type="text"
          id="lname"
          name="lname"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
         UserName
        </label>
        <input
          value={contactInfo.UserName}
          onChange={onChangeHandler}
          type="text"
          id="UserName"
          name="UserName"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
         CNIC
        </label>
        <input
          value={contactInfo.Cnic}
          onChange={onChangeHandler}
          type="number"
          id="Cnic"
          name="Cnic"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
         Country
        </label>
        <input
          value={contactInfo.Country}
          onChange={onChangeHandler}
          type="text"
          id="Country"
          name="Country"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
         City
        </label>
        <input
          value={contactInfo.City}
          onChange={onChangeHandler}
          type="text"
          id="City"
          name="City"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
         Company Name
        </label>
        <input
          value={contactInfo.CompanyName}
          onChange={onChangeHandler}
          type="text"
          id="CompanyName"
          name="CompanyName"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>


      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          value={contactInfo.email}
          onChange={onChangeHandler}
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Phone
        </label>
        <input
          value={contactInfo.phone}
          onChange={onChangeHandler}
          type="number"
          id="phone"
          name="phone"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
         value={contactInfo.message}
         onChange={onChangeHandler}
          id="message"
          name="message"
          rows={4}
          className="w-full px-3 py-2 border rounded-md"
          required
        ></textarea>
      </div>
        {errors.map((item)=>{
          return (
            <div style={{color:"red"}}>
              <h1>{item}</h1>
            </div>
          )
        })}
      <div className="mb-6">
        <button
          onClick={onClickHandler}
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
      {/* </form> */}
      <DisplayContact contactData={contactList} />
    </>
  )
}