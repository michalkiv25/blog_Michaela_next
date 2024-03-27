import Link from "next/link";
import React from "react";
import destionData from "../../data/destination.json";
function Home1Destination() {
  return (
    <div className="destination-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6  col-lg-8 col-md-10 text-center">
            <div className="section-title1">
              <span>גורדי שחקים</span>
              <h2>חופשות עירוניות</h2>
              <img
                src="assets/images/icons/section-title-vector.svg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="destination-wrap">
          {destionData.slice(0,5).map((data) => {
            const { id, imageHomePage, yearDate, monthDate, country } = data;
            return (
              <div key={id} className="destination-single1">
                <img
                  src={imageHomePage}
                  className="destination-img img-fluid"
                  alt="image"
                />
                <div className="content">
                  <div className="text-wrap">
                    <h4>
                      <Link href=
                        {{
                          pathname: data?.regions ? '/blog-standard' : '/tour-package-details',
                          query: { regions: JSON.stringify(data) }
                        }}
                      >
                        <a>{country}</a>
                      </Link>
                    </h4>
                    
                    <p>{yearDate} {monthDate}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row justify-content-center mt-70">
          <div className="col-8 text-center">
            <Link href="/destination">
              <a className="eg-btn btn--primary-outline btn--lg">
                לכל הערים
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1Destination;