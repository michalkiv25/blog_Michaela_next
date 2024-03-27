import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import offerData from "../../data/offer.json";

function Footer1() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const sibling =
    currentRoute === "/index-city-tour" || currentRoute === "/index-city-tour"
      ? "footer-section sibling-2"
      : currentRoute === "/index-travel2"
      ? "footer-section sibling-2"
      : currentRoute == "/index-wildlife"
      ? "footer-section sibling-3"
      : "footer-section";
  return (
    <footer className={sibling} >
      <div className="footer-top">
        <div className="container-xl container-lg-fluid container">
          <div className="row justify-content-center gy-5" >
            <div className="col-lg-3 col-md-10 col-sm-6 col-11 order-sm-0 order-1">
              <div className="footer-about">
                <img
                  src="assets/images/icons/footer-plane.svg"
                  className="footer-plane"
                  alt="image"
                />
                <div className="footer1-logo">
                  {/* <img src="assets/images/icons/footer1-logo.svg" alt="image" /> */}
                  <p>2024</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  viewBox="0 0 400 400"
                >
                  <defs>
                    {/* The text path: see links above regarding coordinate system */}
                    <path
                      d="M0, 200a200, 200 0 1, 0 400, 0a200, 200 0 1, 0 -400, 0"
                      id="txt-path"
                      fill="white"
                    />
                  </defs>
                  <text
                    fill="#DDDDDD"
                    fontSize="35.5"
                    fontFamily="Helvetica Neue"
                    fontWeight={600}
                  >
                    {/* This is the magic */}
                    <textPath startOffset={0} xlinkHref="#txt-path">
                    Michaela - vacation blog &nbsp; Michaela - vacation blog
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center">
              <div className="footer-item">
                <h4>טיולים פופולרים</h4>
                <ul className="link-list" style={{ direction: 'rtl'}}>
                {offerData.map((country,i) => (
                  <li key={i}>
                      <Link href={{
                          pathname: country.regions ? '/blog-standard' : '/tour-package-details',
                          query: { regions: JSON.stringify(country) }
                      }}>
                          <a>{country.country}</a>
                      </Link>
                  </li>
              ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center">
              <div className="footer-item" style={{ direction: 'rtl'}}>
                <h4>טיולים מסביב לעולם</h4>
                <ul className="link-list">
                  <li>
                    <Link href="/blog-grid">
                      <a>טיולים אקזוטיים</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/destination">
                      <a>טיולים עירוניים</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/destination-details">
                      <a>טיולים משפחתיים</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center contact" style={{ direction: 'rtl'}}>
              <div className="footer-item">
                <h4>צור קשר</h4>
                <ul className="contact-list" style={{ direction: 'rtl'}}>
                  <li>
                    <div className="icon">
                      <i className="bi bi-telephone" />
                    </div>
                    <div className="text">
                      <a href="tel:+972542055284">284 55 20 54 972+ </a>
                      {/* <a href="tel:+8801761111457">+880 176 1111 457</a> */}
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="bi bi-envelope" />
                    </div>
                    <div className="text">
                      <a href="mailto:michalkiv20@gmail.com">michalkiv20@gmail.com</a>
                      {/* <a href="mailto:support@example.com">
                        support@example.com
                      </a> */}
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="bi bi-geo-alt" />
                    </div>
                    <div className="text">
                      ערבי נחל, גבעתיים, ישראל
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row footer-meta" style={{ direction: 'rtl'}}>
            <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center align-items-center mb-lg-0 mb-5">
              <h4>עקבו אחרי:</h4>
              <ul className="footer-social">
                <li>
                  <a href="https://www.facebook.com/michal.kivity/?locale=he_IL/">
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                {/* <li>
                  <a href="https://www.twitter.com/">
                    <i className="bx bxl-twitter" />
                  </a>
                </li> */}
                <li>
                  <a href="https://www.instagram.com/">
                    <i className="bx bxl-instagram" />
                  </a>
                </li>
                {/* <li>
                  <a href="https://www.pinterest.com/">
                    <i className="bx bxl-pinterest" />
                  </a>
                </li> */}
              </ul>
            </div>
            {/* <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center">
              <h4>Pay Safely With Us!</h4>
              <ul className="pay-list">
                <li>
                  <img src="assets/images/icons/pay1.svg" alt="image" />
                </li>
                <li>
                  <img src="assets/images/icons/pay2.svg" alt="image" />
                </li>
                <li>
                  <img src="assets/images/icons/pay3.svg" alt="image" />
                </li>
                <li>
                  <img src="assets/images/icons/pay4.svg" alt="image" />
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <div className="row d-flex align-items-center g-3">
            <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center text-lg-start text-center px-1">
              <p>
                Copyright 2024{" "}
                <a href="#" className="egns-lab">
                  Micheale Noam{" "}
                </a>{" "}
                | Design By{" "}
                <a
                  href="https://themeforest.net/category/site-templates?term=egenslab"
                  className="egns-lab"
                >
                  Michaela Noam
                </a>
              </p>
            </div>
            {/* <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center">
              <ul className="f-bottom-list d-flex jusify-content-start align-items-center">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer1;