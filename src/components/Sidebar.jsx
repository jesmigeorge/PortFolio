import React,{ useState } from 'react'
import { AiOutlineMenu, AiOutlineHome , AiOutlineProject, AiOutlineMail  } from "react-icons/ai"
import { GrProjects } from "react-icons/gr"
import { BsPerson } from "react-icons/bs"
function sidebar() {
  const [nav,setnav] = useState(false) 
  const handleOnClick = () =>{
    setnav(!nav)
  }
  return (
    <div>
        <AiOutlineMenu onClick={handleOnClick} className='absolute top-4 right-4 md:hidden z-[99]'/>
        {nav ? 
            (<div className='sidebar-container'>
              <a onClick={handleOnClick} href='#main' className='sidebar-items'>
                <AiOutlineHome size="20"/>
                <span className='pl-3'>Home</span>
              </a>
              <a onClick={handleOnClick} href="#skills" className='sidebar-items'>
                  <GrProjects size="20"/>
                  <span className='pl-3'>Skills</span>
              </a>
              <a onClick={handleOnClick} href="#projects" className='sidebar-items'>
                <AiOutlineProject size="20"/>
                <span className='pl-3'>Projects</span>
              </a>
              <a onClick={handleOnClick} href='#main' className='sidebar-items'>
                <BsPerson size="20"/>
                <span className='pl-3'>Resume</span>
              </a>
              <a onClick={handleOnClick} href="#contact" className='sidebar-items'>
                <AiOutlineMail size="20"/>
                <span className='pl-3'>Mail</span>
              </a>     
            </div>)
          :
          ('')
        }
        <div className='mainbar-container'>
          <div className='flex flex-col'>
            <a href='#main' className='mainbar-item'>
              <AiOutlineHome size="25"/>
            </a>
            <a href="#skills"  className='mainbar-item'>
              <GrProjects size="25"/>
            </a>
            <a href="#projects"  className='mainbar-item'>
              <AiOutlineProject size="25"/>
            </a>
            <a href='#main'  className='mainbar-item'>
              <BsPerson size="25"/>
            </a>
            <a href="#contact"  className='mainbar-item'>
              <AiOutlineMail size="25"/>
            </a>
          </div>
        </div>
    </div>
  )
}

export default sidebar