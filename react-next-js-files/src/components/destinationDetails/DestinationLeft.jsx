import React from "react";

function DestinationLeft() {
  return (
    <>
      {/* <div className="desti-details-block">
        <h3>Visiting the Eiffel Tower</h3>
        <p>
          One of the most famous landmarks in the world, the Eiffel Tower (la
          Tour Eiffel) symbolizes Paris. Before arriving here, visitors have a
          vivid image of this monument as seen in a postcard, movie, or on a
          keychain, yet the Eiffel Tower still manages to amaze.
        </p>
        <p>
          This masterpiece of architectural achievement soars to a height of 324
          meters. A feat of ingenuity, the structure of 18,000 iron parts is
          held together by 2.5 million rivets.
        </p>
        <div className="desti-details-img">
          <img
            src="assets/images/bg/destination-details.png"
            className="img-fluid"
            alt="image"
          />
        </div>
        <p>
          Despite its massive weight, the Eiffel Tower has an airy lattice
          construction with the seeming lightness of a ballerina on point. The
          graceful tower is also known as the  In 1887, the Journal
          Officiel launched a competition for a tower to be exhibited at the
          fair. Entrepreneur Gustave Eiffel, along with architect Stephen
          Sauvestre and collaborating engineers, submitted the winning project.
        </p>
        <h5>
          Note: Some businesses may be temporarily closed due to recent global
          health and safety issues.
        </h5>
        <p>
          In the evening, the Eiffel Tower is among the most magical places to
          visit in Paris. The landmark is at its most enchanting at night when
          it is illuminated with Golden Lighting that glows from lamps placed
          inside the towers framework. The effect is truly magical. The Golden
          Lighting was created by electrician and engineer Pierre Bideau in
          1985.
        </p>
        <div className="row row justify-content-center">
          <div className="col-lg-4 col-md-4 col-sm-4 col-6">
            <div className="desti-details-sm-img">
              <img
                src="assets/images/bg/destination-details1.png"
                className="img-fluid"
                alt="image"
              />
              <p>East Side</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-6">
            <div className="desti-details-sm-img">
              <img
                src="assets/images/bg/destination-details2.png"
                className="img-fluid"
                alt="image"
              />
              <p>West Side</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-6">
            <div className="desti-details-sm-img">
              <img
                src="assets/images/bg/destination-details3.png"
                className="img-fluid"
                alt="image"
              />
              <p>Eiffel Tower Night Mode</p>
            </div>
          </div>
        </div>
        <p>
          The esplanade at the base of the Eiffel Tower is dominated by four
          massive pillars, which support the entire weight of the 10,100-ton
          monument. Gustave Eiffels engineers Emile Nouguier and Maurice
          Koechlin worked on mathematical principles to ensure stability.
        </p>
      </div>
      <div className="desti-details-block">
        <h3>Good to Know :</h3>
        <h6>
          Read the basic info and also some fun facts about Eiffel Tower! Here
          you will find everything you should know about the Land of Plenty!
        </h6>
        <p>
          The esplanade at the base of the Eiffel Tower is dominated by four
          massive pillars, which support the entire weight of the 10,100-ton
          monument. Gustave Eiffels engineers Emile Nouguier and Maurice
          Koechlin worked on mathematical principles to ensure stability.
        </p>
      </div> */}
      <div className="desti-details-block">
        <h3>מיקום המלון :</h3>
        <div className="map-area">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9313600511165!2d-74.00483968418586!3d40.75208184255087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0x7fbc76e82a15a971!2sHyatt%20Place%2C%20548%20West%2037th%20Street%2C%20New%20York%2C%20NY%2010018%2C%20USA!5e0!3m2!1sen!2sbd!4v1660366711448!5m2!1sen!2sbd"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="desti-details-block">
        <h3>תרגיש בנוח לשאול אותי על המלון :</h3>
        <div className="contact-from-wrapper">
          <form>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-inner">
                  <input type="text" placeholder="השם שלך:" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-inner">
                  <input type="text" placeholder="הטלפון שלך:" />
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
                    placeholder="הודעה"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <button
                  type="submit"
                  className="eg-btn btn--primary btn--lg submit-btn"
                >
                  Send Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default DestinationLeft;