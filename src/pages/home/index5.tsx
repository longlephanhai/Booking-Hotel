import AboutArea from "../../components/about-area"
import AboutArea5 from "../../components/about-area/index5"
import BlogArea from "../../components/blog-area"
import BookingArea from "../../components/booking-area"
import BookingArea2 from "../../components/booking-area2"
import BrandArea from "../../components/brand-area"
import FeatureArea from "../../components/feature-area"
import Footer from "../../components/footer"
import HeaderFull from "../../components/header/header.full"
import OffCanvasMenu from "../../components/offcanvas-menu"
import PricingArea from "../../components/pricing-area"
import RoomArea from "../../components/room-area"
import ServiceDetails2Area from "../../components/service-details2-area"

import SliderArea from "../../components/slider-area"
import TestimonialArea from "../../components/testimonial-area"

const HomePageFullMenu = () => {
  return (
    <>
      <HeaderFull />
      <OffCanvasMenu />
      <SliderArea />
      <BookingArea />
      <RoomArea />
      <FeatureArea />
      <AboutArea5 />
      <ServiceDetails2Area />
      <PricingArea />
      <TestimonialArea />
      <BookingArea2 />
      <BlogArea />
      <BrandArea />
      <Footer />
    </>
  )
}

export default HomePageFullMenu