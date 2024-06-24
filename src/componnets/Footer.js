import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";

const handleme = () => {
  window.open("https://www.instagram.com/nima._.shafiee", "_blank");
};

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div className="grid grid-cols-3 gap-8 md:gap-1">
          <div class="footer-left col-span-3 md:col-span-1">
            <h2 className="text-[24px]">تجهیز صنعت پارس وی</h2>
            <br />

            <Link className="nav__link" to="/">
              خانه
            </Link>
            <br />
            <br />
            <Link className="nav__link" to="/درباره ما">
              درباره ما
            </Link>
            <br />
            <br />
            <Link className="nav__link" to="/تماس باما">
              {" "}
              تماس باما
            </Link>
            <br />
            <br />
            <Link className="nav__link" onClick={handleme}>
              طراح سایت
            </Link>
            <br />
          </div>
          <div class="footer-center col-span-3 md:col-span-1">
            <h3> شماره های تماس </h3>
            <br />
            <ul>
              <li>خانم مهندس شفیعی : 09913382521</li>
              <br />
              <li> اقای مهندس کریمی : 09057479475 </li>
              <br />
            </ul>
          </div>
          <div class="footer-right col-span-3 md:col-span-1">
            <h3>ایمیل :</h3>
            <p>
              میتوانید ایمیل خود را ارسال کنید تا ما از طریق ایمیل با شما در
              ارتباط باشیم
            </p>
            <br />
            <input
              type="email"
              className="inptemail"
              placeholder="لطفا ایمیل خود را وارد کنید ..."
            />
            <br />
            <button className="mybtn3">تایید</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
