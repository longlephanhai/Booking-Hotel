import BreadcrumbArea from "../../components/breadcrumb-area"
import ContactComponent from "../../components/contact/contact"
import NewsLaterArea from "../../components/newslater-area"

const ContactPage = () => {
  return (
    <>
      <BreadcrumbArea title="Contact Us" tag="About" />
      <ContactComponent />
      <NewsLaterArea />
    </>
  )
}

export default ContactPage