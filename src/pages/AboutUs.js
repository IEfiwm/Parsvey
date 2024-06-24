import React from "react";
import "../css/aboutus.css";
import Header from "../componnets/Header";
import Footer from "../componnets/Footer";
import Shop from "../componnets/Shop";
import ScrollToTop from "../componnets/ScrollToTop";

function AboutUs() {
  return (
    <React.Fragment>
      <Header />
      <div className="myaboutus">
        <div className="writing-area">
          <h2>سوابق کاری :</h2>
          <div className="!text-xl">
            20 سال سابقه کاری در فروش دستگاه های بستنی ساز و نصب و راه اندازی
            دستگاه بستنی ساز و تجهیز کافی شاپ و دیزاین کافی شاپ و فروش سردخانه
            ها و سیستم های تهویه مطبوع و تجهیزات نفت و گاز و نصب و راه اندازی
            سردخانه و سیستم های تهویه
          </div>
        </div>
        <Shop />
      </div>
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
}

export default AboutUs;
