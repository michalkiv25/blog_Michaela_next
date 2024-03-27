import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import instagramfeedImages from "../../data/instagramFeed.json";

import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay]);

function InstagramFeed({ type = "homeOneInstagram" }) {
  const instagramSlider = {
    slidesPerView: "auto",
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },

    speed: 5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
    breakpoints: {
      280: {
        slidesPerView: "auto",
        navigation: false,
      },
      386: {
        slidesPerView: 2,
        navigation: false,
      },
      576: {
        slidesPerView: 3,
        navigation: false,
      },
      768: {
        slidesPerView: 4,
        navigation: false,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 6,
      },
    },
  };
  return (
    <div className="instagram-feed-section">
      <div className="container">
        <div className="row justify-content-lg-start justify-content-center">
          <div className="col-lg-4">
            <div className="section-title-small text-lg-start text-center">
              <i className="bi bi-instagram" />
              <span>Instagram Feed</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0">
        <Swiper {...instagramSlider} className="swiper insta-feed-slider">
          <div className="swiper-wrapper">
            {instagramfeedImages.map((item) => {
              if (item.type === type) {
                return item.image.map((e) => {
                  return (
                    <SwiperSlide key={e.id} className="swiper-slide">
                      <div className="insta-feed-single">
                        <img src={e.image} alt="image" />
                      </div>
                    </SwiperSlide>
                  );
                });
              }
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default InstagramFeed;