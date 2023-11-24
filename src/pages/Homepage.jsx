import HomepageBannerPromo from "../components/HomepageBannerPromo";
import Navbar from "../components/Navbar";
import HomepageGridPromo from "../components/HomepageGridPromo";
import "../styles/homepage.css";
import HomepageSubBannerPromo from "../components/HomepageSubBannerPromo";
import BannerPromo from "../components/BannerPromo";

//promo-imgs

import reelPromo from "../website-imgs/homereelpromo.jpg";
import fishingPromo1 from "../website-imgs/homepromo.jpg";
import fishingPromo2 from "../website-imgs/homepromo2.jpg";
import fishingPromo from "../website-imgs/fishing-homepage-promo.jpg";
import fishingPromo3 from "../website-imgs/homepromo3.jpg";
import fishingLurePromo from "../website-imgs/homelurepromo.jpg";
import bottomFishingPromo from "../website-imgs/fishing-1.jpg";
import EmailBanner from "../components/EmailBanner";
import Footer from "../components/Footer";

const gridPromoContent = [
  {
    id: 1,
    Title: "save up to 20% on reels",
    img: reelPromo,
    path: "/reels",
  },
  {
    id: 2,
    Title: "shop rods",
    img: fishingPromo1,
    path: "/rods",
  },
  {
    id: 3,
    Title: "save big on bait",
    img: fishingPromo2,
    path: "/lures & bait",
  },
  {
    id: 4,
    Title: "end of season storage",
    img: fishingPromo,
    path: "/tackle & storage",
  },
  {
    id: 5,
    Title: "shop ice fishing ",
    img: fishingPromo3,
    path: "/ice rods",
  },
  {
    id: 6,
    Title: "shop lures",
    img: fishingLurePromo,
    path: "/lures & bait",
  },
];

const bannerPromoContent = [
  {
    id: 1,
    headline: "Take a look at our amazing collection of reels.",
    btn: "view reels",
    img: bottomFishingPromo,
  },
];

function Homepage() {
  return (
    <>
      <HomepageBannerPromo />
      <HomepageGridPromo gridPromoContent={gridPromoContent} />
      <HomepageSubBannerPromo />
      <BannerPromo bannerPromoContent={bannerPromoContent} />
    </>
  );
}
export default Homepage;
