import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import offerData from "../data/offer.json";
import Layout from "../components/layout/Layout";
function BlogGridPage() {
  return (
    <Layout>
      <Breadcrumb
        pageTitle="יעדים אקזוטיים"
        pageDetails="אין כמו חול לבן, ים תכלת, שייק פירות ומלון טוב "
        backgroundImageHeder= "https://ik.imagekit.io/myBlog/%D7%9E%D7%9C%D7%93%D7%99%D7%91%D7%99%D7%99%D7%9D/DSC02207.JPG?updatedAt=1680702292392"
      />
      <div className="blog-grid-section pt-120 pb-120">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {offerData.map((item) => {
              const { id, date, regions, region, country, imageBlogGrid  } = item;
              return (
                <div key={id} className="col-lg-4 col-md-6 col-sm-10">
                  <div className="blog-single2 sibling-5">
                    <div className="image">
                      <img src={imageBlogGrid} className="img-fluid" alt="image" />
                      {region &&<span className="blog-category">{region}</span>}
                    </div>
                    <div className="content">
                      {regions ? (
                      <h5>
                        <Link href={{
                          pathname: '/blog-standard',
                          query: { regions: JSON.stringify(item) }
                          }}
                        >
                          <a>{country}</a>
                        </Link>
                      </h5>
                    ) : (
                      <h5>
                        <Link href={{
                          pathname: '/tour-package-details',
                          query: {regions: JSON.stringify(item)}
                          }}>
                          <a>{country}</a>
                        </Link>
                      </h5>
                    )}
                      <div className="blog-date">
                        <i className="bi bi-calendar-check" />
                        <span>{date}</span>
                      </div>
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

export default BlogGridPage;