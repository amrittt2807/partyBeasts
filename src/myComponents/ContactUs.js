import React from 'react'
import "../myStyles/ContactUs.css"
export default function ContactUs() {
  return (
    <section id="contact">
        <h1 class="contactHead centre" >Contact Us</h1>
        <div id="contact-box">
            <form action="">
                <div class="name-phone">
                    <div class="form-group">
                        <input type="text" id="name" placeholder="Enter Your Name" required/>
                    </div>
                    <div class="form-group">
                        <input type="phone" id="phone" placeholder="Enter Your Contact no."required/>
                    </div>
                </div>
                <div class="form-group">
                    <input type="email" id="email" placeholder="Enter Your Email id" required/>
                </div>
                <div class="form-group">
                    <textarea name="message" id="message"  rows="5" placeholder="Tell us, How Can We Help You ?" required></textarea>
                </div>
                <div id="endButton">
                    <input type="submit"/>
                </div>
            </form>
        </div>
    </section>
  )
}
