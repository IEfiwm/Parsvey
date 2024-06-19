import React from 'react'
import '../css/emailsender.css';

function EmailSender() {
  return (
    <div class="container">
    <h1>Contact Us</h1>
    <form id="contactForm">
        <input type="text" className="name" placeholder="نام" required/>
        <input type="text" className="email" placeholder="ایمیل شما" required/>
        <textarea id="message" placeholder="پیامی که مایل هستید برای ما ارسال کنید" rows="5" required/>
        <input type="submit" value="ارسا ل" />
    </form>
    </div>
  )
}

export default EmailSender;