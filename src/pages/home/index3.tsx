import AboutArea from "../../components/about-area"
import BlogArea from "../../components/blog-area"
import BookingArea2 from "../../components/booking-area2"
import BrandArea from "../../components/brand-area"
import FeatureArea from "../../components/feature-area"
import PricingArea from "../../components/pricing-area"
import RoomArea from "../../components/room-area"
import ServiceDetails2Area from "../../components/service-details2-area"
import SliderAreaHomePage3 from "../../components/slider-area-homepage-3"
import TestimonialArea from "../../components/testimonial-area"

const HomePage3 = () => {
  return (
    <>
      <SliderAreaHomePage3 />
      <AboutArea />
      <ServiceDetails2Area />
      <RoomArea />
      <FeatureArea />
      <PricingArea />
      <TestimonialArea />
      <BookingArea2 />
      <BlogArea />
      <BrandArea />
    </>
  )
}

export default HomePage3