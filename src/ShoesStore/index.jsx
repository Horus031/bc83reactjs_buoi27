import React from "react";
import { useSelector } from "react-redux";
import Shoes from "./shoes";
import ShoppingCart from "./shoppingCart";

export default function ShoesStore() {
  const productList = useSelector((state) => state.shoesStore.productList);

  const renderProductList = () => {
    return productList.map((product) => {
      return <Shoes key={product.id} product={product} />;
    });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-center text-4xl">Shoes Shop</h1>
      <ShoppingCart/>
      <div className="grid grid-cols-3 gap-4">{renderProductList()}</div>
    </div>
  );
}
