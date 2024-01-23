import "../styles/navbar.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
//imgs

import alternateLogo from "../branding-imgs/fishingcologo.png";
import DynamicProducts from "../pages/DynamicProducts";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchDropdown from "./SearchDropdown";

const siteCategoriesTitles = [
  {
    id: 1,
    Title: "Rods",
    path: "/rods",
  },
  {
    id: 2,
    Title: "Reels",
    path: "/rishing",
  },
  {
    id: 3,
    Title: "Lures & Baits",
    path: "/lures",
  },
  {
    id: 4,
    Title: "Tackle & Storage",
    path: "/tackle",
  },
];

const subCategories = [
  {
    id: 1,
    Title: "Rods",
    path: "/rods",
    sub: [
      {
        id: 1.1,
        Title: "rods",
        path: "/rods",
        items: [
          "spinning rods",
          "casting rods",
          "saltwater rods",
          "ice rods",
          "fly rods",
        ],
      },
    ],
  },

  {
    id: 2,
    Title: "Reels",
    path: "/reels",
    sub: [
      {
        id: 2.1,
        Title: "reels",
        path: "/reels",
        items: [
          "spinning reels",
          "baitcasting reels",
          "saltwater reels",
          "ice reels",
          "fly reels",
        ],
      },
    ],
  },
  {
    id: 3,
    Title: "lures & bait",
    path: "/lures",
    sub: [
      {
        id: 3.1,
        Title: "lures & bait",
        path: "/lures",
        items: [
          "hard lures",
          "soft plastics",
          "spinner & buzz",
          "saltwater baits",
          "flies",
        ],
      },
    ],
  },
  {
    id: 4,
    Title: "tackle & storage",
    path: "/tackle",
    sub: [
      {
        id: 4.1,
        Title: "tackle & storage",
        path: "/tackle",
        items: ["tackle boxes", "storage systems", "hooks", "line", "weights"],
      },
    ],
  },
];

const currentCategories = [];

