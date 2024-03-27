import Link from 'next/link'
import React from 'react'
import category from '../../data/category.json'

function Home1Category() {
  return (
    <div className="category-section pt-120 pb-120" style={{ direction: 'rtl'}}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-8 col-lg-10 col-md-12 text-center">
        <div className="section-title1">
          <span>טיולים לפי קטוגוריה</span>
          <h2>הטיולים הפופולריים שלנו לפי סוג</h2>
          <img src="assets/images/icons/section-title-vector.svg" className="img-fluid" alt="image" />
        </div>
      </div>
    </div>
    <div className="row row-cols-xl-6 row-cols-lg-4 row-cols-md-4 row-cols-sm-3 row-cols-2 justify-content-center g-xxl-5 g-4">
      {category?.map((item,i)=> (
            <div key={i} className="col">
            <div className="category-single1">
              <div className="icon">
                <img src={item.logoImage} alt="image" />    
              </div>
              <div className="content">
                <h4><Link href={item.href}><a>{item?.category}</a></Link></h4>
              </div>
            </div>
          </div>
      ))}

    </div>
  </div>
</div>

  )
}

export default Home1Category