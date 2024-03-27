import React from "react";

function BlogSocialLinks() {
  return (
    <div className="blog-widget">
      <div className="sidebar-social-area">
        <h4 className="blog-widget-title">תעקבו אחרי גם פה..  </h4>
        <ul className="sidebar-social-list">
          <li>
            <a href="https://www.facebook.com/">
              <i className="bx bxl-facebook" />
            </a>
          </li>
          {/* <li>
            <a href="https://www.twitter.com/">
              <i className="bx bxl-twitter" />
            </a>
          </li> */}
          <li>
            <a href="https://www.instagram.com/">
              <i className="bx bxl-instagram" />
            </a>
          </li>
          {/* <li>
            <a href="https://www.pinterest.com/">
              <i className="bx bxl-pinterest" />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default BlogSocialLinks;