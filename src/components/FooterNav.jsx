import "../styles/footer.css";

const footerNav = [
  { id: 1, title: "rods", path: "/products/rods" },
  { id: 2, title: "reels", path: "/products/reels" },
  { id: 3, title: "lures & baits", path: "/products/lures & bait" },
  { id: 4, title: "tackle", path: "/products/tackle & storage" },
];

const handleBtnClick = (e) => {
  location.href = e.currentTarget.value;
};

function FooterNav() {
  return (
    <>
      <div className="footer-nav-container">
        <div className="footer-nav-main">
          <h1 className="footer-nav-title">shop terrain</h1>
          <div className="footer-nav-btn-container">
            {footerNav.map((links) => (
              <button
                className="footer-nav-btn"
                key={links.id}
                onClick={handleBtnClick}
                value={links.path}
              >
                {links.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default FooterNav;
