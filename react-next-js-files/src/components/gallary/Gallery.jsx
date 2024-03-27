import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
function VideoGallery({videoGallery}) {
  const [isOpen, setOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);

  const openModal = (index) => {
    setCurrentVideoIndex(index);
    setOpen(true);
  };

  return (
    <div className="tab-pane destination-section pb-120 fade"
    id="v-pills-video" role="tabpanel" aria-labelledby="v-pills-video-tab"
    >
      <div className="tour-plan">
        <h3>סרטונים</h3>
        {!videoGallery && <div> אין סרטונים להצגה</div>}
        <div className="text-center">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade active show"
              id="v-pills-video"
              role="tabpanel"
              aria-labelledby="v-pills-video-tab"
            >
              <div className="row justify-content-center g-4">
                {videoGallery?.map((dataVideo, index) => (
                    <div className="col-lg-4 col-md-4 col-sm-4" key={index}>
                        <div className="video-gallery-single position-relative">
                            <div className="video-play sibling-4">
                                <div
                                    onClick={() => openModal(index)}                                
                                    style={{ cursor: "pointer" }}
                                    className="popup-youtube video-icon"
                                >
                                    <i className="bx bx-play" />
                                </div>
                            </div>
                            <img
                                src={dataVideo?.videoImage}
                                className="img-fluid"
                                alt="image"
                            />
                        </div>
                    </div>
                ))}
                <ModalVideo
                    channel="custom"
                    isOpen={isOpen}
                    url={currentVideoIndex !== null ? videoGallery[currentVideoIndex]?.video : ''}
                    onClose={() => setOpen(false)}
                    allowFullScreen={true}
                    // ratio="16:9"
                />
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoGallery;