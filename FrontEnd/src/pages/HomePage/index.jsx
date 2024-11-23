import React from "react";
import ItemsList from "./ItemsList/ItemsList";
import ProductsList from "./ProductsList/ProductsList";
import TopSellingProduct from "./TopSellingProduct";
import ClassicBrand from "./ClassicBrand";
import VoucherList from "./Voucher/Voucher";
import FlashSale from "./FlashSale/FlashSale";

const HomePage = () => {
  return (
    <div>
      <TopSellingProduct />
      <h2>Khám phá theo danh mục</h2>
      <ClassicBrand />
      <FlashSale />
      <VoucherList numberOfVouchers={10} />
      <ItemsList />
      <ProductsList />
    </div>
  );
};

export default HomePage;