function Navbar({ child, childTitle }) {
  const dropDown = useRef(null);
  const searchBar = useRef(null);
  const searchContainer = useRef(null);
  const dropDownContainer = useRef(null);
  const [hidden, setHidden] = useState(false);
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  const mobileDropdown = useRef(null);

  //dropdown menu

  const handleHoverDropdown = (e) => {
    if (e.target.value === e.target.value) {
      dropDown.current.classList.remove("hidden");
      dropDownContainer.current.classList.remove("hidden");
      const idNumber = Number(e.target.value);
      const found = subCategories.find((current) => current.id === idNumber);
      currentCategories.push(found);
      setHidden(!hidden);
    }
  };

  //dropdown change

  const handleDropDownChange = (e) => {
    if (e.target && currentCategories.length > 0) {
      currentCategories.pop();
    }
  };

  //dropdown collapse

  const handleDropdownCollapse = (e) => {
    dropDown.current.classList.add("hidden");
    dropDownContainer.current.classList.add("hidden");
    if (e && currentCategories.length > 0) {
      currentCategories.pop();
      setHidden(hidden);
    }
  };

  //handle home navigation from logo

  const handleHome = (e) => {
    e.preventDefault();

    location.href = e.currentTarget.title;
  };

  //searchbar query

  const handleSearch = (e) => {
    setQuery(searchBar.current.value);
    if (query.length == 0) {
      searchContainer.current.classList.add("hidden");
    } else {
      searchContainer.current.classList.remove("hidden");
    }
  };

  const searchQuery = async () => {
    try {
      const res = await axios.get(
        `https://terrain-app-production.up.railway.app/products/?q=${query}`
      );
      setSearchData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch();
    searchQuery();
  }, [query]);

  return (
    <>
      <div className="navbar-container">
        <div className="promo-1-container">
          <h1 className="promo-1">
            free shipping on orders | free in-store pickup
          </h1>
        </div>
        <div
          className="navbar-upper-container"
          onMouseEnter={handleDropdownCollapse}
        >
          <div className="navbar-upper">
            <div className="logo-container">
              <img
                className="logo"
                src={alternateLogo}
                alt="terrain outdoors logo"
                id="logo"
                title="/"
                onClick={handleHome}
              />
            </div>
            <div className="searchbar-container">
              <div className="search-icon-container">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <input
                type="search"
                className="searchbar"
                id="search-bar"
                placeholder="What would you like to find?"
                onChange={handleSearch}
                onClick={() => {
                  setIsToggled(!isToggled);
                }}
                ref={searchBar}
                value={query}
              />
            </div>
            <div className="account-cart-container">
              <Link className="cart-link" to="/cart">
                <div className="cart user-style">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <h5 className="nav-cart-title">Cart</h5>
                </div>
              </Link>
              <div className="mobile-navbar-container">
                <Link to="/cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                <div className="mobile-bars-container ">
                  <i
                    className="fa-solid fa-bars mobile-bars"
                    onClick={(e) => {
                      if (e.currentTarget) {
                        mobileDropdown.current.classList.toggle("hidden");
                      }
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="search-dropdown-container"
            ref={searchContainer}
            onMouseLeave={() => {
              setQuery("") && searchContainer.current.classList.add("hidden");
            }}
          >
            {query && <SearchDropdown searchData={searchData} />}
          </div>
        </div>
        <div className="navbar-lower-container">
          <div className="navbar-lower">
            <div className="menu-buttons">
              {siteCategoriesTitles.map((current) => (
                <button
                  className={current.Title}
                  value={current.id}
                  // onClick={handleNavMenu}
                  onMouseOver={handleHoverDropdown}
                  onMouseLeave={handleDropDownChange}
                  key={current.id}
                >
                  {current.Title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="selected-dropdown-menu-container hidden "
        ref={dropDownContainer}
      >
        <div className="selected-dropdown-menu" ref={dropDown}>
          {currentCategories.map((current) => (
            <div
              className="dropdown-item-container"
              key={current.id}
              onMouseLeave={handleDropdownCollapse}
            >
              {current.sub.map((currentSubs) => (
                <div className="item-row" key={currentSubs.id}>
                  <div className="item-title-shop-all-cont">
                    <h2 className="item-title" value={currentSubs.path}>
                      {currentSubs.Title}
                    </h2>
                    <button
                      className="shop-all"
                      id="shop-all"
                      onClick={() => {
                        window.location = `/products/${currentSubs.Title}`;
                      }}
                    >
                      Shop All
                    </button>
                  </div>
                  <div className="sub-item-list" key={currentSubs.id}>
                    <button
                      className="sub-item"
                      value={currentSubs.items[0]}
                      onClick={(e) => {
                        child(currentSubs.items[0]);
                        childTitle(currentSubs.Title);
                        handleDropdownCollapse();
                        window.location = `/products/${currentSubs.items[0]}`;
                      }}
                    >
                      {currentSubs.items[0]}
                    </button>
                    <button
                      className="sub-item"
                      value={currentSubs.items[1]}
                      onClick={() => {
                        child(currentSubs.items[1]);
                        childTitle(currentSubs.Title);
                        handleDropdownCollapse();
                        window.location = `/products/${currentSubs.items[1]}`;
                      }}
                    >
                      {currentSubs.items[1]}
                    </button>
                    <button
                      className="sub-item"
                      value={currentSubs.items[2]}
                      onClick={() => {
                        child(currentSubs.items[2]);
                        childTitle(currentSubs.Title);
                        handleDropdownCollapse();
                        window.location = `/products/${currentSubs.items[2]}`;
                      }}
                    >
                      {currentSubs.items[2]}
                    </button>
                    <button
                      className="sub-item"
                      value={currentSubs.items[3]}
                      onClick={() => {
                        child(currentSubs.items[3]);
                        childTitle(currentSubs.Title);
                        handleDropdownCollapse();
                        window.location = `/products/${currentSubs.items[3]}`;
                      }}
                    >
                      {currentSubs.items[3]}
                    </button>
                    <button
                      className="sub-item"
                      value={currentSubs.items[4]}
                      onClick={() => {
                        child(currentSubs.items[4]);
                        childTitle(currentSubs.Title);
                        handleDropdownCollapse();
                        window.location = `/products/${currentSubs.items[4]}`;
                      }}
                    >
                      {currentSubs.items[4]}
                    </button>
                    <button
                      className="sub-item"
                      value={currentSubs.items[5]}
                      onClick={() => {
                        child(currentSubs.items[5]);
                        childTitle(currentSubs.Title);
                        handleDropdownCollapse();
                        window.location = `/products/${currentSubs.items[5]}`;
                      }}
                    >
                      {currentSubs.items[5]}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div
        className="mobile-selected-menu-container hidden"
        ref={mobileDropdown}
      >
        <div className="menu-buttons">
          {siteCategoriesTitles.map((current) => (
            <button
              className={current.Title}
              value={current.id}
              // onClick={handleNavMenu}
              onMouseOver={handleHoverDropdown}
              onMouseLeave={handleDropDownChange}
              key={current.id}
            >
              {current.Title}
            </button>
          ))}
          {currentCategories.map((current) =>
            current.sub.map((currentSubs) => (
              <div className="sub-item-list" key={currentSubs.id}>
                <button
                  className="sub-item"
                  value={currentSubs.items[0]}
                  onClick={(e) => {
                    child(currentSubs.items[0]);
                    childTitle(currentSubs.Title);
                    handleDropdownCollapse();
                    window.location = `/products/${currentSubs.items[0]}`;
                  }}
                >
                  {currentSubs.items[0]}
                </button>
                <button
                  className="sub-item"
                  value={currentSubs.items[1]}
                  onClick={() => {
                    child(currentSubs.items[1]);
                    childTitle(currentSubs.Title);
                    handleDropdownCollapse();
                    window.location = `/products/${currentSubs.items[1]}`;
                  }}
                >
                  {currentSubs.items[1]}
                </button>
                <button
                  className="sub-item"
                  value={currentSubs.items[2]}
                  onClick={() => {
                    child(currentSubs.items[2]);
                    childTitle(currentSubs.Title);
                    handleDropdownCollapse();
                    window.location = `/products/${currentSubs.items[2]}`;
                  }}
                >
                  {currentSubs.items[2]}
                </button>
                <button
                  className="sub-item"
                  value={currentSubs.items[3]}
                  onClick={() => {
                    child(currentSubs.items[3]);
                    childTitle(currentSubs.Title);
                    handleDropdownCollapse();
                    window.location = `/products/${currentSubs.items[3]}`;
                  }}
                >
                  {currentSubs.items[3]}
                </button>
                <button
                  className="sub-item"
                  value={currentSubs.items[4]}
                  onClick={() => {
                    child(currentSubs.items[4]);
                    childTitle(currentSubs.Title);
                    handleDropdownCollapse();
                    window.location = `/products/${currentSubs.items[4]}`;
                  }}
                >
                  {currentSubs.items[4]}
                </button>
                <button
                  className="sub-item"
                  value={currentSubs.items[5]}
                  onClick={() => {
                    child(currentSubs.items[5]);
                    childTitle(currentSubs.Title);
                    handleDropdownCollapse();
                    window.location = `/products/${currentSubs.items[5]}`;
                  }}
                >
                  {currentSubs.items[5]}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
export default Navbar;
