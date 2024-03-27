import React, { useState, useEffect } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination
} from "swiper";
import BlogSocialLinks from "../components/blog/BlogSocialLinks";
import BlogStandardRightBar from "../components/blog/BlogStandardRightBar";
// import CategoryWidget from "../components/blog/CategoryWidget";
import SearchWidget from "../components/blog/SearchWidget";
// import SideBarOfferWidget from "../components/blog/SideBarOfferWidget";
import TrandingPostWidget from "../components/blog/TrandingPostWidget";
import Breadcrumb from "../components/common/Breadcrumb";
import { useRouter } from 'next/router';
import Layout from "../components/layout/Layout";

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function BlogStandard() {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const [regions, setRegions] = useState(null);

  useEffect(() => {
    if (router.query.regions) {
      const parsedRegions = JSON.parse(router.query.regions);
      setRegions(parsedRegions);
    }
  }, [router.query.regions]);
  
  const blogSlider = {
    slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 15,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: true,
    loop: true,
    roundLengths: true,
    navigation: {
      nextEl: ".blog1-prev",
      prevEl: ".blog1-next",
    },
  };
  return (
    <Layout>
      <Breadcrumb
        pageTitle={regions?.country}
        pageDetails={`כל המידע על ${regions?.country}`}
        backgroundImageHeder={regions?.imageBlogGrid}
        />
      <div className="blog-standard-section pt-120 pb-120" style={{ direction: 'rtl'}} >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <BlogStandardRightBar regions={regions}/>
              {/* <nav className="pagination-wrap pt-50">
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
              </nav> */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="blog-sidebar ps-lg-4">
                {/* <SearchWidget /> */}
                <TrandingPostWidget regions={regions}/>
                {/* <CategoryWidget /> */}
                <BlogSocialLinks />
                {/* <SideBarOfferWidget /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogStandard;