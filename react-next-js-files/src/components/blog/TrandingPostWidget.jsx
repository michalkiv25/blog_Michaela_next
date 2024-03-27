import Link from 'next/link'
import React from 'react'

function TrandingPostWidget({regions,nameHotelDisplay}) {
  return (
    <div className="blog-widget">
    <h4 className="blog-widget-title">כל המלונות <span>ב{regions?.country === undefined ? regions?.region : regions?.country}</span></h4>
    <div className="trending-post">
      <ul className="trending-post-list">
      {regions?.regions?.map(region => (
        region?.hotels?.map((hotel) => (
      <li key={hotel.nameHotel}>
        <div className="trending-post-single">
          <div className="package-image">
            <img src={hotel.imageHotel} alt={hotel.nameHotel} />
          </div>
          <div className="post-content">
            <h6><Link 
                  href={{
                  pathname:"/blog-details",
                  query: { 
                    regions: JSON.stringify(region),
                    hotel: JSON.stringify(hotel)
                  }                  
                  }}
                ><a>{hotel.nameHotel}</a></Link></h6>
            {/* <span className="post-date">September 8, 2022</span> */}
          </div>
        </div>
      </li>
        )) 
      ))}
       {regions?.hotels?.map((hotel, i) => {
            if (hotel?.nameHotel !== nameHotelDisplay) {
              return (
                <li key={i}>
                  <div className="trending-post-single">
                    <div className="package-image">
                      <img src={hotel?.imageHotel} alt={hotel?.nameHotel} />
                    </div>
                    <div className="post-content">
                      <h6>
                        <Link
                          href={{
                            pathname: "/blog-details",
                            query: { 
                              regions: JSON.stringify(regions),
                              hotel: JSON.stringify(hotel)
                            }                  
                          }}
                        ><a>{hotel.nameHotel}</a></Link>
                      </h6>
                      {hotel.placeHotel &&  <span className="post-date">ממוקם: {hotel.placeHotel} </span>}
                    </div>
                  </div>
                </li>
              );
            }
          })}
      </ul>
    </div>
  </div>
  )
}

export default TrandingPostWidget