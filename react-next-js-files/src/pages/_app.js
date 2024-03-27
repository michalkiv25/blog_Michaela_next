import { useEffect } from "react";

import "react-modal-video/css/modal-video.css";
import "yet-another-react-lightbox/styles.css";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/swiper-bundle.css";
//Default Warniing Error Hide
console.log = console.warn = console.error = () => {};
function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("../../public/assets/js/bootstrap.bundle.min");
  }, []);
  
  return <Component {...pageProps} />;
}
export default MyApp;
