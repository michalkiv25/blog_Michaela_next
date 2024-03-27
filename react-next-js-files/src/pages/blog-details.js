import React,{useEffect,useState } from "react";
// import BlogDetailsAuthor from "../components/blog/BlogDetailsAuthor";
// import BlogDetailsComments from "../components/blog/BlogDetailsComments";
import BlogDetailsSingle from "../components/blog/BlogDetailsSingle";
import BlogShare from "../components/blog/BlogShare";
import BlogSocialLinks from "../components/blog/BlogSocialLinks";
// import CategoryWidget from "../components/blog/CategoryWidget";
// import PostComment from "../components/blog/PostComment";
import SearchWidget from "../components/blog/SearchWidget";
// import SideBarOfferWidget from "../components/blog/SideBarOfferWidget";
import TrandingPostWidget from "../components/blog/TrandingPostWidget";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from '../components/layout/Layout';
import { useRouter } from 'next/router';

function BlogDetailsPage() {
  const router = useRouter();
  const [region, setRegion] = useState(null);
  const [hotel,setHotel] = useState(null);

  useEffect(() => {
    if (router.query.regions || router.query.hotel) {
      const parsedRegion = JSON.parse(router.query.regions);
      setRegion(parsedRegion);
      const parsedHotel = JSON.parse(router.query.hotel);
      setHotel(parsedHotel)
    }
  }, [router.query.regions, router.query.hotel]);
  
  return (
    <Layout>
      <Breadcrumb
        pageTitle={region?.country}
        pageDetails={hotel?.nameHotel}
        backgroundImageHeder={hotel?.imageHotel}
      />
      <div className="blog-standard-section pt-120 pb-120" style={{ direction: 'rtl'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 pe-lg-3">
              <BlogDetailsSingle hotel={hotel}/>
              <BlogShare />
              {/* <BlogDetailsAuthor /> */}
              {/* <BlogDetailsComments />
              <PostComment /> */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="blog-sidebar ps-lg-4">
                <SearchWidget />
                {region?.hotels.length > 1 &&  <TrandingPostWidget regions={region} nameHotelDisplay={hotel?.nameHotel}/>}
                {/* <CategoryWidget /> */}
                <BlogSocialLinks />
                {/* <SideBarOfferWidget /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogDetailsPage;