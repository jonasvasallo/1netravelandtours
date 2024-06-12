import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';

import '../styles/contactpage.css';

const ContactPage = () => {

    const [errorMsg,setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const form = useRef();

    const sendEmail = (e) => {

      e.preventDefault();
      setSuccessMsg("");
      setErrorMsg("");
      emailjs
        .sendForm('service_kuupahn', 'template_f2bbe59', form.current, {
          publicKey: 'bLy2WMKMha8EhY-sy',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setSuccessMsg("Successfully sent inquiry! Please wait for us to contact you.");
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            setErrorMsg(error.text);
          },
        );
    };

  return (
    <>
        <div className="contact-us">
            <div className="content flex gap8 main-center gap32 wrap">
                <div className="flex col gap8 grow-1 image-section">
                    <span className="heading-l">Get in touch with 1ne Travel and Tours</span>
                    <span>Phone: (044) 760 9014</span>
                    <span>Email: onetravelandtours@yahoo.com</span>
                    <br />
                    <span>Reach out to us for any business enquiries, service assistance, and everything else in between!</span>
                    <hr />
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="input-field">
                            <span>Full Name</span>
                            <input type="text" name="from_name" id="" placeholder='John Doe' required/>
                        </div>
                        <div className="input-field">
                            <span>Contact Number</span>
                            <input type="tel" name="contact_no" id="" placeholder='09XX-XXX-XXXX' pattern="09\d{2}-\d{3}-\d{4}" required/>
                        </div>
                        <div className="input-field">
                            <span>Email Address</span>
                            <input type="email" name="email" id="" placeholder='johndoe@gmail.com' required/>
                        </div>
                        <div className="input-field">
                            <span>Message</span>
                            <textarea name="message" id="" placeholder='Type your message here...' rows={5} required></textarea>
                        </div>
                        {errorMsg && <span className='status error'>{errorMsg}</span>}
                        {successMsg && <span className='status success'>{successMsg}</span>}
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className='grow-1 image-section flex col gap-8'>
                    <span className="heading-l">Located in</span>
                    <span>Unit 205 CDS Bldg Gen Alejo Hiway Poblacion Bustos 3007 Bulacan, Philippines</span>
                    <iframe src="https://www.google.com/maps/embed?pb=!4v1718193146109!6m8!1m7!1sAOUTuzZssTxBRl4ZbE2bIA!2m2!1d14.95176272385815!2d120.9170018613437!3f270.44853146108994!4f3.933256371490984!5f1.1924812503605782" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactPage