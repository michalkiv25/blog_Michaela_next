import Link from "next/link";
import React from "react";
import offerData from "../../data/offer.json";
function Home1Offer() {
  
  return (
    <div className="deal-section pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10 col-md-12 text-center">
            <div className="section-title1">
              <span>יעדים &amp; טרופים</span>
              <h2>חופשות אקזוטיות</h2>
              <img
                src="assets/images/icons/section-title-vector.svg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center g-4">
          {offerData.slice(0,4).map((item) => {
            const {
              id,
              country,
              imageHomePage,
              yearHomePage
            } = item;
            return (
              <div key={id} className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="deal-single1">
                  <div className="deal-image">
                    <span className="favourite">
                      <i className="bi bi-suit-heart-fill" />
                    </span>
                    <span className="discount-bagde">{yearHomePage}</span> 
                    <img src={imageHomePage} className="img-fluid" alt="image" />
                  </div>
                  <div className="deal-content">
                    {/* <div className="review-area">
                      <ul className="star-list">
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-half" />
                        </li>
                      </ul>
                      <span>({rateing} Review)</span>
                    </div> */}
                    {/* <h4>
                      <Link href="/tour-package-details">
                        <a>{title}</a>
                      </Link>
                    </h4> */}
                    {/* <div className="price">
                      <span>From ${offerPrice}</span>
                      <del>/${regularPrice}</del>
                    </div> */}
                    <Link href={{
                      pathname: item.regions ? '/blog-standard' : '/tour-package-details',
                      query: { 
                        regions: JSON.stringify(item)
                      }
                    }}>
                      <a className="eg-btn btn--primary-outline btn--md">
                        {country}
                      </a>
                    </Link>
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
        <div className="row justify-content-center mt-70">
          <div className="col-8 text-center">
            <Link href="/blog-grid">
              <a className="eg-btn btn--primary-outline btn--lg">
                כל היעדים האקזוטיים
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1Offer;