import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import packageData from "../data/tourCard.json";
function TourPackage() {
  
  return (
    <Layout>
      <Breadcrumb
          pageTitle="חופשות משפחתיות"
          pageDetails="לגלות יעדים מרתקים ומרהיבים, גורדי שחקים, אוכל טעים ומיוחד ותרבות שונה"
          backgroundImageHeder="https://ik.imagekit.io/myBlog/%D7%94%D7%95%D7%A0%D7%92_%D7%A7%D7%95%D7%A0%D7%92_%D7%A1%D7%99%D7%9F/DSC03650.JPG?updatedAt=1680976499447"
      />
      <div className="blog-grid-section pt-120 pb-120" style={{ direction: 'rtl'}}>
        <div className="container">
          <div className="row g-4">
            {packageData.map((data) => {
              const { id, imageHomePage,places, regularPrice, title, date, rating,country } = data;
              return (
                <div key={id} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="best-plan-single1">
                    <div className="image">
                      <img src={imageHomePage} className="img-fluid" alt="image" />
                    </div>
                    <div className="content">
                      {/* <p>From ${regularPrice}</p> */}
                      <h4>
                      <Link 
                          href={{
                            pathname: data?.regions ? '/blog-standard' : '/tour-package-details',
                            query: { 
                              regions: JSON.stringify(data),
                            }                  
                          }}
                        >
                          <a>{country}</a>
                        </Link>
                      </h4>
                      <div className="best-plan-meta">
                        <span className="duration">
                          <i className="bi bi-clock" />
                          {date}
                        </span>
                        <span className="rating">
                          <i className="bi bi-star-fill" />
                          {rating} 
                        </span>
                      </div>
                      <div className="list-area">
                       {places?.length > 1 && <h5>אזורים שביקרנו:</h5>}
                        <ul className="plan-list1">
                          {places?.map((place,i)=>(
                            <li key={i}>{place}</li>
                          ))}
                        </ul>
                      </div>
                      <Link href={{
                            pathname: data?.regions ? '/blog-standard' : '/tour-package-details',
                            query: { 
                              regions: JSON.stringify(data),
                            }                  
                          }}>
                        <a className="eg-btn btn--primary-outline btn--md">
                          להיכנס לקרוא
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="row justify-content-center">
            <div className="col-md-8">
              <nav className="pagination-wrap pt-50">
                <ul className="pagination d-flex justify-content-center gap-md-3 gap-2">
                  <li className="page-item">
                    <a className="page-link" href="#" tabIndex={-1}>
                      <i className="bi bi-arrow-left" /> PREV
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      01
                    </a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">
                      02
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      03
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      NEXT <i className="bi bi-arrow-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  );
}

export default TourPackage;