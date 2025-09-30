import anImg06 from '../../assets/img/bg/an-img-06.png'
import innerb1 from '../../assets/img/blog/inner_b1.jpg'
import innerb2 from '../../assets/img/blog/inner_b2.jpg'
import innerb3 from '../../assets/img/blog/inner_b3.jpg'
const BlogArea = () => {
  return (
    <section id="blog" className="blog-area p-relative fix pt-90 pb-90">
      <div className="animations-02"><img src={anImg06} alt="contact-bg-an-05" /></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
              <h5>Our Blog</h5>
              <h2>
                Latest Blog &amp; News
              </h2>
              <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
              <div className="blog-thumb2">
                <a href="blog-details.html"><img src={innerb1} alt="img" /></a>
              </div>
              <div className="blog-content2">
                <div className="date-home">
                  24th March 2022
                </div>
                <h4><a href="blog-details.html">Cras accumsan nulla nec lacus ultricies placerat.</a></h4>
                <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                <div className="blog-btn"><a href="blog-details.html">Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
              <div className="blog-thumb2">
                <a href="blog-details.html"><img src={innerb2} alt="img" /></a>
              </div>
              <div className="blog-content2">
                <div className="date-home">
                  24th March 2022
                </div>
                <h4><a href="blog-details.html">Dras accumsan nulla nec lacus ultricies placerat.</a></h4>
                <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                <div className="blog-btn"><a href="blog-details.html">Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
              <div className="blog-thumb2">
                <a href="blog-details.html"><img src={innerb3} alt="img" /></a>
              </div>
              <div className="blog-content2">
                <div className="date-home">
                  24th March 2022
                </div>
                <h4><a href="blog-details.html">Seas accumsan nulla nec lacus ultricies placerat.</a></h4>
                <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                <div className="blog-btn"><a href="blog-details.html">Read More</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default BlogArea