import { Link } from "react-router-dom";
import "../styles/homepage.css";

function BannerPromo(props) {
  const bannerContent = props.bannerPromoContent;
  return (
    <>
      {bannerContent.map((banner) => (
        <div className="banner-promo-container" key={banner.id}>
          <img
            src={banner.img}
            alt="outdoor-img"
            className="banner-promo-img"
          />
          <div className="banner-promo-content">
            <h1 className="banner-headline">{banner.headline}</h1>
            <Link to="/products/reels">
              <button className="banner-btn">{banner.btn}</button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
export default BannerPromo;
