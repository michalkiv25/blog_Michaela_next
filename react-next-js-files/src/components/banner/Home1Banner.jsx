import Link from "next/link";
import React from "react";
function Home1Banner() {
 
  return (
    <div className="banner-section1 overflow-hidden">
      <div className="cloud-icon1">
        <img src="assets/images/icons/cloud1.svg" alt="image" />
      </div>
      <div className="cloud-icon2">
        <img src="assets/images/icons/cloud2.svg" alt="image" />
      </div>
      <div className="cloud cloud1">
        <img src="assets/images/icons/banner-plane.svg" alt="image" />
      </div>
      <div className="banner-social-area d-xxl-flex d-none">
        <ul className="banner-social-list">
          <li>
            <a href="https://www.facebook.com/michal.kivity/">
              <i className="bx bxl-facebook" />
            </a>
          </li>
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
      <div className="banner-image2">
        <img
          src="https://ik.imagekit.io/myBlog/%D7%99%D7%A4%D7%9F-_%D7%A7%D7%99%D7%95%D7%98%D7%95/DSC06578.JPG?updatedAt=1680895234893"
          className="img-fluid"
          alt="image"
        />
      </div>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-2 offset-xl-1 col-lg-2 d-lg-flex d-none justify-content-end">
            <div className="banner-image1">
              <img
                src="https://ik.imagekit.io/myBlog/%D7%9E%D7%9C%D7%93%D7%99%D7%91%D7%99%D7%99%D7%9D/DSC03540.JPG?updatedAt=1680703182924"
                className="img-fluid"
                alt="image"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-8 col-md-8">
            <div className="banner1-content">
              <span>לחוות עולם</span>
              <h1>כל חופשה היא סיפור מפתח בספר החיים שלנו, רגעים שבהם אנו מצלמים את הרגעים הטובים ביותר ויוצרים זיכרונות שנשארים חקוקים בלבנו לעד</h1>
              {/* <p>Treat yourself with a journey to your inner self.</p> */}
              {/* <div className="discover-btn">
                <Link
                  href="/destination"
                >
                  <a className="eg-btn btn--primary btn--lg">יעדיים עירוניים</a>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-xl-3 col-lg-2 d-lg-flex d-none justify-content-lg-start justify-content-center"></div>
        </div>
      </div>
    </div>
  );
}

export default Home1Banner;