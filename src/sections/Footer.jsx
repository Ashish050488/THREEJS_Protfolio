import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
      <div className='text-white-500 flex gap-2'>
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy & Policy</p>
      </div>
      <div className='flex gap-3'>


        <a href="https://github.com/Ashish050488" target='_blank' rel='noopener noreferrer'>
          <div className='social-icon'>
            <img src="/assets/github.svg" alt="github" className='w-1/2 h1/2' />
          </div>
        </a>


        <a href="https://www.linkedin.com/in/ashishranjan050488/" target='_blank' rel='noopener noreferrer'>
          <div className='social-icon'>
            <img src="/assets/Linkedin.svg" alt="twitter" className='w-1/2 h1/2 text-white' />
          </div>
        </a>

        {/* <a href="" target='_blank' rel='noopener noreferrer'>
          <div className='social-icon'>
            <img src="/assets/instagram.svg" alt="instagram" className='w-1/2 h1/2' />
          </div>
        </a> */}


      </div>
      <p className='text-white-500'>©️ 2024 Ashish.  All rights reserved.</p>
    </section>
  )
}

export default Footer
