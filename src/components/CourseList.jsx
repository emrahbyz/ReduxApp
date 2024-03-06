import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseItem from "../components/CourseItem";
import { clearCart } from "../control/cartSlice";

function CourseList() {
  const { cartItems, quantity, total } = useSelector((store) => store.cart);

  return (
    <>
      {quantity < 1 ? (
        <section className="cart">
          <header>
            <h2>Sepetinizde</h2>
            <h4>hiçbir ürün yok</h4>
          </header>
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2>Sepetinizde</h2>
          </header>
          <div>
            {cartItems.map((item) => {
              return <CourseItem {...item} key={item.id} />;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Toplam Tutar <span> {total} TL </span>
              </h4>
            </div>
            <button
              className="cartClearButton"
              onClick={() => dispatch(clearCart())}
            >
              Temizle
            </button>
          </footer>
        </section>
      )}
    </>
  );
}

export default CourseList;
