import { useEffect } from "react";
import $ from "jquery";
import "jquery/dist/jquery.min.js";
const OffCanvasMenu = () => {
  useEffect(() => {
    $(".menu-tigger").on("click", function () {
      $(".offcanvas-menu,.offcanvas-overly").addClass("active");
      return false;
    });

    $(".menu-close,.offcanvas-overly").on("click", function () {
      $(".offcanvas-menu,.offcanvas-overly").removeClass("active");
    });

    return () => {
      $(".menu-tigger").off("click");
      $(".menu-close,.offcanvas-overly").off("click");
    };
  }, []);

  return (
    <div>
      <button className="menu-tigger">
        <i className="fal fa-bars" /> Menu
      </button>

      <div className="offcanvas-menu">
        <span className="menu-close"><i className="fal fa-times" /></span>
        <form role="search" className="searchform" action="#">
          <input type="text" name="s" id="search" placeholder="Search" />
          <button><i className="fal fa-search" /></button>
        </form>
        <ul className="menu">
          <li><a href="index-2.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="team.html">Team</a></li>
          <li><a href="projects.html">Gallery Study</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <ul className="menu mt-100">
          <li><a href="tel:+8123456897">+8 12 3456897</a></li>
          <li><a href="mailto:info@example.com">info@example.com</a></li>
        </ul>
      </div>

      <div className="offcanvas-overly" />
    </div>
  );
};

export default OffCanvasMenu;
