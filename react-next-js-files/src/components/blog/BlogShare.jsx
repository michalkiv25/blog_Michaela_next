import Link from 'next/link'
import React from 'react'

function BlogShare() {
  return (
    <div className="blog-share-area">
    <div className="row">
      <div className="col-md-8">
        <div className="blog-tag-area">
          <h6>Tags:</h6>
          <ul className="tag-list">
            <li>
              <Link href="/blog-details">
                <a>טיולים,</a>
              </Link>
            </li>
            <li>
              <Link href="/blog-details">
                <a>חופש,</a>
              </Link>
            </li>
            <li>
              <Link href="/blog-details">
                <a>חוויות,</a>
              </Link>
            </li>
            <li>
              <Link href="/blog-details">
                <a>זיכרונות</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog-share">
          <div className="front">
            <img
              src="assets/images/icons/blog-share-icon.svg"
              alt="image"
            />
            <span>SHARE</span>
          </div>
          <div className="back">
            <ul className="share-list d-flex justify-content-end flex-row align-items-center gap-3">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="bx bxl-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <i className="bx bxl-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="bx bxl-instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/">
                  <i className="bx bxl-pinterest" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BlogShare