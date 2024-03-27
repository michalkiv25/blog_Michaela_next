import React from 'react'
import DestinationLeft from '../destinationDetails/DestinationLeft'

function BlogDetailsSingle({hotel}) {
  return (
    <div className="blog-details-single">
                <img
                  src={hotel?.imageHotelBlogDetails}
                  className="img-fluid"
                  alt="image"
                />
                <p>{hotel?.informationHotel}</p>
                {/* <p>
                  This is all good for beginners but when these blogs grow, most
                  bloggers forgot about design and instead doubled down on SEO
                  and marketing.{" "}
                </p> */}
                {/* <blockquote>
                  <h4>
                    There is a way out of every box, a solution to every puzzle
                    it’s just a matter of finding it.
                  </h4>
                  <div className="quote-icon">
                    <svg
                      width={32}
                      height={30}
                      viewBox="0 0 32 30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.35 0.237864C8.25703 0.344114 6.50391 2.54216 4.45195 5.12536C1.49688 8.8574 0.726562 9.87341 0.726562 10.0195C0.726562 10.1789 0.826172 10.2918 1.3043 10.6902C1.62969 10.9492 2.30703 11.5933 2.81836 12.1047C4.89023 14.1965 6.10547 16.2418 6.53047 18.3336C6.66992 18.9976 6.66992 20.3058 6.53047 21.116C6.11875 23.5465 4.50508 26.4617 2.24063 28.8789C1.86211 29.2773 1.72266 29.4765 1.72266 29.6027C1.72266 30.0344 2.02813 30.041 3.01094 29.6293C5.8 28.4539 8.60234 26.5879 10.6543 24.5293C13.3105 21.873 14.8645 18.9644 15.5086 15.4648C15.6945 14.4754 15.6813 12.5961 15.482 11.6265C14.7184 7.85466 12.6 3.97654 9.55859 0.769114C8.80156 -0.0277615 8.65547 -0.0875263 8.35 0.237864Z" />
                      <path d="M23.9555 0.237936C23.8625 0.344187 22.1094 2.54223 20.0574 5.12543C17.1023 8.85747 16.332 9.87348 16.332 10.0196C16.332 10.1789 16.4316 10.2918 16.9164 10.6903C17.2352 10.9493 17.9125 11.5934 18.4238 12.1047C20.4957 14.1965 21.7109 16.2418 22.1359 18.3336C22.2754 18.9977 22.2754 20.3059 22.1359 21.1161C22.0098 21.8399 21.6711 22.9555 21.3125 23.7789C20.6152 25.386 19.2074 27.4446 17.7598 28.9719C17.4543 29.2973 17.3281 29.4832 17.3281 29.6094C17.3281 30.0344 17.6336 30.0411 18.6164 29.6293C22.0629 28.1817 25.5293 25.645 27.6344 23.0352C29.1617 21.1426 30.3238 18.8383 30.8684 16.627C31.1672 15.4184 31.2336 14.8672 31.2336 13.5723C31.2336 12.45 31.2203 12.2176 31.0543 11.4739C30.2508 7.71528 28.1723 3.93676 25.1641 0.769186C24.407 -0.027689 24.2609 -0.0874538 23.9555 0.237936Z" />
                    </svg>
                  </div>
                </blockquote> */}
                {/* <h3 className="blog-details-subtitle">
                  Why You Shouldn’t Ride Elephants France.
                </h3> */}
                {/* <p>
                  geism in the web development field is certainly out there.
                  Though it needn’t prevent you from embarking on an
                  intellectually rewarding (and well-paid) career path! A
                  willingness to learn, and some creative thinking to tie in
                  your past experience goes a long way.
                </p> */}
                <div className="row details-img-group g-4">
               {hotel?.imagesHotel?.map(image => (
                  <div key={image} className="col-lg-4 col-md-4 col-sm-12">
                    <img
                      src={image}
                      className="img-fluid"
                      alt="image"
                    />
                  </div>
               ))}
              
                </div>
                {/* <p>
                  Add on the fact that the park has nearly a dozen entrance
                  stations, and picking a location for your home base feels even
                  trickier. Whether you’re looking to explore the rocky Pacific
                  coastline, go forest bathing in the Hall of Mosses, or enjoy
                  the sounds of a rushing river, our picks for the best Olympic
                  National Park lodging have you covered. Below, 15 Airbnbs,
                  Vrbos.
                </p> */}
                {hotel?.informationHotelList &&  
                <h3 className="blog-details-subtitle">
                  מידע נוסף על המלון:
                </h3>
                }
          
                <ul className="blog-details-feature-list">
                    {hotel?.informationHotelList?.map((item, i) => (
                      <li key={i}>
                        {item}
                      </li>
                    ))}
                </ul>
                <DestinationLeft></DestinationLeft>
                {/* <p>
                  Orem ipsum dolor sit &amp;, sdt consectetu adipiscing elit.
                  Aenean commodo ligula eget dolor. Cum socis Theme sed natoque
                  ut penatibus Etiam ultricies nisi vel augue. Cura bitur an
                  ultricies dictum felis eu pede sit. Etiam rhoncus. Maecenas
                  tempus, tellus eget penatibus Rtiam.
                </p> */}
              </div>
  )
}

export default BlogDetailsSingle