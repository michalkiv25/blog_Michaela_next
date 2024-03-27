import { useRouter } from "next/router";
import React from "react";

function Breadcrumb({ pageTitle, pageDetails, reviewCount, backgroundImageHeder  }) {
  const router = useRouter();
  const currentRoute = router.pathname;

  const getBackgroundImage = (backgroundImage) => {
    switch (currentRoute) {
        case "/tour-package-details":
            return `url(${backgroundImage})`;
        case "/contact":
            return `url(${backgroundImage})`;
        case "/blog-grid":
            return `url(${backgroundImage})`;
        case "/blog-standard":
            return `url(${backgroundImageHeder = "https://ik.imagekit.io/myBlog/%D7%91%D7%95%D7%A8%D7%A7%D7%90%D7%99_-_%D7%A4%D7%99%D7%9C%D7%99%D7%A4%D7%99%D7%A0%D7%99%D7%9D/DSC01031.JPG?updatedAt=1680889160265"})`;
        default:
            return `url(${backgroundImage})`;
    }
};
  return (
    <div
      className={
        currentRoute === "/tour-package-details"
          ? "inner-banner-section sibling-2"
          : "inner-banner-section"
      }
      style={{backgroundImage: getBackgroundImage(backgroundImageHeder)}}
    >
      <img
        src="assets/images/bg/inner-banner-vctr.png"
        className="inner-banner-vector"
        alt="image"
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="breadcrumb-area">
              <span>{pageTitle}</span>
              <h2>{pageDetails}</h2>
              {currentRoute === "/blog-details" ? (
                <div className="review-area">
                  {/* <ul className="breadcrumb-meta-list">
                    <li> May 6, 2022</li>
                    <li>Victor Thornton</li>
                    <li> Comments: 02</li>
                  </ul> */}
                </div>
              ) : currentRoute === "/destination-details" ||
                currentRoute === "/tour-package-details" ? (
                <div className="review-area">
                  <ul className="star-list">
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-half"></i>
                    </li>
                  </ul>
                  <span>({reviewCount} דירוג)</span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;