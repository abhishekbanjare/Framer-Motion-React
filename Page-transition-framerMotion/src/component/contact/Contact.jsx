import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <div className='contact-container'>
        <div className='A1'>
            <img src='/src/component/contact/contact.jpg' alt='alt' />
        </div>
        <div className='B1'>
           <h1>Contact Us</h1>
           <form>
               <label for="name">Full Name</label>
               <input type='text' placeholder='Enter full name...' />
               <label for="email">Email</label>
               <input type='text' placeholder='Enter email...' />
               <label for="msg">Message</label>
               <textarea type='text' placeholder='Enter message...' />
               <button type='submit'>Submit</button>
           </form>
        </div>
    </div>
  )
}

export default Contact