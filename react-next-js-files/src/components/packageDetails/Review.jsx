import React from 'react'

function Review() {
  return (
  //   <div className="tab-pane fade" id="v-pills-review" role="tabpanel" aria-labelledby="v-pills-review-tab">
  //   <div className="tour-review-area">
  //     <h3 className="tour-details-subtitle">Astrip Client Review</h3>
  //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  //     {/* review-progress-box */}
  //     <div className="review-progress-box">
  //       <div className="row g-4 align-items-center">
  //         <div className="col-md-5">
  //           <div className="tour-review-number">
  //             <span>08.00</span>
  //             <h2>Excellent</h2>
  //           </div>
  //         </div>
  //         <div className="col-md-7">
  //           <div className="progress-singl">
  //             <span>Overall</span>
  //             <i className="progress-bar">95%</i>
  //           </div>
  //           <div className="progress-singl">
  //             <span>Accommodation</span>
  //             <i className="progress-bar">99%</i>
  //           </div>
  //           <div className="progress-singl">
  //             <span>Transport</span>
  //             <i className="progress-bar">80%</i>
  //           </div>
  //           <div className="progress-singl">
  //             <span>Food</span>
  //             <i className="progress-bar" >95%</i>
  //           </div>
  //           <div className="progress-singl">
  //             <span>Destination</span>
  //             <i className="progress-bar">75%</i>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     {/* review-comment-area */}
  //     <div className="review-commetn-area">
  //       <ul className="review-comment-list">
  //         <li>
  //           <div className="comment-item">
  //             <div className="image">
  //               <img src="assets/images/blog/blog-comment1.png" alt="image" />
  //             </div>
  //             <div className="content">
  //               <div className="comment-meta">
  //                 <h5>Loretta Shelton -</h5><span>25 January, 2022</span>
  //               </div>
  //               <p>Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elituis sed odio sit amet nibh vulputate cursus a sit amet mauris.Praesent explicari id eum.</p>
  //               <ul className="review-item-list">
  //                 <li>
  //                   <span>Overall</span>
  //                   <ul className="star-list">
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-half" /></li>
  //                   </ul>
  //                 </li>
  //                 <li>
  //                   <span>Transport</span>
  //                   <ul className="star-list">
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-half" /></li>
  //                   </ul>
  //                 </li>
  //                 <li>
  //                   <span>Food</span>
  //                   <ul className="star-list">
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-half" /></li>
  //                   </ul>
  //                 </li>
  //                 <li>
  //                   <span>Destination</span>
  //                   <ul className="star-list">
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-half" /></li>
  //                   </ul>
  //                 </li>
  //                 <li>
  //                   <span>Hospitality</span>
  //                   <ul className="star-list">
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-half" /></li>
  //                   </ul>
  //                 </li>
  //               </ul>
  //             </div>
  //           </div>
  //         </li>
  //         <li>
  //           <div className="comment-item">
  //             <div className="image">
  //               <img src="assets/images/blog/blog-comment3.png" alt="image" />
  //             </div>
  //             <div className="content">
  //               <div className="comment-meta">
  //                 <h5>Darrell Steward -</h5><span>25 August, 2022</span>
  //               </div>
  //               <p>Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elituis sed odio sit amet nibh vulputate cursus a sit amet mauris.Praesent explicari id eum.</p>
  //               <ul className="review-item-list">
  //                 <li>
  //                   <span>Overall</span>
  //                   <ul className="star-list">
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-half" /></li>
  //                   </ul>
  //                 </li>
  //                 <li>
  //                   <span>Transport</span>
  //                   <ul className="star-list">
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-half" /></li>
  //                   </ul>
  //                 </li>
  //                 <li>
  //                   <span>Food</span>
  //                   <ul className="star-list">
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-half" /></li>
  //                   </ul>
  //                 </li>
  //                 <li>
  //                   <span>Destination</span>
  //                   <ul className="star-list">
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-half" /></li>
  //                   </ul>
  //                 </li>
  //                 <li>
  //                   <span>Hospitality</span>
  //                   <ul className="star-list">
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-fill" /></li>
  //                     <li><i className="bi bi-star-half" /></li>
  //                   </ul>
  //                 </li>
  //               </ul>
  //             </div>
  //           </div>
  //         </li>
  //       </ul>
  //     </div>
  //     {/* review-comment-form */}
  //     <div className="review-form-area">
  //       <h3 className="tour-details-subtitle">Write a review:</h3>
  //       <div className="contact-from-wrapper">
  //         <form>
  //           <div className="row">
  //             <div className="col-lg-6">
  //               <div className="form-inner">
  //                 <input type="text" placeholder="Your Name:" />
  //               </div>
  //             </div>
  //             <div className="col-lg-6">
  //               <div className="form-inner">
  //                 <input type="text" placeholder="Your Phone Number:" />
  //               </div>
  //             </div>
  //             <div className="col-lg-12">
  //               <div className="form-inner">
  //                 <input type="text" placeholder="Type Your Subject:" />
  //               </div>
  //             </div>
  //             <div className="col-lg-12">
  //               <div className="form-inner">
  //                 <textarea name="message" rows={5} placeholder="Write Your Question" defaultValue={""} />
  //               </div>
  //             </div>
  //             <div className="col-lg-12">
  //               <div className="star-rating-wrapper">
  //                 <ul className="star-rating-list">
  //                   <li>
  //                     <div className="rating-container" data-rating={0}>
  //                       <i className="bi bi-star-fill star-icon" />
  //                       <i className="bi bi-star-fill star-icon" />
  //                       <i className="bi bi-star-fill star-icon" />
  //                       <i className="bi bi-star-fill star-icon" />
  //                       <i className="bi bi-star-fill star-icon" />
  //                     </div>
  //                     <span>Overall</span>
  //                   </li>
  //                   <li>
  //                     <div className="rating-container" data-rating={0}>
  //                       <i className="bi bi-star-fill star-icon" />
  //                       <i className="bi bi-star-fill star-icon" />
  //                       <i className="bi bi-star-fill star-icon" />
  //                       <i className="bi bi-star-fill star-icon" />
  //                       <i className="bi bi-star-fill star-icon" />
  //                     </div>
  //                     <span>Transport</span>
  //                   </li>
  //                   <li>
  //                     <div className="rating-container" data-rating={0}>
  //                       <i className="bi bi-star-fill star-icon" />
  //                       <i className="bi bi-star-fill star-icon" />
  //                       <i className="bi bi-star-fill star-icon" />
  //                       <i className="bi bi-star-fill star-icon" />
  //                       <i className="bi bi-star-fill star-icon" />
  //                     </div>
  //                     <span>Food</span>
  //                   </li>
  //                   <li>
  //                     <div className="rating-container" data-rating={0}>
  //                       <i className="bi bi-star-fill star-icon" />
  //                       <i className="bi bi-star-fill star-icon" />
  //                       <i className="bi bi-star-fill star-icon" />
  //                       <i className="bi bi-star-fill star-icon" />
  //                       <i className="bi bi-star-fill star-icon" />
  //                     </div>
  //                     <span>Destination</span>
  //                   </li>
  //                   <li>
  //                     <div className="rating-container" data-rating={0}>
  //                       <i className="bi bi-star-fill star-icon" />
  //                       <i className="bi bi-star-fill star-icon" />
  //                       <i className="bi bi-star-fill star-icon" />
  //                       <i className="bi bi-star-fill star-icon" />
  //                       <i className="bi bi-star-fill star-icon" />
  //                     </div>
  //                     <span>Hospitality</span>
  //                   </li>
  //                 </ul>
  //               </div>
  //             </div>
  //             <div className="col-lg-12">
  //               <button type="submit" className="eg-btn btn--primary btn--lg submit-btn">Submit Now</button>
  //             </div>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  <></>
  )
}

export default Review