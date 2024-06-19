import React from 'react';
import Header from '../componnets/Header';
//import firstphoto from "../photos/firstimg.JPG";
import secondphoto from "../Photos/secondimg.JPG" ;
import forthphoto from '../Photos/forth.JPG' ;
import '../css/Home.css'
import Footer from '../componnets/Footer';
import ScrollToTop from '../componnets/ScrollToTop';


function Home() {
  return (
    <React.Fragment>
    <Header/>
    <div className='myhome'>
        
        <h2 className='myh'>  با کمک ما از بهترین تجهیزات استقاده کنید :<br/> <p1 className="myp">برای خرید ماشینهای بستنی ساز و سردخانه های صنعتی<br/> و تجهیزات کافی شاپ با برند های متنوع<br/> از جمله تهویه مطبوع و چیلر و فن کویل <br/> و هواساز وتجهیزات نفت و گاز و موارد دیگر <br/> به صورت نقد واقساط که در ادامه سایت ذکر شده میتوانید<br/> با ما هم به صورت حضوری و هم به صورت تلفنی و یا <br/>پیام رسان های مختلف درارتباط باشید <br/><br/>
      
        </p1> <img className='secondphoto' src={secondphoto} alt='divphotos' /></h2>
        <br/>
        <br/>

        <br/>

        <br/>

      <div className='btndiv'> <button className='mybtn'> تماس با ما</button> <button className='mybtn2'>درباره ما</button> 
      </div>  
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className='dardesar'>
       <h2 className='myh2'>آیا محصولات را میتوان به صورت اقساط خریداری کرد ؟<br/><p1 className="myp2"> در جواب به این سوال باید گفت که بله شما میتوانید تمامی محصولات مارا از جمله چیلر<br/> و فن کویل و هواساز و تهویه مطبوع و  محصولات دیگر را هم به صورت نقدی <br/>و هم به صورت اقساط خریداری کنید <br/> برای دریافت اطلاعات بیشتر درمورد چگونگی<br/>اقساط و مدت زمان اقساط میتوانید<br/> با  در ارتباط باشید  ...</p1><img className='forthphoto' src={forthphoto} alt='photos'/></h2>
        
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <br/>
      <br/>
      <br/>

    </div>
    <ScrollToTop/>
    <Footer/>
    </React.Fragment>
  )
}

export default Home