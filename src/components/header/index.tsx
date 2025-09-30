import { Link } from 'react-router-dom'
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
                  <Link to="#" title="Facebook"><i className="fab fa-facebook-f" /></Link>
                  <Link to="#" title="LinkedIn"><i className="fab fa-instagram" /></Link>
                  <Link to="#" title="Twitter"><i className="fab fa-twitter" /></Link>
                  <Link to="#" title="Twitter"><i className="fab fa-youtube" /></Link>
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
                  <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="main-menu text-center">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-sub">
                        <Link to="/">Home</Link>
                        <ul>
                          <li><Link to="/home-2">Home Page 01</Link></li>
                          <li><Link to="/home-3">Home Page 02</Link></li>
                          <li><Link to="/side-menu">Home Page Side Menu</Link></li>
                          <li><Link to="/">Home Page Full Menu</Link></li>
                        </ul>
                      </li>
                      <li><Link to="about">About</Link></li>
                      <li className="has-sub">
                        <Link to="room.html">our rooms</Link>
                        <ul>
                          <li> <Link to="room.html">Our Rooms</Link></li>
                          <li> <Link to="single-rooms.html">Rooms Details</Link></li>
                        </ul>
                      </li>
                      <li className="has-sub">
                        <Link to="services.html">Facilities</Link>
                        <ul>
                          <li> <Link to="services.html">Services</Link></li>
                          <li> <Link to="single-service.html">Services Details</Link></li>
                        </ul>
                      </li>
                      <li className="has-sub"><Link to="#">Pages</Link>
                        <ul>
                          <li><Link to="projects.html">Gallery</Link></li>
                          <li><Link to="faq.html">Faq</Link></li>
                          <li><Link to="team.html">Team</Link></li>
                          <li><Link to="team-single.html">Team Details</Link></li>
                          <li><Link to="pricing.html">Pricing</Link></li>
                          <li><Link to="shop.html">Shop</Link></li>
                          <li><Link to="shop-details.html">Shop Details</Link></li>
                        </ul>
                      </li>
                      <li className="has-sub">
                        <Link to="blog">Blog</Link>
                        <ul>
                          <li><Link to="blog">Blog</Link></li>
                          <li><Link to="blog-details">Blog Details</Link></li>
                        </ul>
                      </li>
                      <li><Link to="contact">Contact</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                <Link to="contact.html" className="top-btn mt-10 mb-10">reservation </Link>
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