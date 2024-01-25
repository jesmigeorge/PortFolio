import React from 'react'

export default function Contact() {
  return (
    <div className='bg-gray-300'>
        <div id='contact' className='sections'>
        <h1 className='section-header my-3'>Contact Me</h1>
        <form action="https://getform.io/f/11b36ae2-43e4-4427-a31c-f6b73548f421" method="post" encType='multipart/form-data'>
            {/* <div> */}
                <div className='flex flex-col py-2'>
                    <label htmlFor="name" className='form-label'>Name</label>
                    <input className='mx-2 p-3 rounded-lg border-2 flex border-gray-300' type="text"  name="name" id="name" />
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input className='mx-2 p-3 rounded-lg border-2 flex border-gray-300' type="email" name="email" id="email" />
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="mssg" className='form-label'>Message</label>
                    <textarea className='mx-2 p-3 rounded-lg border-2 flex border-gray-300' rows='5' name="mssg" id="mssg"></textarea>
                </div>
            <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>SUBMIT</button>
            {/* </div> */}
        </form>
    </div>
    </div>   
  )
}
