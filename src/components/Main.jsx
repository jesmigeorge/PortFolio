import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaSquareXTwitter,FaLinkedin,FaSquareGithub } from "react-icons/fa6";
import bgimg from "../assets/bgimg.jpg";
export default function Main() {
    const handleResume = ()=>{
        window.open("https://drive.google.com/file/d/1GfPu7Bzz4ll-fA3ntf6fW6xb84JPyzRM/view?usp=sharing", '_blank')
    }
  return (
    <div id='main'>
        <img src={bgimg} className="w-full h-screen object-cover"></img>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>  
             {/* h-full: This class sets an element's height to 100% of its parent, 
             as long as the parent has a defined height. h-screen: This class
              used to make an element span the entire height of the viewport. */}
            <div className='max-w-[75%] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className= 'sm:text-5xl text-4xl font-bold text-black-900'>I'm Jesmi George</h1>
                <h2 className='flex sm:text-3xl text-2xl text-black-900'>I'm a
                    <TypeAnimation sequence={[
                    // Same substring at the start will only be typed out once, initially
                        'Frontend-Developer',
                        2000, 
                        'Coder',
                        2000,
                        'Tech-Enthusiast',
                        2000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', paddingLeft: '9px'}}
                    repeat={Infinity}
                    />
                </h2>
                {/* In summary, the max-w-[170px] w-full classes are used to 
                    set the maximum width of the element to 170 pixels and make it 
                    take up the full available width of its parent container, 
                    while still allowing it to shrink if there is not enough space available. */}
                <div className='flex flex-row space-x-10 pt-3 max-w-[170px] w-full'>       
                    {/* <a href="https://twitter.com/jesmigeorge04" target="_blank">
                        <FaSquareXTwitter size="30"/>
                    </a> */}
                    <a href="https://www.linkedin.com/in/jesmi-george/">
                        <FaLinkedin size="30"/>
                    </a>
                    <a href="https://github.com/jesmigeorge">
                        <FaSquareGithub size="30"/>
                    </a>   
                </div>
                <button className='bg-[#001b5e] text-gray-100 mt-4 w-full py-2 rounded-lg max-w-[25%] md:text-3xl text-1xl' onClick={handleResume}>{/* <a href="https://drive.google.com/file/d/1QDyxvWeeO1xWBWENFtrCjHVPzJooz00t/view?usp=drive_link" target='_blank' className='w-full'> */}
                        RESUME
                </button>
            </div>
        </div>
    </div>
  )
}

