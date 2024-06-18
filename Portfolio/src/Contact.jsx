import React, { useState } from 'react';

function Contact() {

    const [userContact,setUserContact]=useState({
        username:"",
        email:"",
        message:"",
    })

    const handleContact = (e) => {
      setUserContact({...userContact,[e.target.name]:e.target.value})
    };
    const handleSubmitContact=()=>{
        setUserContact({
          username: "",
          email: "",
          message: "",
        })
        alert(`Message sent successfully ! ThankYou`);
    }
  
    // const handleSubmitContact = async (e) => {
    //   e.preventDefault();
    
    //   if (!userContact.username || !userContact.email || !userContact.message) {
    //     return toast.error("All fields are required");
    //   }else{
    //     addDoc(collection(db, "contactUser"), {
    //       user: userContact.username,
    //       email: userContact.email,
    //       message: userContact.message,
    //     }).then(() => {
    //       toast.success(`Message sent successfully ! ThankYou, ${userContact.username}`);
    //       setUserContact({
    //         username: "",
    //         email: "",
    //         message: "",
    //       }).catch((err)=>toast.error(err.message))
    //     })
    //   }
    // };

  return (
    <div>
      <h1  id="contact" className="text-red-400 text-5xl font-semibold text-center underline mt-7">Contact</h1>
      <section className="text-black body-font relative">
  <div className="container py-5 mx-auto flex sm:flex-nowrap flex-wrap justify-center items-center">
    <div className="lg:w-1/2 md:w-1/2 rounded-lg p-8 flex flex-col mt-10 md:mt-0">
      <div className="relative mb-4">
        <input 
          type="text"
          autoComplete="off"
          name="username"
          value={userContact.username}
          onChange={handleContact}
          placeholder="Your Name"
          id="name" 
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <input 
          type="email"
          autoComplete="off"
          name="email"
          placeholder="Email"
          value={userContact.email}
          onChange={handleContact}
          id="email" 
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
       <textarea 
          id="message" 
          autoComplete="off"
          name="message"
          placeholder="Message"
          value={userContact.message} 
          onChange={handleContact}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg self-center mt-4" onClick={handleSubmitContact}>Submit</button>
    </div>
  </div>
</section>
 
    </div>
  );
}

export default Contact;
