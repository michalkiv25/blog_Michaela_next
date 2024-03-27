import Link from "next/link";
import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import cardData from "../../data/tourCard.json";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function Home1TourPlan() {
  const tourCardslider = {
    slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 25,
    autoplay: true,
    loop: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
    navigation: {
      nextEl: ".plan1-prev",
      prevEl: ".plan1-next",
    },
    breakpoints: {
      280: {
        slidesPerView: "auto",
        navigation: false,
      },
      576: {
        slidesPerView: 2,
        navigation: false,
      },
      768: {
        slidesPerView: 2,
        navigation: false,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <div className="best-plan-section pt-120 overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10 col-md-12 text-center">
            <div className="section-title1">
              <span>חופשות עם ילדים</span>
              <h2>חופשות משפחתיות</h2>
              <img
                src="assets/images/icons/section-title-vector.svg"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 position-relative">
            <Swiper
              {...tourCardslider}
              className="swiper best-plan-slider position-relative"
            >
              <div className="swiper-wrapper">
                {cardData.map((item) => {
                  const {
                    id,
                    imageHomePage,
                    country,
                    rating,
                    durationTrip,
                    places
                  } = item;
                  return (
                    <SwiperSlide key={id} className="swiper-slide" >
                      <div className="best-plan-single1">
                        <div className="image">
                          <img src={imageHomePage} className="img-fluid" alt="image" />
                          <Link href={{
                          pathname: '/tour-package-details',
                          query: { regions: JSON.stringify(item) }
                          }}>
                            <a className="eg-btn btn--primary-outline btn--md">
                              {country}
                            </a>
                          </Link>
                        </div>
                        <div className="content" style={{ direction: 'rtl'}} >
                          {/* <p>From ${regularPrice}</p> */}
                          {/* <h4>
                            <Link href="/tour-package-details">
                              <a>{title}</a>
                            </Link>
                          </h4> */}
                          <div className="best-plan-meta">
                            <span className="duration">
                              <i className="bi bi-clock" />
                             אורך הטיול: {durationTrip}
                            </span>
                            <span className="rating">
                              <i className="bi bi-star-fill" />
                              {rating} 
                            </span>
                          </div>
                          <div className="list-area">
                            {places && <h5>אזורים שביקרנו :</h5>}
                            <ul className="plan-list1">
                            {places?.map((place, i) => (
                              <li key={i}>{place}</li>
                            ))}
                            </ul>
                          </div>
                       
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
            <div className="slider-arrows arrows-style-1 text-center d-xl-flex d-none flex-row justify-content-between align-items-center w-100">
              <div
                className="plan1-prev swiper-prev-arrow"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
              >
                <svg
                  width={20}
                  height={12}
                  viewBox="0 0 20 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.00001 10.573V6L7.00001 1.42701C7.00001 1.25744 6.80224 1.16481 6.67197 1.27336L1 6L6.67197 10.7266C6.80224 10.8352 7.00001 10.7426 7.00001 10.573Z" />
                  <path d="M19 6.5C19.2761 6.5 19.5 6.27614 19.5 6C19.5 5.72386 19.2761 5.5 19 5.5V6.5ZM6.67197 10.7266L6.99206 10.3425V10.3425L6.67197 10.7266ZM1 6L0.679909 5.61589L0.218975 6L0.679909 6.38411L1 6ZM6.67197 1.27336L6.35188 0.889252L6.35188 0.889253L6.67197 1.27336ZM19 5.5L7.00001 5.5V6.5L19 6.5V5.5ZM6.50001 6V10.573H7.50001V6H6.50001ZM6.99206 10.3425L1.32009 5.61589L0.679909 6.38411L6.35188 11.1107L6.99206 10.3425ZM1.32009 6.38411L6.99206 1.65747L6.35188 0.889253L0.679909 5.61589L1.32009 6.38411ZM6.50001 1.42701L6.50001 6H7.50001L7.50001 1.42701H6.50001ZM6.99206 1.65747C6.79667 1.82031 6.50001 1.68136 6.50001 1.42701H7.50001C7.50001 0.833523 6.80781 0.509313 6.35188 0.889252L6.99206 1.65747ZM6.50001 10.573C6.50001 10.3186 6.79667 10.1797 6.99206 10.3425L6.35188 11.1107C6.80781 11.4907 7.50001 11.1665 7.50001 10.573H6.50001Z" />
                </svg>
              </div>
              <div
                className="plan1-next swiper-next-arrow"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
              >
                <svg
                  width={20}
                  height={12}
                  viewBox="0 0 20 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 1.42701V6V10.573C13 10.7426 13.1978 10.8352 13.328 10.7266L19 6L13.328 1.27336C13.1978 1.16481 13 1.25744 13 1.42701Z" />
                  <path d="M1 5.5C0.723858 5.5 0.5 5.72386 0.5 6C0.5 6.27614 0.723858 6.5 1 6.5V5.5ZM13.328 1.27336L13.0079 1.65747V1.65747L13.328 1.27336ZM19 6L19.3201 6.38411L19.781 6L19.3201 5.61589L19 6ZM13.328 10.7266L13.6481 11.1107L13.6481 11.1107L13.328 10.7266ZM1 6.5H13V5.5H1V6.5ZM13.5 6V1.42701H12.5V6H13.5ZM13.0079 1.65747L18.6799 6.38411L19.3201 5.61589L13.6481 0.889253L13.0079 1.65747ZM18.6799 5.61589L13.0079 10.3425L13.6481 11.1107L19.3201 6.38411L18.6799 5.61589ZM13.5 10.573V6H12.5V10.573H13.5ZM13.0079 10.3425C13.2033 10.1797 13.5 10.3186 13.5 10.573H12.5C12.5 11.1665 13.1922 11.4907 13.6481 11.1107L13.0079 10.3425ZM13.5 1.42701C13.5 1.68136 13.2033 1.82031 13.0079 1.65747L13.6481 0.889253C13.1922 0.509312 12.5 0.833522 12.5 1.42701H13.5Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1TourPlan;