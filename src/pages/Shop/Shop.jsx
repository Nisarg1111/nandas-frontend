import "./Shop.scss";
import art2 from "../../assets/arts/art (2).png";
import art3 from "../../assets/arts/art (3).png";
import art4 from "../../assets/arts/art (4).png";
import art5 from "../../assets/arts/art (5).png";
import art7 from "../../assets/arts/art (7).png";
import { ProductItem } from "../../components/ProductItem/ProductItem";
import { ReactComponent as FilterIcon } from "../../assets/svgs/filter-icon.svg";
import { useEffect, useRef, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { GrFormClose } from "react-icons/gr";
import { useQuery } from "@tanstack/react-query";
import { categoriesList, fetchAllProducts } from "../../apiCall";
import { toast } from "react-hot-toast";

export const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filterRentItems, setFilterRentItems] = useState(false);
  const [showInInches, setShowInInches] = useState(false);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [sortType, setSortType] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const artsImages = [
    art2,
    art3,
    art4,
    art5,
    art7,
    art2,
    art3,
    art4,
    art5,
    art7,
  ];

  // get all products
  const { isLoading: allProductsIsLoading } = useQuery(
    ["all-products"],
    fetchAllProducts,
    {
      onSuccess: (data) => {
        setProducts(data.data?.value);
        setAllProducts(data.data?.value);
      },
      onError: (e) => {
        if (e.message) {
          return toast.error(e.message);
        }
        toast.error("Something went wrong");
      },
    }
  );

  // get all categories
  const { data: categories } = useQuery(["categories"], categoriesList, {
    onSuccess: (data) => {},
    onError: (e) => {
      // console.log(e)
    },
  });

  // handle sorting products
  const handleSort = (e) => {
    if (e.target.defaultValue === "low-to-high") {
      setSortType("low-to-high");
      setFilterRentItems(false);
    } else if (e.target.defaultValue === "high-to-low") {
      setSortType("high-to-low");
      setFilterRentItems(false);
    } else if (e.target.defaultValue === "relevance") {
      setSortType("relevance");
      setFilterRentItems(false);
    } else if (e.target.defaultValue === "available-for-rent") {
      setSortType("");
      setFilterRentItems(!filterRentItems);
    } else {
      setFilterRentItems(false);
      setSortType("");
    }
  };

  // select categories
  const handleCategoriesChange = (category) => {
    if (selectedCategories.includes(category)) {
      return setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    }
    setSelectedCategories([...selectedCategories, category]);
  };

  // set price ranges
  const handlePriceFilter = (from, to) => {
    if (selectedPriceRanges.some((price) => price.from === from)) {
      setSelectedPriceRanges(
        selectedPriceRanges.filter((price) => price.from !== from)
      );
    } else {
      setSelectedPriceRanges([...selectedPriceRanges, { from: from, to: to }]);
    }
  };

  // filtering products
  useEffect(() => {
    setProducts(
      allProducts
        .filter((item) => {
          if (
            selectedCategories.length === 0 &&
            selectedPriceRanges.length === 0
          ) {
            return true;
          } else if (selectedPriceRanges.length === 0) {
            return selectedCategories.includes(item.category__title);
          } else if (selectedCategories.length === 0) {
            return selectedPriceRanges.some(
              (range) => range.from <= item.price && range.to > item.price
            );
          } else {
            return (
              selectedCategories.includes(item.category__title) &&
              selectedPriceRanges.some(
                (range) => range.from <= item.price && range.to > item.price
              )
            );
          }
        })
        .sort((a, b) => {
          if (sortType === "low-to-high") {
            return a.price - b.price;
          } else if (sortType === "high-to-low") {
            return b.price - a.price;
          } else if (sortType === "relevance") {
            return allProducts;
          } else {
            return true;
          }
        })
    );
  }, [
    selectedCategories,
    allProducts,
    sortType,
    filterRentItems,
    selectedPriceRanges,
  ]);
  return (
    <div className="shop-main">
      <div className="head" data-aos="fade-right">
        <h1>Shop</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="filter-btn button"
        >
          <FilterIcon className="filter-icon" />
          Filter
        </button>
      </div>
      <div className="products-container">
        <div className="filters-lg filters" data-aos="fade-right">
          <h2>Filter By</h2>
          <div className="filter-box">
            <h4>Sort By</h4>
            <div className="underline"></div>
            <div className="filter-item">
              <input
                type="checkbox"
                className="checkbox"
                onChange={(e) => handleSort(e)}
                value="relevance"
                checked={sortType === "relevance"}
              />
              <span>Relevance</span>
            </div>
            <div className="filter-item">
              <input
                type="checkbox"
                className="checkbox"
                onChange={(e) => handleSort(e)}
                value="low-to-high"
                checked={sortType === "low-to-high"}
              />
              <span>Price: low to high</span>
            </div>
            <div className="filter-item">
              <input
                type="checkbox"
                className="checkbox"
                onChange={(e) => handleSort(e)}
                value="high-to-low"
                checked={sortType === "high-to-low"}
              />
              <span>Price: high to low</span>
            </div>
            <div className="filter-item">
              <input
                type="checkbox"
                className="checkbox"
                onChange={(e) => handleSort(e)}
                value="available-for-rent"
                checked={filterRentItems && sortType === ""}
              />
              <span>Available for rent</span>
            </div>
          </div>

          <div className="filter-box">
            <h4>Medium</h4>
            <div className="underline"></div>
            {categories?.data?.value.map((item) => (
              <div className="filter-item" key={item.id}>
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={() => handleCategoriesChange(item.title)}
                />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
          <div className="filter-box">
            <h4>Size</h4>
            <div className="underline"></div>
            <div className="radios">
              <div className="item">
                <input
                  type="radio"
                  name="size"
                  id=""
                  className="radio"
                  onChange={() => setShowInInches(false)}
                  checked={!showInInches}
                />
                <span>cm</span>
              </div>
              <div className="item">
                <input
                  type="radio"
                  name="size"
                  id=""
                  className="radio"
                  onChange={() => setShowInInches(true)}
                  checked={showInInches}
                />
                <span>in</span>
              </div>
            </div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>
                Small (0-
                {!showInInches ? "40 cm" : `${(40 * 0.393701).toFixed(1)} in`})
              </span>
            </div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>
                Medium (
                {!showInInches
                  ? "40 - 100 cm"
                  : `${(40 * 0.393701).toFixed(1)} - ${(100 * 0.393701).toFixed(
                      1
                    )} in`}
                )
              </span>
            </div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>
                Large (
                {!showInInches
                  ? "100 cm+"
                  : `${(100 * 0.393701).toFixed(1)} in+`}
                )
              </span>
            </div>
          </div>
          <div className="filter-box">
            <h4>Price</h4>
            <div className="underline"></div>
            <div className="filter-item">
              <input
                type="checkbox"
                className="checkbox"
                onChange={() => handlePriceFilter(0, 6000)}
              />
              <span>₹0 - ₹6000</span>
            </div>
            <div className="filter-item">
              <input
                type="checkbox"
                className="checkbox"
                onChange={() => handlePriceFilter(6000, 12000)}
              />
              <span>₹6000 - ₹12000</span>
            </div>
            <div className="filter-item">
              <input
                type="checkbox"
                className="checkbox"
                onChange={() => handlePriceFilter(12000, 24000)}
              />
              <span>₹12000 - ₹24000</span>
            </div>
            <div className="filter-item">
              <input
                type="checkbox"
                className="checkbox"
                onChange={() => handlePriceFilter(24000, 36000)}
              />
              <span>₹24000 - ₹36000</span>
            </div>
            <div className="filter-item">
              <input
                type="checkbox"
                className="checkbox"
                onChange={() => handlePriceFilter(36000, 48000)}
              />
              <span>₹36000 - ₹48000</span>
            </div>
          </div>
          {/* <div className="filter-box">
            <h4>Color</h4>
            <div className="underline"></div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>White</span>
            </div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>Black</span>
            </div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>Gray</span>
            </div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>Brown</span>
            </div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>Red</span>
            </div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>Green</span>
            </div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>Blue</span>
            </div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>Yellow</span>
            </div>
          </div> */}
        </div>
        <Offcanvas
          show={showFilters}
          onHide={() => setShowFilters(false)}
          placement={"end"}
        >
          <div className="header-sm">
            <h2>Filter By</h2>
            <div className="offcanvas-header">
              <GrFormClose
                className="icon"
                onClick={() => setShowFilters(false)}
              />
            </div>
          </div>
          <div className="offcanvas-body-shop">
            <div className="filters-sm filters">
              <div className="filter-box">
                <h4>Sort By</h4>
                <div className="underline"></div>
                <div className="filter-item">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={(e) => handleSort(e)}
                    value="relevance"
                    checked={sortType === "relevance"}
                  />
                  <span>Relevance</span>
                </div>
                <div className="filter-item">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={(e) => handleSort(e)}
                    value="low-to-high"
                    checked={sortType === "low-to-high"}
                  />
                  <span>Price: low to high</span>
                </div>
                <div className="filter-item">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={(e) => handleSort(e)}
                    value="high-to-low"
                    checked={sortType === "high-to-low"}
                  />
                  <span>Price: high to low</span>
                </div>
                <div className="filter-item">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={(e) => handleSort(e)}
                    value="available-for-rent"
                    checked={filterRentItems && sortType === ""}
                  />
                  <span>Available for rent</span>
                </div>
              </div>
              <div className="filter-box">
                <h4>Medium</h4>
                <div className="underline"></div>
                {categories?.data?.value.map((item) => (
                  <div className="filter-item" key={item.id}>
                    <input
                      type="checkbox"
                      className="checkbox"
                      onChange={() => handleCategoriesChange(item.title)}
                    />
                    <span>{item.title}</span>
                  </div>
                ))}
                {/* <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>Photography</span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>Drawings</span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>Abstract art</span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>Landscapes</span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>New this week</span>
                </div> */}
              </div>
              <div className="filter-box">
                <h4>Size</h4>
                <div className="underline"></div>
                <div className="radios">
                  <div className="item">
                    <input
                      type="radio"
                      name="size"
                      id=""
                      className="radio"
                      onChange={() => setShowInInches(false)}
                      checked={!showInInches}
                    />
                    <span>cm</span>
                  </div>
                  <div className="item">
                    <input
                      type="radio"
                      name="size"
                      id=""
                      className="radio"
                      onChange={() => setShowInInches(true)}
                      checked={showInInches}
                    />
                    <span>in</span>
                  </div>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>
                    Small (0-
                    {!showInInches
                      ? "40 cm"
                      : `${(40 * 0.393701).toFixed(1)} in`}
                    )
                  </span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>
                    Medium (
                    {!showInInches
                      ? "40 - 100 cm"
                      : `${(40 * 0.393701).toFixed(1)} - ${(
                          100 * 0.393701
                        ).toFixed(1)} in`}
                    )
                  </span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>
                    Large (
                    {!showInInches
                      ? "100 cm+"
                      : `${(100 * 0.393701).toFixed(1)} in+`}
                    )
                  </span>
                </div>
              </div>
              <div className="filter-box">
                <h4>Price</h4>
                <div className="underline"></div>
                <div className="filter-item">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={() => handlePriceFilter(0, 6000)}
                  />
                  <span>₹0 - ₹6000</span>
                </div>
                <div className="filter-item">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={() => handlePriceFilter(6000, 12000)}
                  />
                  <span>₹6000 - ₹12000</span>
                </div>
                <div className="filter-item">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={() => handlePriceFilter(12000, 24000)}
                  />
                  <span>₹12000 - ₹24000</span>
                </div>
                <div className="filter-item">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={() => handlePriceFilter(24000, 36000)}
                  />
                  <span>₹24000 - ₹36000</span>
                </div>
                <div className="filter-item">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={() => handlePriceFilter(36000, 48000)}
                  />
                  <span>₹36000 - ₹48000</span>
                </div>
              </div>
              {/* <div className="filter-box">
                <h4>Color</h4>
                <div className="underline"></div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>White</span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>Black</span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>Gray</span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>Brown</span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>Red</span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>Green</span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>Blue</span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>Yellow</span>
                </div>
              </div> */}
            </div>
          </div>
        </Offcanvas>
        <div className="list-of-products" data-aos="fade-up">
          {!allProductsIsLoading ? (
            products.map((art) => {
              if (filterRentItems) {
                if (art.available_for_rent) {
                  return <ProductItem item={art} key={art.id} />;
                }
                return null;
              } else {
                return <ProductItem item={art} key={art.id} />;
              }
            })
          ) : (
            <div className="loading-cards">
              <div className="loading-card-item"></div>
              <div className="loading-card-item"></div>
              <div className="loading-card-item"></div>
              <div className="loading-card-item"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
