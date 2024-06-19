import React from "react";
import Header from "../componnets/Header";
import Footer from "../componnets/Footer";
import EmailSender from "../componnets/EmailSender";
import telegram from "../Photos/telegramlogo.png";
import whatsapp from "../Photos/whatsapplogowebp.webp";
import instalogo from '../Photos/instalogo.png';
import callphoto from '../Photos/callphoto.jpg';
import "../css/callus.css";
import ScrollToTop from "../componnets/ScrollToTop";
//import location from '../Photos/location.png';

//import { Link } from 'react-router-dom'
//<a target='blank' href="https://t.me/Nima_99nsh"></a>

//<img  className="locationimg" src={location} alt="locatin"/>

//<div className="callicon" onClick={handleCallClick}>
//<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 // <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 3c-1 0-2 0-3 1-3 2-6 4-7 7-1 1-1 3-1 4 0 4 2 7 5 9 1 0 2 1 3 1 1 0 2 0 3-1 1 0 2 0 3-1 2-2 4-5 5-9 0-1 0-3-1-4-1-3-4-6-7-7zM10 20a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
//</svg>
//</div>

function CallUs() {
  const handleClickInsta = () => {
    window.alert('we are changing your direction');
    window.open("https://www.instagram.com/vidashafiee368", "_blank");
  };

  const handleClickWatsapp = () => {
    window.alert('we are changing your direction');
    window.open("https://api.whatsapp.com/send?phone=09913382521", "_blank");
  };
  const handleClickTell = () => {
    window.alert('we are changing your direction');
    window.open("https://t.me/Nima_99nsh", "_blank");
  };
 // const phoneNumber = '09933323563';

//  const handleCallClick = () => {
//    window.location.href = `tel:${phoneNumber}`;
//  };
  return (
    <div className="mycallus">
      <Header />
      
      <br />
      <div className="writing-area">
              <h1 className="h1h1">  با ما در ارتباط باش  :</h1>
              <p1><img className="callimg" src={callphoto} alt=""/>برای ارتباط بیشتر با ما میتوانید با شماره های درج شده  <br/>و پیام رسان های مختلف که در پایین صفحه ذکر شده است با    باما در تماس باشید …</p1>
        </div>
        <br/>
      <div  className="iconsdiv">
        <img  onClick={handleClickTell}  className="telicon" src={telegram} alt="Telegram icon" />
        <img onClick={handleClickWatsapp} className="whaticon" src={whatsapp} alt="WhatsApp Icon" />
        <img onClick={handleClickInsta}  className="instaicon" src={instalogo} alt="Instagram" />
      </div>
      <br/>
      <br/>
      <br/>
      
      <div className="writing-area-2">
      <p >  شماره های تماس  <br/> 
           آقای مهندس کریمی : 09057479475 <br/>
           خانم مهندس شفیعی : 09913382521</p>
      
      </div>
      <br/>
    
      <br/>

      <br/>
      <EmailSender />
      <Footer />
      <ScrollToTop/>
    </div>
  );
}

export default CallUs;
