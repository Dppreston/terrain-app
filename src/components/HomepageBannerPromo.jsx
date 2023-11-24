import "../styles/homepage.css";

import fishingPromo from "../website-imgs/fishingpromo2.jpg";

function HomepageBannerPromo() {
  return (
    <>
      <div className="home-banner">
        <div className="banner-img-container">
          <img
            src={fishingPromo}
            id="promo-img-1"
            alt=""
            className="homepage-banner"
          />
          <div className="banner-text-container">
            <div className="main-content">
              <h1 className="banner-text">Welcome to Terrain Fishing Co.</h1>
            </div>
            <div className="support-content"></div>
            {/* <button className='banner-btn'>Shop Now</button> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default HomepageBannerPromo;
