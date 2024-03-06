import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { useSelector } from "react-redux";
function Navbar() {
  const { quantity } = useSelector((store) => store.cart);
  console.log(useSelector((store) => store.cart));
  return (
    <nav>
      <div className="navbar">
        <h3>Kurs Uygulaması</h3>
        <div className="navDiv">
          <div className="itemsDiv">
            <p>{quantity}</p>
          </div>
          <FaShoppingBasket className="itemsIcon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
