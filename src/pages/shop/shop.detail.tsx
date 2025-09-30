import BreadcrumbArea from "../../components/breadcrumb-area"
import ProductDescArea from "../../components/product-desc-area"
import ShopBannerArea from "../../components/shop-banner-area"

const ShopDetail = () => {
  return (
    <>
      <BreadcrumbArea title="Shop Details" tag="Shop Details" />
      <ShopBannerArea />
      <ProductDescArea />
    </>
  )
}
export default ShopDetail