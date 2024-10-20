import React from "react";
import ItemsList from "./itemsList";
import ProductsList from "./productList";


function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Khám phá theo danh mục</h2>
      <ItemsList />
      <ProductsList />
    </div>
  );
}


export default HomePage;
