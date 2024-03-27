import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from "react-modal-video";
function Home1Video() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="video-section mt-120" style={{ direction: 'rtl'}}>
    <div className="container">
      <div className="row justify-content-center align-items-center g-4">
        <div className="col-lg-7 col-md-10">
          <div className="video-section-content">
            <span>it is time to travel</span><img src="assets/images/icons/fly-shape1.svg" alt="image" />
            <h2>אין כמו לצבור חוויות טובות, לחוות מדינות ותרבות מגוונות, לטעום מאכלים חדשים ושונים ולהשאיר לנו זיכרון מיוחד שישאר איתנו לעד.</h2>
            <p className="para">
              היי, שמי מיכאלה נעם
              הקמתי בלוג לחופשות שלי בחול.
              כל מי שמכיר אותי יודע שחופשה זה הרגע שאני הכי מייחלת לו!
              החופשה שלי לא מתחילה ברגע שאני יוצאת מהארץ אלה היא מתחילה עוד משלב התכנון ובניית המסלול שאני כה אוהבת.
              אני אוהבת לחקור על המדינה שאני מגיעה אלייה ובונה לי מסלול בהתאם לדברים שהכי מעניינים אותי לראות ולהכיר.
              כל סובבי, משפחתי וחברי תמיד ביקשו ממני את המסלול של הטיול ורצו חופשה זהה ב-100% לשלי ולכן החלטתי לבנות בלוג המתעד הכל!

              אין כמו לצבור חוויות טובות, לחוות מדינות ותרבות מגוונות, לטעום מאכלים חדשים ושונים ולהשאיר לנו זיכרון מיוחד
              
            </p>
            {/* <Link href="/destination"><a  className="eg-btn btn--primary btn--lg">Discover More</a></Link> */}
          </div>
        </div>
        <div className="col-lg-5 col-md-10 d-flex justify-content-lg-end justify-content-center">
          <div className="video-wrapper">
            <div className="video-play">
              <a onClick={() => setOpen(true)} style={{cursor: 'pointer'}} className="popup-youtube video-icon"><i className="bx bx-play" /></a>
            </div>
            <span className="watch-video">סרטון לצפייה</span>
          </div>
        </div>
      </div>
      <React.Fragment>
        <ModalVideo
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          channel="custom"
          url="https://www.veed.io/embed/0766c276-472f-4d15-bf5a-295656458d11"
          allowFullScreen={true}
          ratio="16:9"
        />
      </React.Fragment>
    </div>
  </div>
  
  )
}

export default Home1Video