import { useDispatch, useSelector } from "react-redux";
import RestrauntCard from "./RestrauntCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  // const store = useSelector((store) => store);
  // const cartItems = store.cart.items;

  const dispatch = useDispatch();
  const clearCart_ = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="m-4 p-4 rounded-lg shadow-2xl bg-black text-white"
        onClick={clearCart_}
      >
        Clear Cart
      </button>
      <div className="flex flex-wrap justify-center">
        <div>
          {cartItems.map((res, index) => {
            return (
              <div key={index}>
                <RestrauntCard resData={res} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
