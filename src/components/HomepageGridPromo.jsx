import "../styles/homepage.css";
import { Link } from "react-router-dom";

function HomepageGridPromo(props) {
  const gridPromoContent = props.gridPromoContent;

  return (
    <>
      <div className="grid-promo-container">
        {gridPromoContent.map((gridPromo) => (
          <div className="grid-promo" key={gridPromo.id}>
            <Link to={`/products${gridPromo.path}`}>
              <div className="grid-item" key={gridPromo.id}>
                <h2 className="grid-item-title">{gridPromo.Title}</h2>
                <img
                  src={gridPromo.img}
                  alt="#"
                  className="grid-img"
                  loading="lazy"
                />
                <button className="grid-item-shop-btn">shop now</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
export default HomepageGridPromo;
