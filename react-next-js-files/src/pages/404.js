import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Footer1 from "../components/footer/Footer1";
import Header1 from "../components/header/Header1";

function CustomError() {
  return (
    <>
      <Header1 />
      <Breadcrumb
        pageDetails="הדף לא נמצא"
        pageTitle="404 הודעת שגיאה"
        backgroundImageHeder= "https://ik.imagekit.io/myBlog/%D7%90%D7%AA%D7%99%D7%95%D7%A4%D7%99%D7%94/DSC09842.JPG?updatedAt=1681150981642"
      />
      <div className="error-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 col-sm-12 text-center">
              <div className="error-wrapper">
                <div className="error-image">
                  <img
                    src="assets/images/bg/404-image.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="error-text">
                  <p>
                  .ייתכן שהדף שאתה מחפש הוסר או שמו היה שונה או שאינו זמין באופן זמני
                  </p>
                  <Link href="/">
                    <a className="eg-btn btn--primary btn--lg">חזרה לדף הבית</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
}

export default CustomError;