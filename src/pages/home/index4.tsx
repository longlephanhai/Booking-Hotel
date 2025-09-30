import AboutArea from "../../components/about-area"
import BlogArea from "../../components/blog-area"
import BookingArea from "../../components/booking-area"
import BookingArea2 from "../../components/booking-area2"
import BrandArea from "../../components/brand-area"
import FeatureArea from "../../components/feature-area"
import PricingArea from "../../components/pricing-area"
import RoomArea from "../../components/room-area"
import ServiceDetails2Area from "../../components/service-details2-area"
import SliderArea from "../../components/slider-area"
import TestimonialArea from "../../components/testimonial-area"
import Logo from '../../assets/img/logo/logo.png'

const SideMenu = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-2 col-lg-3 pl-0 pr-0">
          <header className="header-slidemenu">
            <div className="logo mb-100">
              <a href="index-2.html"><img src={Logo} alt="logo" /></a>
            </div>
            <div className="main-menu slide-out">
              <nav id="mobile-menu">
                <ul>
                  <li className="has-sub">
                    <a href="index-2.html">Home</a>
                    <ul>
                      <li><a href="index-2.html">Home Page 01</a></li>
                      <li><a href="index-3.html">Home Page 02</a></li>
                      <li><a href="index-4.html">Home Page Side Menu</a></li>
                      <li><a href="index-5.html">Home Page Full Menu</a></li>
                    </ul>
                  </li>
                  <li><a href="about.html">About</a></li>
                  <li className="has-sub">
                    <a href="room.html">our rooms</a>
                    <ul>
                      <li> <a href="room.html">Our Rooms</a></li>
                      <li> <a href="single-rooms.html">Rooms Details</a></li>
                    </ul>
                  </li>
                  <li className="has-sub">
                    <a href="services.html">Facilities</a>
                    <ul>
                      <li> <a href="services.html">Services</a></li>
                      <li> <a href="single-service.html">Services Details</a></li>
                    </ul>
                  </li>
                  <li className="has-sub"><a href="#">Pages</a>
                    <ul>
                      <li><a href="projects.html">Gallery</a></li>
                      <li><a href="faq.html">Faq</a></li>
                      <li><a href="team.html">Team</a></li>
                      <li><a href="team-single.html">Team Details</a></li>
                      <li><a href="pricing.html">Pricing</a></li>
                      <li><a href="shop.html">Shop</a></li>
                      <li><a href="shop-details.html">Shop Details</a>
                      </li></ul>
                  </li>
                  <li className="has-sub">
                    <a href="blog.html">Blog</a>
                    <ul>
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="blog-details.html">Blog Details</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div className="mobile-menu" />
            <div className="footer-social">
              <a href="https://www.facebook.com/zcubetheme">FW</a>
              <a href="https://dribbble.com/mdsubhan0786">DR</a>
              <a href="https://www.behance.net/mdsubhan53726f">BE</a>
              <a href="https://pinterest.com/mdsubhan53/_saved/">PN</a>
            </div>
          </header>
        </div>
        <div className="col-xl-10 col-lg-9 pl-0 pr-0">
          <SliderArea />
          <BookingArea />
          <AboutArea />
          <ServiceDetails2Area />
          <RoomArea />
          <FeatureArea />
          <PricingArea />
          <TestimonialArea />
          <BookingArea2 />
          <BlogArea />
          <BrandArea />
        </div>
      </div>

    </div>
  )
}

export default SideMenu