import React from 'react'
import Weatherapi from '../information/Weatherapi'
import InformationCountry from '../information/InformationCountry'
import MoneyExchange from '../information/MoneyExchange'

function Information({regions, dataCountry}) {
  return (
    <div className="tab-pane fade show active" id="v-pills-information" role="tabpanel" aria-labelledby="v-pills-information-tab">
      <div className="tour-information">
        <div className="tour-plan">
          <h3>מידע כללי</h3>
        </div>
        {/* <div className="tour-price"><h3>$175 /</h3><span>per person</span></div> */}
        {/* <ul className="tour-info-metalist">
          <li>
            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7ZM7 3.0625C7 2.94647 6.95391 2.83519 6.87186 2.75314C6.78981 2.67109 6.67853 2.625 6.5625 2.625C6.44647 2.625 6.33519 2.67109 6.25314 2.75314C6.17109 2.83519 6.125 2.94647 6.125 3.0625V7.875C6.12502 7.95212 6.14543 8.02785 6.18415 8.09454C6.22288 8.16123 6.27854 8.2165 6.3455 8.25475L9.408 10.0048C9.5085 10.0591 9.62626 10.0719 9.73611 10.0406C9.84596 10.0092 9.93919 9.93611 9.99587 9.83692C10.0525 9.73774 10.0682 9.62031 10.0394 9.50975C10.0107 9.39919 9.93982 9.30426 9.842 9.24525L7 7.62125V3.0625Z" />
            </svg>
            {regions?.lengthTrip}
          </li>
          <li>
            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 7C7.92826 7 8.8185 6.63125 9.47487 5.97487C10.1313 5.3185 10.5 4.42826 10.5 3.5C10.5 2.57174 10.1313 1.6815 9.47487 1.02513C8.8185 0.368749 7.92826 0 7 0C6.07174 0 5.1815 0.368749 4.52513 1.02513C3.86875 1.6815 3.5 2.57174 3.5 3.5C3.5 4.42826 3.86875 5.3185 4.52513 5.97487C5.1815 6.63125 6.07174 7 7 7ZM14 12.8333C14 14 12.8333 14 12.8333 14H1.16667C1.16667 14 0 14 0 12.8333C0 11.6667 1.16667 8.16667 7 8.16667C12.8333 8.16667 14 11.6667 14 12.8333Z" />
            </svg>    
            הרכב משפחה : {regions?.sizeFamily}
          </li>
          <li>
            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14 0.43748C14 0.372778 13.9856 0.308889 13.9579 0.250418C13.9302 0.191947 13.8898 0.140348 13.8398 0.0993396C13.7897 0.0583312 13.7312 0.0289339 13.6684 0.0132656C13.6057 -0.00240264 13.5402 -0.00395173 13.4768 0.00872996L9.1875 0.86623L4.89825 0.00872996C4.84164 -0.00258444 4.78336 -0.00258444 4.72675 0.00872996L0.35175 0.88373C0.252608 0.903546 0.163389 0.957088 0.099263 1.03525C0.0351366 1.11342 6.10593e-05 1.21138 0 1.31248L0 13.5625C3.90711e-05 13.6272 0.0144289 13.6911 0.0421328 13.7495C0.0698367 13.808 0.110165 13.8596 0.160212 13.9006C0.210259 13.9416 0.268779 13.971 0.331556 13.9867C0.394332 14.0024 0.459803 14.0039 0.52325 13.9912L4.8125 13.1337L9.10175 13.9912C9.15836 14.0025 9.21664 14.0025 9.27325 13.9912L13.6482 13.1162C13.7474 13.0964 13.8366 13.0429 13.9007 12.9647C13.9649 12.8865 13.9999 12.7886 14 12.6875V0.43748ZM4.375 12.3287V0.97123L4.8125 0.88373L5.25 0.97123V12.3287L4.89825 12.2587C4.84165 12.2474 4.78335 12.2474 4.72675 12.2587L4.375 12.3287ZM8.75 13.0287V1.67123L9.10175 1.74123C9.15836 1.75254 9.21664 1.75254 9.27325 1.74123L9.625 1.67123V13.0287L9.1875 13.1162L8.75 13.0287Z" />
            </svg>    
            {regions?.region}
          </li>
        </ul> */}
        {/* <p>The Flavian Amphitheater, better known to the world as the Colosseum, is the most universally recognized icon in Rome. You can explore this popular tourist attraction on your own or take a guided tour for more information and the opportunity to ask questions as you go along.</p> */}
        {/* <p>Despite damage by fire, earthquake, and neglect, as well as its conversion into a fortress of the Frangipani family, the pillaging of its stone for construction of palaces,</p> */}
        {/* table here */}
        {/* <div className="tour-info-list-area">
          <ul className="info-list-1">
            <li><span>Destination</span><span>The Italy</span></li>
            <li><span>Departure/Return Location</span><span>Rome F.K. International Airport</span></li>
            <li><span>Departure Time</span><span>Please arrive by 9:15 AM for a departure at 9:30 AM</span></li>
            <li><span>Return Time</span><span>Approximately 10:30 PM</span></li>
            <li><span>Dress Code</span><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></li>
          </ul>
          <ul className="info-list-1">
            <li><span>Package Included</span>
              <ul className="info-sublist">
                <li><i className="bx bx-check" />5 Star Accommodation</li>
                <li><i className="bx bx-check" />Airport Transfers</li>
                <li><i className="bx bx-check" />Entrance Fees</li>
                <li><i className="bx bx-check" />Box Lunch, Dinner &amp; Snacks.</li>
              </ul>
            </li>
          </ul>
          <ul className="info-list-1">
            <li><span>Package Excludes</span>
              <ul className="info-sublist">
                <li><i className="bx bx-x" />Additional Services</li>
                <li><i className="bx bx-x" />Insurance</li>
                <li><i className="bx bx-x" />Transport</li>
                <li><i className="bx bx-x" />Entry Fees</li>
                <li><i className="bx bx-x" />Any Private Expenses</li>
              </ul>
            </li>
          </ul>
        </div> */}
      <InformationCountry 
      recommendedSeason={dataCountry?.recommendedSeason} 
      countryEng={dataCountry?.countryEng} 
      country={dataCountry?.country} 
      flag={dataCountry?.flag}
      >
      </InformationCountry>
      <MoneyExchange currency={dataCountry?.currency} country={dataCountry?.country}></MoneyExchange>
      <Weatherapi countryRegion={dataCountry?.countryRegion} countryEng={dataCountry?.countryEng} region={dataCountry?.severalAreas ? regions?.region : regions?.country}></Weatherapi>
        {/* <p>The largest structure surviving from ancient Rome, the Colosseum was begun by Vespasian in AD 72, and eight years later enlarged by his son, Titus, adding the fourth story. The name of the Colosseum derived from the immense statue of Nero-called the colossus after the Colossus</p> */}
        {/* <div className="row details-img-group justify-content-center g-4">
          <div className="col-lg-4 col-md-4 col-sm-4 col-6">
            <img src="assets/images/blog/blog-details-img2.png" className="img-fluid" alt="image" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-6">
            <img src="assets/images/blog/blog-details-img3.png" className="img-fluid" alt="image" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-6">
            <img src="assets/images/blog/blog-details-img4.png" className="img-fluid" alt="image" />
          </div>
        </div> */}
        {/* <div className="faq-area">
          <h3 className="tour-details-subtitle">Frequently Asked Questions</h3>
          <div className="faq-wrap sibling-2">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    01. Who’s the most interesting person you’ve ever met on a plane?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>
                      Some of the strangest places on earth are also the most sublime: from the UFO-like dragon&apos;s blood trees in Yemen to a rainbow-colored hot spring in Yellowstone to a bridge in Germany that looks like a leftover prop from Lord of the Rings.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    02. What are the most surreal places to visit?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>
                      Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, libero ex hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit amet condimentum erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    03. Who’s the most interesting person you’ve ever met on a plane?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>
                      Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, libero ex hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit amet condimentum erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Information