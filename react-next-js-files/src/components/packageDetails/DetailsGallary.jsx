import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

function DetailsGallary({ galleryImages }) {
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [allSlides, setAllSlides] = useState([]);

  const numPerPage = 3; // כמות התמונות בכל עמוד

  useEffect(() => {
    const numPages = Math.ceil(galleryImages?.length / numPerPage);
    const slides = [];
    for (let i = 0; i < numPages; i++) {
      slides.push(galleryImages?.slice(i * numPerPage, (i + 1) * numPerPage));
    }
    setAllSlides(slides);
  }, [galleryImages, numPerPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage < allSlides.length ? prevPage + 1 : prevPage));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <div className="tab-pane fade" id="v-pills-gallery" role="tabpanel" aria-labelledby="v-pills-gallery-tab">
      <div className="tour-gallery-wrap">
        <div className="tour-plan">
          <h3>תמונות</h3>
        </div>
        <div className="row g-4 justify-content-center">
          {allSlides[currentPage - 1]?.map((image, index) => (
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-6" key={index}>
              <div className="tour-gallery">
                <img
                  src={image}
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenimg({ openingState: true, openingIndex: (currentPage - 1) * numPerPage + index })}
                  className="img-fluid"
                  alt={`Image ${index}`}
                />
              </div>
            </div>
          ))}
        </div>
        <Lightbox
          className="img-fluid"
          open={isOpenimg.openingState}
          plugins={[Fullscreen]}
          index={isOpenimg.openingIndex}
          close={() => setOpenimg((prevState) => ({ ...prevState, openingState: false }))}
          styles={{
            container: {
              backgroundColor: "rgba(0, 0, 0, .9)",
              cursor: "pointer",
            },
          }}
          slides={galleryImages?.map((image, index) => ({ src: image, key: index }))}
        />
      </div>
      {galleryImages?.length >1 && numPerPage > 1 &&
       <nav className="pagination-wrap pt-50">
       <ul className="pagination d-flex justify-content-center gap-md-3 gap-2">
         <li className="page-item">
           <button className="page-link" onClick={prevPage} disabled={currentPage === 1}>
             <i className="bi bi-arrow-right" /> קדימה
           </button>
         </li>
         {Array.from({ length: allSlides.length }, (_, i) => i + 1).map((page) => (
           <li className={`page-item ${page === currentPage ? "active" : ""}`} key={page}>
             <button className="page-link" onClick={() => setCurrentPage(page)}>
               {page < 10 ? `0${page}` : page}
             </button>
           </li>
         ))}
         <li className="page-item">
           <button className="page-link" onClick={nextPage} disabled={currentPage === allSlides.length}>
             אחורה <i className="bi bi-arrow-left" />
           </button>
         </li>
       </ul>
     </nav>
      }
     
    </div>
  );
}

export default DetailsGallary;