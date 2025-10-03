import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo/logo.png'

const HeaderFull = () => {
  return (
    <header className="header-area header-three">
      <div className="header-top second-header d-none d-md-block">
        <div className="container-fluid">
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
        <div className="container-fluid">
          <div className="second-menu">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <Link to="/index-2"><img src={logo} alt="logo" /></Link>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9">
                <div className="main-menu text-center">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-sub">
                        <Link to="/index-2">Home</Link>
                        <ul>
                          <li><Link to="/index-2">Home Page 01</Link></li>
                          <li><Link to="/index-3">Home Page 02</Link></li>
                          <li><Link to="/index-4">Home Page Side Menu</Link></li>
                          <li><Link to="/index-5">Home Page Full Menu</Link></li>
                        </ul>
                      </li>
                      <li><Link to="/about">About</Link></li>
                      <li className="has-sub">
                        <Link to="/room">our rooms</Link>
                        <ul>
                          <li> <Link to="/room">Our Rooms</Link></li>
                          <li> <Link to="/room-detail">Rooms Details</Link></li>
                        </ul>
                      </li>
                      <li className="has-sub">
                        <Link to="/services">Facilities</Link>
                        <ul>
                          <li> <Link to="/services">Services</Link></li>
                          <li> <Link to="/service-detail">Services Details</Link></li>
                        </ul>
                      </li>
                      <li className="has-sub"><Link to="#">Pages</Link>
                        <ul>
                          <li><Link to="/projects">Gallery</Link></li>
                          <li><Link to="/faq">Faq</Link></li>
                          <li><Link to="/team">Team</Link></li>
                          <li><Link to="/team-detail">Team Details</Link></li>
                          <li><Link to="/pricing">Pricing</Link></li>
                          <li><Link to="/shop">Shop</Link></li>
                          <li><Link to="/shop-details">Shop Details</Link>
                          </li></ul>
                      </li>
                      <li className="has-sub">
                        <Link to="/blog">Blog</Link>
                        <ul>
                          <li><Link to="/blog">Blog</Link></li>
                          <li><Link to="/blog-details">Blog Details</Link></li>
                        </ul>
                      </li>
                      <li><Link to="/contact">Contact</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-1 col-lg-1 d-none d-lg-block text-right">
                <div className="search-top">
                  <ul>
                    <li><div className="bar-humburger"><Link to="#" className="menu-tigger"><i className="fal fa-bars" /></Link></div></li>
                  </ul>
                </div>
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

export default HeaderFull;