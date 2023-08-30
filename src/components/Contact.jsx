import React, { useState } from 'react'
import vg from "../assets/vg.png"
import toast from "react-hot-toast"

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const SubmitHandler = (e) => {

    e.preventDefault();

    console.log(name, email, message);

    toast.success("Message Sent");

  };

  return (
    <div id='contact'>
      <section>
        <form onSubmit={SubmitHandler}>
          <h2>Contact Me</h2>

          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' required />


          <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' />


          <input type="Message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your Message' required />

          <button type='submit'>Send</button>
        </form>
      </section>
      <aside>
        <img src={vg} alt="" />
      </aside>
    </div>
  )
}

export default Contact 
