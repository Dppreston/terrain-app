import "../styles/navbar.css";

import testImg from "../product-imgs/test-backpack.jpeg";

function SearchDropdown(props) {
  const resultsData = props.searchData;

  const handleSelectedSearchProduct = (e) => {
    window.location = e.currentTarget.value;
  };

  return (
    <>
      {resultsData &&
        resultsData?.map((results) => (
          <button
            className="search-dropdown-row"
            key={results._id}
            onClick={handleSelectedSearchProduct}
            value={`/products/${results.parentCat}/${results._id}`}
          >
            <div className="search-img-container">
              <img
                src={results.previewImg}
                alt="search-img"
                className="search-img"
                id="search-img"
              />
            </div>
            <div className="search-item-price-container">
              <h3 className="search-item-title">{results.title}</h3>
              <h3 className="search-item-price">{results.price}</h3>
            </div>
          </button>
        ))}
    </>
  );
}
export default SearchDropdown;
