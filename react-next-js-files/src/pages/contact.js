import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import ContactForm from "../components/contact/ContactForm";
import InfoSection from "../components/contact/InfoSection";
import Layout from "../components/layout/Layout";

function Contact() {
  return (
    <Layout>
      <Breadcrumb
        pageTitle="שאל שאלות"
        pageDetails="יצירת קשר"
        backgroundImageHeder="https://ik.imagekit.io/myBlog/%D7%98%D7%95%D7%A7%D7%99%D7%95_%D7%99%D7%A4%D7%9F/DSC05302.JPG?updatedAt=1680971948776"
      />
      <InfoSection />
      <ContactForm />
    </Layout>
  );
}

export default Contact;