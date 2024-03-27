import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function BookingForm() {
  const [startDate1, setStartDate1] = useState(false);
  return (
    // <div className="booking-form-box">
    //   <h3>Book the Tour</h3>
    //   <p>Arrange your trip in advance - book this tour now!</p>
    //   <form className="banner-form">
    //     <div className="search-box-single destination-box">
    //       <div className="searchbox-icon">
    //         <i className="bi bi-pencil-fill" />
    //       </div>
    //       <div className="searchbox-input">
    //         <input type="text" placeholder="Full Name*" />
    //       </div>
    //     </div>
    //     <div className="search-box-single destination-box">
    //       <div className="searchbox-icon">
    //         <i className="bi bi-envelope-fill" />
    //       </div>
    //       <div className="searchbox-input">
    //         <input type="text" placeholder="E-mail*" />
    //       </div>
    //     </div>
    //     <div className="search-box-single destination-box">
    //       <div className="searchbox-icon">
    //         <i className="bi bi-telephone" />
    //       </div>
    //       <div className="searchbox-input">
    //         <input type="text" placeholder="Phone Number*" />
    //       </div>
    //     </div>
    //     <div className="search-box-single destination-box postition-relative">
    //       <div className="searchbox-icon">
    //         <i className="bi bi-calendar-minus" />
    //       </div>
    //       <div className="searchbox-input">
    //       <ReactDatePicker
    //                       title="reset date"
    //                       className="calendar"
    //                       selected={startDate1}
    //                       onChange={(date) => setStartDate1(date)}
    //                       placeholderText="Check Out"
                        
    //                     />
            
    //         {/* <input placeholder="Select your date" name="checkIn" id="datepicker" autoComplete="off" className="calendar" /> */}
    //       </div>
    //     </div>
    //     <div className="search-box-single">
    //       <div className="searchbox-icon">
    //         <i className="bi bi-person-fill" />
    //       </div>
    //       <div className="searchbox-input">
    //         <input type="number" placeholder="People *" />
    //       </div>
    //     </div>
    //     <div className="search-box-single">
    //       <div className="searchbox-icon">
    //         <i className="bi bi-tags-fill" />
    //       </div>
    //       <div className="searchbox-input">
    //         <input type="number" placeholder="Number of tickets *" />
    //       </div>
    //     </div>
    //     <div className="search-box-single">
    //       <div className="searchbox-icon">
    //         <i className="bi bi-chat-left-text-fill" />
    //       </div>
    //       <div className="searchbox-input">
    //         <textarea
    //           name="message3"
    //           rows={6}
    //           placeholder="Your Enquiry*"
    //           defaultValue={""}
    //         />
    //       </div>
    //     </div>
    //     <button className="eg-btn btn--primary btn--lg w-100 mt-3">
    //       BOOK NOW
    //     </button>
    //   </form>
    // </div>
    <></>
  );
}

export default BookingForm;
