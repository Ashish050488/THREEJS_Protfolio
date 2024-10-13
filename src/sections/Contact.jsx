import { useState } from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser'

const Contact = () => {

  const formRef =useRef();

  const [loading,setLoading]=useState(false)

  const [form,setForm] = useState({
    name:'',
    email:'',
    message:'',
  })

  const handleChange=({target:{name,value}})=>{
    setForm({
      ...form,
      [name]:value
    })
  }

  // service_i31eweh
  const handleSubmit= async (e)=>{
    e.preventDefault();

    setLoading(true)


    try {
      await emailjs.send(
        'service_i31eweh',
        'template_9bkpdoo',
        {
          from_name:form.name,
          toto_name:'Ashish',
          from_email:form.email,
          to_email:'mannu17032004@gmail.com',
          message:form.message
        },
        'muk-761qA6DciZaCf'
      )
      setLoading(false);
      alert('your message has been sent')

      setForm({
        name:'',
        email:'',
        message:''
      })
      
    } catch (error) {
      console.log(error);
      
    }

    



  }

  return (
    <section className='c-space my-20'>
      <div className='relative min-h-screen flex items-center justify-center flex-col'>
        <img src='/assets/terminal.png' alt='terminal background' className='absolute inset-0 min-h-screen' />
        <div className="contact-container">
          <h3 className="head-text">Let's Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether You're Looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Full Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} required className="field-input" placeholder="Jhon Doe" />
            </label>
            <label htmlFor="" className="space-y-3">
              <span className="field-label">email</span>
              <input type="text" name="email" value={form.email} onChange={handleChange} required className="field-input" placeholder="jhondoe@gmail.com" />
            </label>
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Message</span>
              <textarea type="text" name="message" value={form.message} onChange={handleChange} required className="field-input" placeholder="Hi, i wanna give you a job..." />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>{loading?'sending...':'Send Message'} <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" /></button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
