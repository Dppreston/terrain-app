import "../styles/homepage.css";
import { Link } from "react-router-dom";
import tacklePromo from "../website-imgs/tacklepromo.png";
import fishingPolePromo from "../website-imgs/fishing-pole-banner-promo.png";

const subBannerContentFirst = [
  {
    id: 1,
    title: `don't forget anything for your next trip`,
    content: `When you open a terrain mountain credit card today. Earn $10 cash back on every $100 spent at any Terrain store or website.`,
    btn: "shop tackle",
    img: tacklePromo,
  },
];

const subBannerContentSecond = [
  {
    id: 2,
    title: `All of the fishing rods. One Place.`,
    content: `Shop a industry leading supply, all in one place.`,
    btn: "shop all rods",
    img: fishingPolePromo,
  },
];

function HomepageSubBannerPromo() {
  return (
    <>
      <div className="subBanner-container">
        {subBannerContentFirst.map((subBanner) => (
          <div className="subBanner" id="subBanner-1" key={subBanner.id}>
            <div className="subBanner-img-container">
              <div className="cc-img-fix-container">
                <img src={subBanner.img} alt="#" className="subBanner-img" />
              </div>
            </div>
            <div className="subBanner-content-container">
              <h1 className="subBannerTitle">{subBanner.title}</h1>
              <h2 className="subBannerContent">{subBanner.content}</h2>
              <Link to="/products/tackle & storage">
                <button className="banner-btn">{subBanner.btn}</button>
              </Link>
            </div>
          </div>
        ))}
        {subBannerContentSecond.map((subBanner) => (
          <div className="subBanner" id="subBanner-2" key={subBanner.id}>
            <div className="subBanner-content-container">
              <h1 className="subBannerTitle">{subBanner.title}</h1>
              <h2 className="subBannerContent">{subBanner.content}</h2>
              <Link to="/products/rods">
                <button className="banner-btn">{subBanner.btn}</button>
              </Link>
            </div>
            <div className="subBanner-img-container">
              <img src={subBanner.img} alt="" className="subBanner-img" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default HomepageSubBannerPromo;
