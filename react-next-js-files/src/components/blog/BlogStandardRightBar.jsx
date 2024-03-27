import Link from "next/link";
import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import packagedata from "../../data/offer.json";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import { useRouter } from 'next/router';

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

function BlogStandardRightBar({regions}) {
  const [isOpen, setOpen] = useState(false);
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
    <>
      <div className="blog-standard-area">
        {regions?.regions?.map((item, i) => (
          <div className="blog-standard-single" key={i}>
            <div className="blog-format">
              <span className="blog-date" >{regions.date}</span>
              <div className="blog-image">
                <img
                  src={item.imageRegion}
                  className="img-fluid"
                  alt="image"
                />
              </div>
            </div>
            <div className="blog-content">
              <h3>
                <Link href={{
                  pathname:"/tour-package-details",
                  query: { 
                    regions: JSON.stringify(item),
                    informationCountry: JSON.stringify(regions)
                  }
                  }}
                >
                  <a>{item.region}</a>
                </Link>
              </h3>
              <div className="author-area">
                {/* <p>
                  By <a href="#">David Watson -</a> Comments: 0{" "}
                </p> */}
              </div>
              <p>{item.informationRegionBlogStandart}</p>
              <div className="blog-meta">
                <Link href="/tour-package-details">
                  <a className="read-more-btn">
                    להמשיך לקרוא...  <i className="bi bi-arrow-left" />
                  </a>
                </Link>
                <ul className="share-list">
                  {/* <li>
                    <i className="bi bi-heart" />
                    420
                  </li> */}
                  <li>
                    <i className="bi bi-share" />
                    Share
                    <ul className="blog-social">
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="bx bxl-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/">
                          <i className="bx bxl-pinterest" />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BlogStandardRightBar;