import React from "react";
import Header from "../componnets/Header";
//import firstphoto from "../photos/firstimg.JPG";
import secondphoto from "../Photos/secondimg.JPG";
import forthphoto from "../Photos/forth.JPG";
import "../css/Home.css";
import Footer from "../componnets/Footer";
import ScrollToTop from "../componnets/ScrollToTop";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <Header />
      {/* <div className="flex flex-col">
        <h2 className="myh"> با کمک ما از بهترین تجهیزات استقاده کنید : </h2>
      </div> */}
      <div className="myhome">
        <div className="flex flex-col mt-8">
          <h2 className="text-2xl pr-4 mb-8">
            با کمک ما از بهترین تجهیزات استفاده کنید :
          </h2>
          <div className="md:flex-row flex gap-2 flex-col justify-between">
            <div className="md:w-1/2 pr-2 text-xl">
              برای خرید ماشینهای بستنی ساز و سردخانه های صنعتی و تجهیزات کافی
              شاپ با برند های متنوع از جمله تهویه مطبوع و چیلر و فن کویل و
              هواساز وتجهیزات نفت و گاز و موارد دیگر به صورت نقد واقساط که در
              ادامه سایت ذکر شده میتوانید با ما هم به صورت حضوری و هم به صورت
              تلفنی و یا پیام رسان های مختلف درارتباط باشید .
            </div>
            <div className="md:w-1/2 px-2 md:px-0">
              <img
                className="w-full rounded-lg md:rounded-none md:rounded-tr-[20px] md:rounded-br-[20px]"
                src={secondphoto}
                alt="divphotos"
              />
            </div>
          </div>
        </div>

        <div className="btndiv !my-12">
          <button className="mybtn !mt-0">
            <Link className="nav__link custom" to="/تماس باما">
              تماس با ما
            </Link>
          </button>
          <button className="mybtn2">
            <Link className="nav__link custom" to="/درباره ما">
              درباره ما
            </Link>
          </button>
        </div>

        <div className="flex flex-col my-8">
          <h2 className="text-2xl pr-4 mb-8">
            آیا محصولات را میتوان به صورت اقساط خریداری کرد ؟
          </h2>
          <div className="md:flex-row flex gap-2 flex-col justify-between">
            <div className="md:w-1/2 px-2 md:px-0">
              <img
                className="w-full rounded-lg md:rounded-none md:rounded-tl-[20px] md:rounded-bl-[20px]"
                src={forthphoto}
                alt="photos"
              />
            </div>
            <div className="md:w-1/2 px-2 text-xl">
              در جواب به این سوال باید گفت که بله شما میتوانید تمامی محصولات
              مارا از جمله چیلر و فن کویل و هواساز و تهویه مطبوع و محصولات دیگر
              را هم به صورت نقدی و هم به صورت اقساط خریداری کنید برای دریافت
              اطلاعات بیشتر درمورد چگونگی اقساط و مدت زمان اقساط میتوانید با در
              ارتباط باشید ...
            </div>
          </div>
        </div>
        {/* <div className="dardesar">
          <h2 className="myh2">
            آیا محصولات را میتوان به صورت اقساط خریداری کرد ؟
            <p1 className="myp2">
              {" "}
              در جواب به این سوال باید گفت که بله شما میتوانید تمامی محصولات
              مارا از جمله چیلر و فن کویل و هواساز و تهویه مطبوع و محصولات دیگر
              را هم به صورت نقدی و هم به صورت اقساط خریداری کنید برای دریافت
              اطلاعات بیشتر درمورد چگونگی اقساط و مدت زمان اقساط میتوانید با در
              ارتباط باشید ...
            </p1>
            <img className="forthphoto" src={forthphoto} alt="photos" />
          </h2>
        </div> */}
      </div>
      <ScrollToTop />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
