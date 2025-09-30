import shopImg1 from '../../assets/img/shop/img1.jpg'
import shopImg2 from '../../assets/img/shop/img2.jpg'
import shopImg3 from '../../assets/img/shop/img3.jpg'
import shopImg4 from '../../assets/img/shop/img4.jpg'
import shopImg5 from '../../assets/img/shop/img5.jpg'
import shopImg6 from '../../assets/img/shop/img6.jpg'
import shopImg7 from '../../assets/img/shop/img7.jpg'
import shopImg8 from '../../assets/img/shop/img8.jpg'
import shopImg9 from '../../assets/img/shop/img9.jpg'

const ShopArea = () => {
  return (
    <section className="shop-area pt-120 pb-120 p-relative " data-animation="fadeInUp animated" data-delay=".2s">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <h6 className="mt-20 mb-30">Showing 1–9 of 10 results</h6>
          </div>
          <div className="col-lg-6 col-sm-6 text-right">
            <select name="orderby" className="orderby" aria-label="Shop order">
              <option value="menu_order" selected={true}>Default sorting</option>
              <option value="popularity">Sort by popularity</option>
              <option value="rating">Sort by average rating</option>
              <option value="date">Sort by latest</option>
              <option value="price">Sort by price: low to high</option>
              <option value="price-desc">Sort by price: high to low</option>
            </select>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-6">
            <div className="product mb-40">
              <div className="product__img">
                <a href="shop-details.html"><img src={shopImg4} alt="" /></a>
                <div className="product-action text-center">
                  <a href="shop-details.html">Add Cart</a>
                </div>
              </div>
              <div className="product__content text-center pt-30">
                <span className="pro-cat"><a href="#">Chair</a></span>
                <h4 className="pro-title"><a href="shop-details.html">Bakari Product</a></h4>
                <div className="price">
                  <span>$95.00</span>
                  <span className="old-price">$120.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product mb-40">
              <div className="product__img">
                <a href="shop-details.html"><img src={shopImg5} alt="" /></a>
                <div className="product-action text-center">
                  <a href="shop-details.html">Add Cart</a>
                </div>
              </div>
              <div className="product__content text-center pt-30">
                <span className="pro-cat"><a href="#">Cloths</a></span>
                <h4 className="pro-title"><a href="shop-details.html">Romada Product</a></h4>
                <div className="price">
                  <span>$95.00</span>
                  <span className="old-price">$120.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product mb-40">
              <div className="product__img">
                <a href="shop-details.html"><img src={shopImg6} alt="" /></a>
                <div className="product-action text-center">
                  <a href="shop-details.html">Add Cart</a>
                </div>
              </div>
              <div className="product__content text-center pt-30">
                <span className="pro-cat"><a href="#">Light</a></span>
                <h4 className="pro-title"><a href="shop-details.html">Sikkar Product</a></h4>
                <div className="price">
                  <span>$95.00</span>
                  <span className="old-price">$120.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product mb-40">
              <div className="product__img">
                <a href="shop-details.html"><img src={shopImg7} alt="" /></a>
                <div className="product-action text-center">
                  <a href="shop-details.html">Add Cart</a>
                </div>
              </div>
              <div className="product__content text-center pt-30">
                <span className="pro-cat"><a href="#">Headphone</a></span>
                <h4 className="pro-title"><a href="shop-details.html">Minners Product</a></h4>
                <div className="price">
                  <span>$95.00</span>
                  <span className="old-price">$120.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product mb-40">
              <div className="product__img">
                <a href="shop-details.html"><img src={shopImg8} alt="" /></a>
                <div className="product-action text-center">
                  <a href="shop-details.html">Add Cart</a>
                </div>
              </div>
              <div className="product__content text-center pt-30">
                <span className="pro-cat"><a href="#">table</a></span>
                <h4 className="pro-title"><a href="shop-details.html">Dolando Product</a></h4>
                <div className="price">
                  <span>$95.00</span>
                  <span className="old-price">$120.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product mb-40">
              <div className="product__img">
                <a href="shop-details.html"><img src={shopImg9} alt="" /></a>
                <div className="product-action text-center">
                  <a href="shop-details.html">Add Cart</a>
                </div>
              </div>
              <div className="product__content text-center pt-30">
                <span className="pro-cat"><a href="#">Cloths</a></span>
                <h4 className="pro-title"><a href="shop-details.html">Romada Product</a></h4>
                <div className="price">
                  <span>$95.00</span>
                  <span className="old-price">$120.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product mb-40">
              <div className="product__img">
                <a href="shop-details.html"><img src={shopImg1} alt="" /></a>
                <div className="product-action text-center">
                  <a href="shop-details.html">Add Cart</a>
                </div>
              </div>
              <div className="product__content text-center pt-30">
                <span className="pro-cat"><a href="#">Cloths</a></span>
                <h4 className="pro-title"><a href="shop-details.html">Medidove Product</a></h4>
                <div className="price">
                  <span>$95.00</span>
                  <span className="old-price">$120.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product mb-40">
              <div className="product__img">
                <a href="shop-details.html"><img src={shopImg2} alt="" /></a>
                <div className="product-action text-center">
                  <a href="shop-details.html">Add Cart</a>
                </div>
              </div>
              <div className="product__content text-center pt-30">
                <span className="pro-cat"><a href="#">Cloths</a></span>
                <h4 className="pro-title"><a href="shop-details.html">Legend Product</a></h4>
                <div className="price">
                  <span>$95.00</span>
                  <span className="old-price">$120.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product mb-40">
              <div className="product__img">
                <a href="shop-details.html"><img src={shopImg3} alt="" /></a>
                <div className="product-action text-center">
                  <a href="shop-details.html">Add Cart</a>
                </div>
              </div>
              <div className="product__content text-center pt-30">
                <span className="pro-cat"><a href="#">Table</a></span>
                <h4 className="pro-title"><a href="shop-details.html">Akari Product</a></h4>
                <div className="price">
                  <span>$95.00</span>
                  <span className="old-price">$120.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="pagination-wrap mt-50 text-center">
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
          <div /></div>
      </div>
    </section>
  )
}

export default ShopArea