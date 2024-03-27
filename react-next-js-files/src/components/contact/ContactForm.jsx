import React from "react";

function ContactForm() {
  return (
    <div className="contact-section pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="section-title1">
              <span>מענה תוך 48 שעות</span>
              <h2>תשאיר הודעה</h2>
              <img
                src="assets/images/icons/section-title-vector.svg"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="contact-from-wrapper" style={{ direction: 'rtl'}}>
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input type="text" placeholder="שם פרטי:" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input type="text" placeholder="מספר טלפון:" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <input type="text" placeholder="נושא:" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="הודעה..."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="eg-btn btn--primary btn--lg submit-btn"
                    >
                      שליחת הודעה
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;