import { useEffect } from "react";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import innerb1 from '../../assets/img/blog/inner_b1.jpg';
import innerb2 from '../../assets/img/blog/inner_b2.jpg';
import innerb3 from '../../assets/img/blog/inner_b3.jpg';

const InnerBlog = () => {
  useEffect(() => {
    const $blog = $(".blog-active");

    $blog.slick({
      dots: false,
      infinite: true,
      arrows: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
    });

    // Cleanup khi component unmount
    return () => {
      if ($blog.hasClass('slick-initialized')) {
        $blog.slick('unslick');
      }
    };
  }, []);

  const slides = [innerb3, innerb2, innerb1];

  return (
    <section className="inner-blog pt-120 pb-105">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* Bài viết bình thường */}
            <div className="bsingle__post mb-50">
              <div className="bsingle__post-thumb">
                <img src={innerb1} alt="" />
              </div>
              <div className="bsingle__content">
                <div className="date-home">24th March 2022</div>
                <h2>
                  <a href="blog-details.html">Lorem ipsum dolor sit amet, consectetur cing elit...</a>
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <div className="blog__btn">
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>

            {/* Bài viết có slider ảnh */}
            <div className="bsingle__post mb-50">
              <div className="bsingle__post-thumb blog-active">
                {slides.map((img, idx) => (
                  <div key={idx} className="slide-post">
                    <img src={img} alt="" />
                  </div>
                ))}
              </div>
              <div className="bsingle__content">
                <div className="date-home">24th March 2022</div>
                <h2>
                  <a href="blog-details.html">I must explain to you how all this mistaken idea...</a>
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <div className="blog__btn">
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="pagination-wrap">
              <nav>
                <ul className="pagination">
                  <li className="page-item"><a href="#"><i className="fas fa-angle-double-left" /></a></li>
                  <li className="page-item active"><a href="#">1</a></li>
                  <li className="page-item"><a href="#">2</a></li>
                  <li className="page-item"><a href="#">3</a></li>
                  <li className="page-item"><a href="#">...</a></li>
                  <li className="page-item"><a href="#">10</a></li>
                  <li className="page-item"><a href="#"><i className="fas fa-angle-double-right" /></a></li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-lg-4">
            {/* Sidebar */}
            <aside className="sidebar-widget">
              {/* Search, Follow Us, Categories, Recent Posts, Tags */}
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerBlog;
