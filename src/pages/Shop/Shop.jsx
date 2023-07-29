import "./Shop.scss";
import art2 from "../../assets/arts/art (2).png";
import art3 from "../../assets/arts/art (3).png";
import art4 from "../../assets/arts/art (4).png";
import art5 from "../../assets/arts/art (5).png";
import art7 from "../../assets/arts/art (7).png";
import { ProductItem } from "../../components/ProductItem/ProductItem";
import { ReactComponent as FilterIcon } from "../../assets/svgs/filter-icon.svg";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { GrFormClose } from "react-icons/gr";
import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../../apiCall";

export const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);
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
  const { isLoading: allProductsIsLoading, data: allProducts } = useQuery(
    ["all-products"],
    fetchAllProducts
  );
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
              <input type="checkbox" className="checkbox" />
              <span>Price: low to high</span>
            </div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>Price: hight to low</span>
            </div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>Newest</span>
            </div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>Available for rent</span>
            </div>
          </div>
          <div className="filter-box">
            <h4>Medium</h4>
            <div className="underline"></div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>Paintings</span>
            </div>
            <div className="filter-item">
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
            </div>
          </div>
          <div className="filter-box">
            <h4>Size</h4>
            <div className="underline"></div>
            <div className="radios">
              <div className="item">
                <input type="radio" name="cm" id="" className="radio" />
                <span>cm</span>
              </div>
              <div className="item">
                <input type="radio" name="cm" id="" className="radio" />
                <span>in</span>
              </div>
            </div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>Small (0-40cm)</span>
            </div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>Medium (40-100cm)</span>
            </div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>Large (100+cm)</span>
            </div>
          </div>
          <div className="filter-box">
            <h4>Price</h4>
            <div className="underline"></div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>₹0 - ₹6000</span>
            </div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>₹6000 - ₹12000</span>
            </div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>₹12000 - ₹24000</span>
            </div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>₹24000 - ₹36000</span>
            </div>
            <div className="filter-item">
              <input type="checkbox" className="checkbox" />
              <span>₹36000 - ₹48000</span>
            </div>
          </div>
          <div className="filter-box">
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
          </div>
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
                  <input type="checkbox" className="checkbox" />
                  <span>Price: low to high</span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>Price: hight to low</span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>Newest</span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>Available for rent</span>
                </div>
              </div>
              <div className="filter-box">
                <h4>Medium</h4>
                <div className="underline"></div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>Paintings</span>
                </div>
                <div className="filter-item">
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
                </div>
              </div>
              <div className="filter-box">
                <h4>Size</h4>
                <div className="underline"></div>
                <div className="radios">
                  <div className="item">
                    <input type="radio" name="cm" id="" className="radio" />
                    <span>cm</span>
                  </div>
                  <div className="item">
                    <input type="radio" name="cm" id="" className="radio" />
                    <span>in</span>
                  </div>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>Small (0-40cm)</span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>Medium (40-100cm)</span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>Large (100+cm)</span>
                </div>
              </div>
              <div className="filter-box">
                <h4>Price</h4>
                <div className="underline"></div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>₹0 - ₹6000</span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>₹6000 - ₹12000</span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>₹12000 - ₹24000</span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>₹24000 - ₹36000</span>
                </div>
                <div className="filter-item">
                  <input type="checkbox" className="checkbox" />
                  <span>₹36000 - ₹48000</span>
                </div>
              </div>
              <div className="filter-box">
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
              </div>
            </div>
          </div>
        </Offcanvas>
        <div className="list-of-products" data-aos="fade-up">
          {!allProductsIsLoading ? (
            allProducts?.data?.value.map((art, index) => {
              return <ProductItem item={art} key={index}/>;
            })
          ) : (
            <div className="loading-cards">
              <div className="loading-card-item"></div>
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
