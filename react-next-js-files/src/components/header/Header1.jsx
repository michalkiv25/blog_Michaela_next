import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useState } from "react";
// import Topbar from "../common/Topbar";
/---------Using reducer mange the active or inactive menu----------/
const initialState = { activeMenu: "" };

function reducer(state, action) {
  switch (action.type) {
    case "home":
      return { activeMenu: "home" };
    case "destination":
      return { activeMenu: "destination" };
    case "tour":
      return { activeMenu: "tour" };
    case "pages":
      return { activeMenu: "pages" };
    case "blog":
      return { activeMenu: "blog" };
    case "childmenu":
      return { activeMenu: "childmenu" };
    default:
      return { activeMenu: "" };
  }
}

function Header1() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();
  const [showMobileMenu, setMobileMenu] = useState(false);
  const [showsubMenu, setsubMenu] = useState(false);
  const currentRoute = router.pathname;
  useEffect(() => {
    window.addEventListener("scroll", handleStickyHeader);
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });
  // sticky header function
  const handleStickyHeader = () => {
    const header = document.querySelector("header");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("sticky")
      : header.classList
      ? header.classList.remove("sticky")
      : header.classList.add("sticky");
  };
  const handleSubMenu = () => {
    if (showsubMenu === false || showsubMenu === 0) {
      setsubMenu(1);
    } else {
      setsubMenu(false);
    }
  };
  // sidebar menu hnadle function
  const handleMobileMenu = () => {
    if (showMobileMenu === false || showMobileMenu === 0) {
      setMobileMenu(1);
    } else {
      setMobileMenu(false);
    }
  };
  return (
    <>
    
      <header className="header-area style-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="header-logo">
            <Link href="/">
              <a>
                {/* <img
                  alt="image"
                  className="img-fluid"
                  src="assets/images/icons/header2-logo.svg"
                /> */}
              </a>
            </Link>
          </div>
          <div className={showMobileMenu ? "main-nav show-menu " : "main-nav"}>
            <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
              <div className="mobile-logo-wrap ">
                <Link href="/">
                  <a>
                    <img
                      alt="image"
                      src="assets/images/icons/header2-logo.svg"
                    />
                  </a>
                </Link>
              </div>
              <div className="menu-close-btn" onClick={handleMobileMenu}>
                <i className="bi bi-x-lg text-dark" />
              </div>
            </div>
            <ul className="menu-list">
              <li className="menu-item-has-children">
                <Link href="/">
                  <a className="drop-down">דף הבית</a>
                </Link>
                <i
                  // className={
                  //   state.activeMenu === "home"
                  //     ? "bi bi-chevron-up dropdown-icon"
                  //     : "bi bi-chevron-down dropdown-icon"
                  // }
                  onClick={() => dispatch({ type: "home" })}
                />
                {/* <ul
                  className={
                    state.activeMenu === "home"
                      ? "sub-menu d-block"
                      : "sub-menu d-none"
                  }
                >
                  <li>
                    <Link href="/">
                      <a>Travel Agency 01</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-travel2">
                      <a>Travel Agency 02</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-city-tour">
                      <a>City Tour</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-adventure">
                      <a>Adventure</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-wildlife">
                      <a>Wild life</a>
                    </Link>
                  </li>
                </ul> */}
              </li>
              <li className="menu-item-has-children">
                  <a
                    className={
                      currentRoute === "/destination" ||
                      currentRoute === "/destination-details"
                        ? "drop-down active"
                        : "drop-down disabled"
                    }
                  >
                    יעדים בעולם
                  </a>
                <i
                  className={
                    state.activeMenu === "destination"
                      ? "bi bi-chevron-up dropdown-icon"
                      : "bi bi-chevron-down dropdown-icon"
                  }
                  onClick={() => dispatch({ type: "destination" })}
                />
                <ul
                  className={
                    state.activeMenu === "destination"
                      ? "sub-menu d-block"
                      : " d-none sub-menu"
                  }
                >
                  <li>
                    <Link href="/blog-grid">
                      <a>טיולים אקזוטיים</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/destination">
                      <a>טיולים עירוניים</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tour-package">
                      <a>טיולים משפחתיים</a>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="menu-item-has-children">
                <Link href="#">
                  <a
                    className={
                      currentRoute === "/tour-package" ||
                      currentRoute === "/tour-package2" ||
                      currentRoute === "/tour-package-sidebar" ||
                      currentRoute === "/tour-package-details"
                        ? "drop-down active"
                        : "drop-down disabled"
                    }
                  >
                    Tours
                  </a>
                </Link>
                <i
                  className={
                    state.activeMenu === "tour"
                      ? "bi bi-chevron-up dropdown-icon"
                      : "bi bi-chevron-down dropdown-icon"
                  }
                  onClick={() => dispatch({ type: "tour" })}
                />
                <ul
                  className={
                    state.activeMenu === "tour"
                      ? "sub-menu d-block"
                      : "sub-menu d-none"
                  }
                >
                  <li>
                    <Link href="/tour-package">
                      <a>Tour Package 1</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tour-package2">
                      <a>Tour Package 2</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tour-package-sidebar">
                      <a>Package Sidebar</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tour-package-details">
                      <a>Package Details</a>
                    </Link>
                  </li>
                </ul>
              </li> */}
              {/* <li className="menu-item-has-children">
                <Link href="#">
                  <a
                    className={
                      currentRoute === "about" ||
                      currentRoute === "/tour-guide" ||
                      currentRoute === "/gallery" ||
                      currentRoute === "faq" ||
                      currentRoute === "/error"
                        ? "drop-down active "
                        : "drop-down disabled"
                    }
                  >
                    Pages
                  </a>
                </Link>
                <i
                  className={
                    state.activeMenu === "pages"
                      ? "bi bi-chevron-up dropdown-icon"
                      : "bi bi-chevron-down dropdown-icon"
                  }
                  onClick={() => dispatch({ type: "pages" })}
                />
                <ul
                  className={
                    state.activeMenu === "pages"
                      ? "sub-menu d-block"
                      : "sub-menu d-none"
                  }
                >
                  <li>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tour-guide">
                      <a>Tour Guide</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery">
                      <a>Gallery</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>Faq</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/error">
                      <a>Error</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Submenu</a>
                    </Link>
                    <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                    <i
                      className={
                        showsubMenu
                          ? "d-lg-none d-flex bi dropdown-icon bi-chevron-up"
                          : "d-lg-none d-flex bi dropdown-icon bi-chevron-down"
                      }
                      onClick={handleSubMenu}
                    />
                    <ul
                      className={
                        showsubMenu
                          ? "sub-menu d-block"
                          : "sub-menu d-none"
                      }
                    >
                      <li>
                        <Link href="/about">
                          <a>Children 1</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/team">
                          <a>Children 2</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/faq">
                          <a>Children 3</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/error">
                          <a>Children 4</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li> */}
              {/* <li className="menu-item-has-children">
                <Link href="/blog-grid">
                  <a
                    className={
                      currentRoute === "/blog-grid" ||
                      currentRoute === "/blog-standard" ||
                      currentRoute === "/blog-details"
                        ? "drop-down active "
                        : "drop-down disabled"
                    }
                  >
                    Blog
                  </a>
                </Link>
                <i
                  className={
                    state.activeMenu === "blog"
                      ? "bi bi-chevron-up dropdown-icon"
                      : "bi bi-chevron-down dropdown-icon"
                  }
                  onClick={() => dispatch({ type: "blog" })}
                />
                <ul
                  className={
                    state.activeMenu === "blog"
                      ? "sub-menu d-block"
                      : "sub-menu"
                  }
                >
                  <li>
                    <Link href="/blog-grid">
                      <a>Blog Grid</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-standard">
                      <a>Blog Standard</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-details">
                      <a>Blog Details</a>
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link href="/contact">
                  <a
                    className={
                      currentRoute === "/contact" ? "active" : "disabled"
                    }
                  >
                    צור קשר
                  </a>
                </Link>
              </li>
            </ul>
            {/* mobile-search-area */}
            <div className="phone-call sibling2 d-flex justify-content-start align-items-center flex-row d-lg-none d-block mt-5">
              <div className="icon">
                <svg
                  width={36}
                  height={36}
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M28.4525 22.3006C27.7155 21.5332 26.8265 21.1229 25.8844 21.1229C24.9498 21.1229 24.0532 21.5256 23.2858 22.293L20.8848 24.6864C20.6873 24.58 20.4898 24.4813 20.2998 24.3825C20.0263 24.2457 19.7679 24.1166 19.5476 23.9798C17.2986 22.5514 15.2547 20.6898 13.2944 18.2813C12.3446 17.0808 11.7064 16.0702 11.2429 15.0445C11.866 14.4746 12.4434 13.882 13.0057 13.3121C13.2184 13.0994 13.4312 12.879 13.6439 12.6663C15.2395 11.0707 15.2395 9.00404 13.6439 7.40845L11.5696 5.33419C11.3341 5.09865 11.091 4.85551 10.863 4.61237C10.4071 4.14129 9.92847 3.65502 9.4346 3.19913C8.69759 2.46972 7.81621 2.08222 6.88925 2.08222C5.96229 2.08222 5.06572 2.46972 4.30592 3.19913C4.29832 3.20673 4.29832 3.20673 4.29072 3.21433L1.70738 5.82046C0.734835 6.79301 0.180177 7.97831 0.0586086 9.35355C-0.123745 11.5722 0.529687 13.6389 1.03116 14.9913C2.26204 18.3116 4.10077 21.3889 6.84366 24.6864C10.1716 28.6602 14.1758 31.7982 18.7498 34.0092C20.4974 34.8374 22.83 35.8176 25.4361 35.9847C25.5956 35.9923 25.7628 35.9999 25.9148 35.9999C27.6699 35.9999 29.1439 35.3693 30.2988 34.1156C30.3064 34.1004 30.3216 34.0928 30.3292 34.0776C30.7243 33.5989 31.1802 33.1658 31.6589 32.7024C31.9856 32.3908 32.3199 32.0641 32.6466 31.7222C33.3988 30.9396 33.7939 30.0278 33.7939 29.0933C33.7939 28.1511 33.3912 27.247 32.6238 26.4871L28.4525 22.3006ZM31.1726 30.3014C31.165 30.3014 31.165 30.309 31.1726 30.3014C30.8763 30.6205 30.5724 30.9092 30.2456 31.2283C29.7518 31.6994 29.2503 32.1933 28.7792 32.7479C28.0118 33.5685 27.1077 33.956 25.9224 33.956C25.8084 33.956 25.6868 33.956 25.5728 33.9484C23.3162 33.8041 21.2192 32.9227 19.6464 32.1705C15.3459 30.0886 11.5696 27.133 8.43165 23.3871C5.84072 20.2643 4.10837 17.3771 2.96106 14.2771C2.25444 12.3852 1.99611 10.9112 2.11008 9.52071C2.18606 8.63174 2.52797 7.89473 3.15861 7.26409L5.74954 4.67316C6.12185 4.32365 6.51695 4.13369 6.90445 4.13369C7.38312 4.13369 7.77063 4.42242 8.01376 4.66556C8.02136 4.67316 8.02896 4.68075 8.03656 4.68835C8.50004 5.12144 8.94072 5.56973 9.4042 6.0484C9.63974 6.29154 9.88288 6.53468 10.126 6.78541L12.2003 8.85968C13.0057 9.66507 13.0057 10.4097 12.2003 11.2151C11.9799 11.4354 11.7672 11.6558 11.5469 11.8685C10.9086 12.5219 10.3008 13.1298 9.63974 13.7224C9.62455 13.7376 9.60935 13.7452 9.60175 13.7604C8.94832 14.4139 9.06989 15.0521 9.20666 15.4852C9.21425 15.508 9.22185 15.5308 9.22945 15.5536C9.76891 16.8604 10.5287 18.0913 11.6836 19.5577L11.6912 19.5653C13.7883 22.1487 15.9993 24.1621 18.4383 25.7045C18.7498 25.9021 19.0689 26.0617 19.3728 26.2136C19.6464 26.3504 19.9047 26.4795 20.125 26.6163C20.1554 26.6315 20.1858 26.6543 20.2162 26.6695C20.4746 26.7987 20.7177 26.8595 20.9684 26.8595C21.5991 26.8595 21.9942 26.4644 22.1233 26.3352L24.7219 23.7367C24.9802 23.4783 25.3905 23.1668 25.8692 23.1668C26.3402 23.1668 26.7277 23.4631 26.9633 23.7215C26.9709 23.7291 26.9709 23.7291 26.9785 23.7367L31.165 27.9232C31.9476 28.6982 31.9476 29.496 31.1726 30.3014Z" />
                  <path d="M19.4556 8.56378C21.4463 8.8981 23.2547 9.84025 24.6983 11.2839C26.1419 12.7275 27.0765 14.5358 27.4184 16.5265C27.502 17.028 27.9351 17.3775 28.4289 17.3775C28.4897 17.3775 28.5429 17.3699 28.6037 17.3623C29.1659 17.2711 29.5382 16.7393 29.4471 16.177C29.0368 13.7684 27.8971 11.5726 26.1571 9.83266C24.4172 8.0927 22.2213 6.953 19.8127 6.5427C19.2505 6.45152 18.7262 6.82383 18.6275 7.37849C18.5287 7.93314 18.8934 8.47261 19.4556 8.56378Z" />
                  <path d="M35.9595 15.8804C35.2832 11.9142 33.4141 8.30511 30.5421 5.43304C27.67 2.56098 24.0609 0.691864 20.0947 0.0156379C19.5401 -0.0831367 19.0158 0.296766 18.917 0.851423C18.8259 1.41368 19.1982 1.93794 19.7604 2.03672C23.3011 2.63696 26.5303 4.31613 29.0984 6.87667C31.6666 9.44481 33.3381 12.674 33.9384 16.2147C34.022 16.7161 34.455 17.0657 34.9489 17.0657C35.0097 17.0657 35.0629 17.0581 35.1237 17.0505C35.6783 16.9669 36.0582 16.435 35.9595 15.8804Z" />
                </svg>
              </div>
              <div className="number">
                <span>Call Now</span>
                <h5>
                  <a href="tel:+972542055284">+972 20 55 284</a>
                </h5>
              </div>
            </div>
            {/* <Link href="/tour-package-details">
              <a className="eg-btn btn--primary btn--lg d-lg-none d-flex mt-5">
                Book A Trip
              </a>
            </Link> */}
          </div>
          <div className="nav-right d-flex jsutify-content-end align-items-center gap-5">
            <div className="phone-call sibling2 justify-content-start align-items-center flex-row d-xl-flex d-none">
              <div className="icon">
                <svg
                  width={36}
                  height={36}
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M28.4525 22.3006C27.7155 21.5332 26.8265 21.1229 25.8844 21.1229C24.9498 21.1229 24.0532 21.5256 23.2858 22.293L20.8848 24.6864C20.6873 24.58 20.4898 24.4813 20.2998 24.3825C20.0263 24.2457 19.7679 24.1166 19.5476 23.9798C17.2986 22.5514 15.2547 20.6898 13.2944 18.2813C12.3446 17.0808 11.7064 16.0702 11.2429 15.0445C11.866 14.4746 12.4434 13.882 13.0057 13.3121C13.2184 13.0994 13.4312 12.879 13.6439 12.6663C15.2395 11.0707 15.2395 9.00404 13.6439 7.40845L11.5696 5.33419C11.3341 5.09865 11.091 4.85551 10.863 4.61237C10.4071 4.14129 9.92847 3.65502 9.4346 3.19913C8.69759 2.46972 7.81621 2.08222 6.88925 2.08222C5.96229 2.08222 5.06572 2.46972 4.30592 3.19913C4.29832 3.20673 4.29832 3.20673 4.29072 3.21433L1.70738 5.82046C0.734835 6.79301 0.180177 7.97831 0.0586086 9.35355C-0.123745 11.5722 0.529687 13.6389 1.03116 14.9913C2.26204 18.3116 4.10077 21.3889 6.84366 24.6864C10.1716 28.6602 14.1758 31.7982 18.7498 34.0092C20.4974 34.8374 22.83 35.8176 25.4361 35.9847C25.5956 35.9923 25.7628 35.9999 25.9148 35.9999C27.6699 35.9999 29.1439 35.3693 30.2988 34.1156C30.3064 34.1004 30.3216 34.0928 30.3292 34.0776C30.7243 33.5989 31.1802 33.1658 31.6589 32.7024C31.9856 32.3908 32.3199 32.0641 32.6466 31.7222C33.3988 30.9396 33.7939 30.0278 33.7939 29.0933C33.7939 28.1511 33.3912 27.247 32.6238 26.4871L28.4525 22.3006ZM31.1726 30.3014C31.165 30.3014 31.165 30.309 31.1726 30.3014C30.8763 30.6205 30.5724 30.9092 30.2456 31.2283C29.7518 31.6994 29.2503 32.1933 28.7792 32.7479C28.0118 33.5685 27.1077 33.956 25.9224 33.956C25.8084 33.956 25.6868 33.956 25.5728 33.9484C23.3162 33.8041 21.2192 32.9227 19.6464 32.1705C15.3459 30.0886 11.5696 27.133 8.43165 23.3871C5.84072 20.2643 4.10837 17.3771 2.96106 14.2771C2.25444 12.3852 1.99611 10.9112 2.11008 9.52071C2.18606 8.63174 2.52797 7.89473 3.15861 7.26409L5.74954 4.67316C6.12185 4.32365 6.51695 4.13369 6.90445 4.13369C7.38312 4.13369 7.77063 4.42242 8.01376 4.66556C8.02136 4.67316 8.02896 4.68075 8.03656 4.68835C8.50004 5.12144 8.94072 5.56973 9.4042 6.0484C9.63974 6.29154 9.88288 6.53468 10.126 6.78541L12.2003 8.85968C13.0057 9.66507 13.0057 10.4097 12.2003 11.2151C11.9799 11.4354 11.7672 11.6558 11.5469 11.8685C10.9086 12.5219 10.3008 13.1298 9.63974 13.7224C9.62455 13.7376 9.60935 13.7452 9.60175 13.7604C8.94832 14.4139 9.06989 15.0521 9.20666 15.4852C9.21425 15.508 9.22185 15.5308 9.22945 15.5536C9.76891 16.8604 10.5287 18.0913 11.6836 19.5577L11.6912 19.5653C13.7883 22.1487 15.9993 24.1621 18.4383 25.7045C18.7498 25.9021 19.0689 26.0617 19.3728 26.2136C19.6464 26.3504 19.9047 26.4795 20.125 26.6163C20.1554 26.6315 20.1858 26.6543 20.2162 26.6695C20.4746 26.7987 20.7177 26.8595 20.9684 26.8595C21.5991 26.8595 21.9942 26.4644 22.1233 26.3352L24.7219 23.7367C24.9802 23.4783 25.3905 23.1668 25.8692 23.1668C26.3402 23.1668 26.7277 23.4631 26.9633 23.7215C26.9709 23.7291 26.9709 23.7291 26.9785 23.7367L31.165 27.9232C31.9476 28.6982 31.9476 29.496 31.1726 30.3014Z" />
                  <path d="M19.4556 8.56378C21.4463 8.8981 23.2547 9.84025 24.6983 11.2839C26.1419 12.7275 27.0765 14.5358 27.4184 16.5265C27.502 17.028 27.9351 17.3775 28.4289 17.3775C28.4897 17.3775 28.5429 17.3699 28.6037 17.3623C29.1659 17.2711 29.5382 16.7393 29.4471 16.177C29.0368 13.7684 27.8971 11.5726 26.1571 9.83266C24.4172 8.0927 22.2213 6.953 19.8127 6.5427C19.2505 6.45152 18.7262 6.82383 18.6275 7.37849C18.5287 7.93314 18.8934 8.47261 19.4556 8.56378Z" />
                  <path d="M35.9595 15.8804C35.2832 11.9142 33.4141 8.30511 30.5421 5.43304C27.67 2.56098 24.0609 0.691864 20.0947 0.0156379C19.5401 -0.0831367 19.0158 0.296766 18.917 0.851423C18.8259 1.41368 19.1982 1.93794 19.7604 2.03672C23.3011 2.63696 26.5303 4.31613 29.0984 6.87667C31.6666 9.44481 33.3381 12.674 33.9384 16.2147C34.022 16.7161 34.455 17.0657 34.9489 17.0657C35.0097 17.0657 35.0629 17.0581 35.1237 17.0505C35.6783 16.9669 36.0582 16.435 35.9595 15.8804Z" />
                </svg>
              </div>
              <div className="number">
                <span>Call Now</span>
                <h5>
                  <a href="tel:+972542055284">+972 20 55 284</a>
                </h5>
              </div>
            </div>
            <div
              className="mobile-menu-btn d-lg-none d-block"
              onClick={handleMobileMenu}
            >
              <i className="bi bi-list text-dark" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header1;