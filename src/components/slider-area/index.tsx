import sliderBG from "../../assets/img/slider/slider_bg.png";
import sliderBG1 from "../../assets/img/slider/slider_bg_01.png";
import { useEffect } from "react";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderArea = () => {
  useEffect(() => {
    const $slider = $(".slider-active");

    if ($slider.length > 0) {
      // huỷ slick cũ nếu đã init
      if ($slider.hasClass("slick-initialized")) {
        $slider.slick("unslick");
      }

      // init slick
      $slider.on("init", function () {
        const $firstAnimatingElements = $(".single-slider:first-child").find(
          "[data-animation]"
        );
        doAnimations($firstAnimatingElements);
      });

      $slider.on("beforeChange", function (_e, _slick, _current, next) {
        const $animatingElements = $(
          `.single-slider[data-slick-index="${next}"]`
        ).find("[data-animation]");
        doAnimations($animatingElements);
      });

      $slider.slick({
        autoplay: true,
        autoplaySpeed: 10000,
        dots: false,
        fade: true,
        arrows: true,
        prevArrow:
          '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
        responsive: [
          {
            breakpoint: 1200,
            settings: { dots: false, arrows: false },
          },
        ],
      });
    }

    // cleanup
    return () => {
      if ($slider.hasClass("slick-initialized")) {
        $slider.slick("unslick");
      }
    };
  }, []);

  // animation helper
  const doAnimations = (elements: JQuery<HTMLElement>) => {
    const animationEndEvents =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    elements.each(function () {
      const $this = $(this);
      const $animationDelay = $this.data("delay");
      const $animationType = "animated " + $this.data("animation");
      $this.css({
        "animation-delay": $animationDelay,
        "-webkit-animation-delay": $animationDelay,
      });
      $this
        .addClass($animationType)
        .one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
    });
  };
  return (
    <section id="home" className="slider-area fix p-relative">
      <div className="slider-active" style={{ backgroundImage: `url(${sliderBG})`, backgroundSize: 'cover' }}>
        <div className="single-slider slider-bg d-flex align-items-center" style={{ backgroundImage: `url(${sliderBG})`, backgroundSize: 'cover' }}>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-7 col-md-7">
                <div className="slider-content s-slider-content mt-80 text-center">
                  <h2 data-animation="fadeInUp" data-delay=".4s">Enjoy A Luxuary Experience</h2>
                  <p data-animation="fadeInUp" data-delay=".6s">Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique, commodo gravida lectus non.</p>
                  <div className="slider-btn mt-30 mb-105">
                    <a href="contact.html" className="btn ss-btn active mr-15" data-animation="fadeInLeft" data-delay=".4s">Discover More </a>
                    <a href="https://www.youtube.com/watch?v=gyGsPlt06bo" className="video-i popup-video" data-animation="fadeInUp" data-delay=".8s" style={{ animationDelay: '0.8s' }} tabIndex={0}><i className="fas fa-play" /> Intro Video</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-slider slider-bg d-flex align-items-center" style={{ backgroundImage: `url(${sliderBG1})`, backgroundSize: 'cover' }}>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-7 col-md-7">
                <div className="slider-content s-slider-content mt-80 text-center">
                  <h2 data-animation="fadeInUp" data-delay=".4s">Enjoy A Luxuary Experience</h2>
                  <p data-animation="fadeInUp" data-delay=".6s">Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique, commodo gravida lectus non.</p>
                  <div className="slider-btn mt-30 mb-105">
                    <a href="contact.html" className="btn ss-btn active mr-15" data-animation="fadeInLeft" data-delay=".4s">Discover More </a>
                    <a href="https://www.youtube.com/watch?v=gyGsPlt06bo" className="video-i popup-video" data-animation="fadeInUp" data-delay=".8s" style={{ animationDelay: '0.8s' }} tabIndex={0}><i className="fas fa-play" /> Intro Video</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SliderArea