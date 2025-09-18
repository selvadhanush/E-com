import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";  
import "./CSS/ShopCategory.css";
import drop_icon from "../Components/Assets/Frontend_Assets/dropdown_icon.png";

function ShopCategory(props) {
  const { all_products } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img src={props.banner} alt="Category Banner" />
      <div className="Shopcategory-IndexSort">
        <p>
          <span>Shopping 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={drop_icon} alt="Sort Icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        
      </div>
    </div>
  );
}

export default ShopCategory;
