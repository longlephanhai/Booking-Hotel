import logo from '../../assets/img/logo/logo.png'

const Footer = () => {
  return (
    <footer className="footer-bg footer-p">
      <div className="footer-top  pt-90 pb-40" style={{ backgroundColor: '#644222', backgroundImage: 'url(img/bg/footer-bg.png)' }}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title mb-30">
                  <img src={logo} alt="img" />
                </div>
                <div className="f-contact">
                  <ul>
                    <li>
                      <i className="icon fal fa-phone" />
                      <span>1800-121-3637<br />+91-7052-101-786</span>
                    </li>
                    <li><i className="icon fal fa-envelope" />
                      <span>
                        <a href="mailto:info@example.com">info@example.com</a>
                        <br />
                        <a href="mailto:help@example.com">help@example.com</a>
                      </span>
                    </li>
                    <li>
                      <i className="icon fal fa-map-marker-check" />
                      <span>1247/Plot No. 39, 15th Phase,<br /> LHB Colony, Kanpur</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title">
                  <h2>Our Links</h2>
                </div>
                <div className="footer-link">
                  <ul>
                    <li><a href="index-2.html">Home</a></li>
                    <li><a href="about.html"> About Us</a></li>
                    <li><a href="services.html"> Services </a></li>
                    <li><a href="contact.html"> Contact Us</a></li>
                    <li><a href="blog.html">Blog </a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title">
                  <h2>Our Services</h2>
                </div>
                <div className="footer-link">
                  <ul>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Privercy</a></li>
                    <li><a href="#">Term &amp; Conditions</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title">
                  <h2>Subscribe To Our Newsletter</h2>
                </div>
                <div className="footer-link">
                  <div className="subricbe p-relative" data-animation="fadeInDown" data-delay=".4s">
                    <form action="https://htmldemo.zcubethemes.com/riorelax/news-mail.php" method="post" className="contact-form ">
                      <input type="text" id="email2" name="email2" className="header-input" placeholder="Your Email..." required />
                      <button className="btn header-btn"> <i className="fas fa-location-arrow" /> </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              Copyright © Riorelax 2022 . All rights reserved.
            </div>
            <div className="col-lg-6 col-md-6 text-right text-xl-right">
              <div className="footer-social">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer