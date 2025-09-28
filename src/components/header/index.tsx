import logo from '../../assets/img/logo/logo.png'


const Header = () => {
  return (
    <header className="header-area header-three">
      <div className="header-top second-header d-none d-md-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10 col-md-10 d-none d-lg-block">
              <div className="header-cta">
                <ul>
                  <li>
                    <i className="far fa-clock" />
                    <span>Mon - Fri: 9:00 - 19:00/ Closed on Weekends</span>
                  </li>
                  <li>
                    <i className="far fa-mobile" />
                    <strong>+91 705 210-1786</strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 d-none d-lg-block text-right">
              <div className="header-social">
                <span>
                  <a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a>
                  <a href="#" title="LinkedIn"><i className="fab fa-instagram" /></a>
                  <a href="#" title="Twitter"><i className="fab fa-twitter" /></a>
                  <a href="#" title="Twitter"><i className="fab fa-youtube" /></a>
                </span>
                {/*  /social media icon redux */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="header-sticky" className="menu-area">
        <div className="container">
          <div className="second-menu">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <a href="index-2.html"><img src={logo} alt="logo" /></a>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="main-menu text-center">
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
              </div>
              <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                <a href="contact.html" className="top-btn mt-10 mb-10">reservation </a>
              </div>
              <div className="col-12">
                <div className="mobile-menu" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header