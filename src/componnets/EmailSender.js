import React from "react";
import "../css/emailsender.css";

function EmailSender() {
  return (
    <div class="container">
      <h1>تماس با ما</h1>
      <form id="contactForm">
        <input type="text" className="name" placeholder="نام" required />
        <input type="text" className="email" placeholder="ایمیل شما" required />
        <textarea
          id="message"
          placeholder="پیامی که مایل هستید برای ما ارسال کنید"
          rows="5"
          className="resize-y min-h-24 max-h-48"
          required
        />
        <input type="submit" className="w-full cursor-pointer" value="ارسال" />
      </form>
    </div>
  );
}

export default EmailSender;
