import React from "react";
import ItemsList from "./itemsList";
import ProductsList from "./productList";
import TopSellingProduct from "./TopSellingProduct";
import ClassicBrand from "./ClassicBrand";


function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <TopSellingProduct />
      <h2>Khám phá theo danh mục</h2>
      <ItemsList />
      <ProductsList />
      <ClassicBrand/>
    </div>
  );
}


export default HomePage;
