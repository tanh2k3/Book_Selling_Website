import React from 'react';
import ItemsList from './ItemsList/ItemsList';
import ProductsList from './ProductsList/ProductsList';
import TopSellingProduct from './TopSellingProduct';
import ClassicBrand from './ClassicBrand';
import VoucherList from './Voucher/Voucher';
import FlashSale from './FlashSale/FlashSale';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <TopSellingProduct />
      <h2>Khám phá theo danh mục</h2>
      <ClassicBrand />
      <FlashSale />
      <VoucherList numberOfVouchers={10} />
      <h2>Danh sách sản phẩm</h2>
      <ItemsList />
      <ProductsList />
      <Footer />
    </div>
  );
};

export default HomePage;
