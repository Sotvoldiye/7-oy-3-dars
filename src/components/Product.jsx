import React from "react";
import { Link } from "react-router-dom";
import {
  addToCart,
  decrementAmount,
  incrementAmount,
  deleteCart
} from "../app/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Product({ product }) {
  const dispatch = useDispatch();
 
  const { cart } = useSelector((store) => store.cart);
  const isAdded = cart.find((i) => i.id == product.id);
 
  const handleBuy = (e) => {
    e.preventDefault();
    dispatch(addToCart({ ...product, amount: 1 }));
    console.log(product);
  };
  const increment = (e) => {
    e.preventDefault(); 
    console.log(isAdded.amount);
    dispatch(incrementAmount(product.id));
  };


  const decrement = (e)=>{
    e.preventDefault(),
    dispatch(decrementAmount(product.id))
  }

  return (
    <Link
      className="bg-gray-200 rounded-2xl p-2 card w-64 "
      to={`/product/${product.id}`}
    >
      <figure className="px-4 pt-4">
        <div className="h-40 w-full bg-gray-200 flex items-center justify-center">
          <img className="w-50 max-h-70" src={product.thumbnail} alt="" />
        </div>
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{product.title}</h2>
        <div className="card-actions justify-end w-full items-center">
        <p>${product.price}</p>
          <div>
          <div className="flex justify-between items-center w-full">
              {!isAdded && (
                <button
                  className="btn btn-warning"
                  onClick={(e) => handleBuy(e)}
                >
                  Buy
                </button>
              )}
            </div>
            {isAdded && (
              <div className="items-center mx-auto">
                <button
                  className="bg-gray-300 py-2 px-3"
                  onClick={increment}>
                  +
                </button>
                <span>{isAdded.amount}</span>
                <button
                  className="bg-gray-300 py-2 px-3"
                  onClick={decrement}>
                  -
                </button>
              </div>
            )}
           
          </div>
        </div>
      </div>
    </Link>
  );
  
}

export default Product;

