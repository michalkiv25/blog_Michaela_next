import React from "react";

function Home1Form() {
  return (
    <div className="asking-form-section"  style={{ direction: 'rtl'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9 col-md-10">
            <div className="asking-form-wrap">
              <div className="section-title1 sibling2">
                <h2>יצירת קשר</h2>
                <img
                  src="assets/images/icons/section-title-vector.svg"
                  alt="image"
                />
              </div>
              <form className="style-1">
                <div className="row g-5">
                  <div className="col-md-6">
                    <div className="form-inner">
                      <input type="text" placeholder="שם מלא" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <input type="email" placeholder="אימייל" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner">
                      <textarea
                        name="message"
                        rows={6}
                        placeholder="תכתוב את ההודעה כאן.."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 text-center">
                    <button className="eg-btn btn--primary btn--lg">
                      שליחה
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

export default Home1Form;