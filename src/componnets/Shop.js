import React from 'react'
import '../css/shop.css'
import abmive from '../Photos/abmivegiri.jpg';
import bastani from '../Photos/bastani.jpg';
import chiller from '../Photos/chiller.jpg';
import espresso from '../Photos/esperso.jpg';
import fankoel from '../Photos/fankoell.jpg';
import havasaz from '../Photos/havasaz.jpg';
import freezer from '../Photos/freezer.jpg';
import yakhchal from '../Photos/yakhchal.jpg';
import tahviye from  '../Photos/tahviye.png' ;



// <p className='shop-p'>&copy; 2023 Shopping Project</p>

function Shop() {
  return (
    <div>
        <header className='header2'>
        <h1>___برخی از محصولات ___ </h1>
    </header>
    <main>
        <div class="product">
            <img src={abmive} alt="Product 1"/>
            <h2>دستگاه آبمیوه گیری</h2>
            <p>دستگاه امبیوه گیری با برند های مختلف به فروش میرسد</p>
            <button className='shopbtn'>توضیحات بیشتر</button>
        </div>

        <div class="product">
            <img src={bastani} alt="Product 2"/>
            <h2>دستگاه بستنی ساز</h2>
            <p>    در مدل های صنعتی یافت میشود دستگاه‌ های بستنی ساز کمپرسور دار از یک کمپرسور برای تولید یخ و تهیه بستنی استفاده میشود</p>
            <button className='shopbtn'>توضیحات بیشتر</button>
        </div>

        <div class="product">
            <img src={chiller} alt="Product 3"/>
            <h2>دستگاه چیلر</h2>
            <p>   چیلر یا سرد کن ی دستگاهی است که حرارت را از مایع (معمولاً آب) بر اساس سیکل تبرید تراکم بخار یا جذبی می‌زداید.</p>
            <button className='shopbtn'>توضیحات بیشتر</button>
        </div>
        <div class="product">
            <img src={espresso} alt="Product 4"/>
            <h2>اسپرسو ساز</h2>
            <p> نحو عملکرد
اسپرسوساز، عصاره‌گیری قهوه را به وسیلهٔ فشار آب داغ انجام می‌دهد و عصارهٔ حاصل از آن اسپرسو است</p>
            <button className='shopbtn'>توضیحات بیشتر</button> 
        </div>
        <div class="product">
            <img src={fankoel} alt="Product 5"/>
            <h2>دستگاه فن کویل</h2>
            <p> این دستگاه بخشی از سیستم تهویه مطبوع موجود در ساختمان های مسکونی، تجاری و صنعتی و … است.</p>
            <button className='shopbtn'>توضیحات بیشتر</button>
        </div>
        <div class="product">
            <img src={havasaz} alt="Product 6"/>
            <h2>دستگاه هواساز</h2>
            <p>هواساز  دستگاهی است که برای تأمین و انتقال جریان هوای مناسب، به منظور تهویه (تأمین هوای تازه)، سرمایش (تأمین هوای خنک) و گرمایش (تأمین هوای گرم) ساختمان کاربرد دارد</p>
            <button className='shopbtn'>توضیحات بیشتر</button>
        </div>
        <div class="product">
            <img src={yakhchal} alt="Product 7"/>
            <h2>یخچال های تک در</h2>
            <p>یخچال های تک درب صنعتی انواع متنوعی دارد از جمله یخچال های کبابی و یا یخچال هایی که در سوپر مارکت استفاده میشوند</p>
            <button className='shopbtn'>توضیحات بیشتر</button>
        </div>
        <div class="product">
            <img src={freezer} alt="Product 8"/>
            <h2>فریزر صندوقی</h2>
            <p>فریزر صندوقی یک دستگاه مخصوص برای نگهداری مواد غذایی و دیگر مواد فاسد شدنی است. این دستگاه، همچنین با نام فریزر صندوقی خانگی شناخته می‌شود. فریزر صندوقی دارای طراحی افقی با دربی در بالا است که به صورت عمودی باز می‌شود.</p>
            <button className='shopbtn'>توضیحات بیشتر</button>
        </div>
        <div class="product">
            <img src={tahviye} alt="Product 9"/>
            <h2>دستگاه تهویه مطبوع</h2>
            <p>سیستمی گفته می‌شود که بتواند سه فاکتور، رطوبت ،دما و سرعت جریان هوا را کنترل کند</p>
            <button className='shopbtn'>توضیحات بیشتر</button>
        </div>
    </main>

    </div>
  )
}

export default Shop