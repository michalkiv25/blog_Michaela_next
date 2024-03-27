import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import destinationData from "../data/destination.json";
import Layout from "../components/layout/Layout";
function Destination() {
  return (
    <Layout>
      <Breadcrumb
        pageTitle="ערים פופולריות"
        pageDetails="לגלות יעדים מרתקים ומרהיבים, גורדי שחקים, אוכל טעים ומיוחד ותרבות שונה"
        backgroundImageHeder="https://ik.imagekit.io/myBlog/%D7%94%D7%95%D7%A0%D7%92_%D7%A7%D7%95%D7%A0%D7%92_%D7%A1%D7%99%D7%9F/DSC03650.JPG?updatedAt=1680976499447"
      />
      <div className="destination-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6  col-lg-8 col-md-10 text-center">
              <div className="section-title1">
                <span>כל היעדים עירוניים</span>
                <h2>מצא את היעד שהכי מעניין אותך</h2>
                <img
                  src="assets/images/icons/section-title-vector.svg"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="destination-wrap flex-wrap">
            {destinationData.map((item) => {
              const { id, imageStandart, country, yearDate, monthDate } = item;
              return (
                <div key={id} className="destination-single1">
                  <img
                    src={imageStandart}
                    className="destination-img img-fluid"
                    alt="image"
                  />
                  <div className="content">
                    <div className="text-wrap">
                      <h4>
                        <Link 
                          href={{
                            pathname: item?.regions ? '/blog-standard' : '/tour-package-details',
                            query: { 
                              regions: JSON.stringify(item),
                            }                  
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
        </div>
      </div>
    </Layout>
  );
}

export default Destination;