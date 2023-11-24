function Sort({ childSort }) {
  return (
    <>
      <div className="sort-container">
        <h4 className="sort-title">sort by:</h4>
        <select
          name="product-sort"
          id="product-sort"
          className="sort-dropdown"
          onChange={(e) => {
            childSort(e.currentTarget.value);
          }}
        >
          <option value="default" id="relevance-sort" className="sort-style">
            default
          </option>
          <option
            value="price-high-low"
            id="high-low-sort"
            className="sort-style"
          >
            price: high-low
          </option>
          <option
            value="price-low-high"
            id="low-high-sort"
            className="sort-style"
          >
            price: low-high
          </option>
        </select>
      </div>
    </>
  );
}
export default Sort;
