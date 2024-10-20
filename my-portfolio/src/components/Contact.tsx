import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {

  useEffect(() => {
    AOS.init({
      offset: 400,
    });
  }, []);

  

  return (
    <div className='w-full h-full bg-[#0a192f] flex justify-center items-center p-4 relative top-[1200px] z-[-1]' data-aos='fade-right' id="contact">
        <form method='POST' action="https://getform.io/f/bkkgmopb" className='flex flex-col max-w-[600px] w-full ' >
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - nicandro.ronnie@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' id="nameInput"
            />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' id="emailInput" />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows={10} placeholder='Message' id="messageInput"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Contact