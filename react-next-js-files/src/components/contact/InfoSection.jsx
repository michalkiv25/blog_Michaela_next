import React from "react";

function InfoSection() {
  return (
    <div className="info-section pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10 col-sm-12">
            <div className="info-title-area">
              <h3>בלוג חופשות מיכאלה נעם</h3>
              <p>
              לכל שאלה עבור תכנון היעד, שאלות לגבי המלון, טיסות, אטרקציות, מסעדות וכו ניתן לשאול לשאולות, אשמח לענות ולכוון אתכם.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="info-single">
              <div className="info-icon">
                <i className="bi bi-geo-alt" />
              </div>
              <div className="info-text">
                <h3>כתובת</h3>
                <p>ערבי נחל, גבעתיים, ישראל</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="info-single">
              <div className="info-icon">
                <i className="bx bx-phone-call" />
              </div>
              <div className="info-text">
                <h3>תתקשרו אלי</h3>
                <a href="tel:+8801569862560">+972 54 205 5284</a>
                {/* <a href="tel:+8801761111456">+880176 1111 456</a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="info-single">
              <div className="info-icon">
                <i className="bx bx-envelope" />
              </div>
              <div className="info-text">
                <h3>אימייל</h3>
                <a href="mailto: michalkiv20@gmail.com">
                  michalkiv20@gmail.com
                </a>
                {/* <a href="mailto:info@example.com">info@example.com</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;