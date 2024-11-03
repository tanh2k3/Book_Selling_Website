
import React, { useState, useEffect } from "react";
import ItemsList from "./itemsList";
import ProductsList from "./productList";
import TopSellingProduct from "./TopSellingProduct";
import ClassicBrand from "./ClassicBrand";
import VoucherList from "./Voucher/Voucher";
import FlashSale from "./FlashSale/FlashSale";

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {

    const fetchedBooks = [
      {
        id: "1",
        imgSrc: "src/assets/gpt.png",
        title: "Chat GPT Thực Chiến",
        price: "99.710₫",
        discount: "-41%",
        sold: "Đã bán 346",
      },
      {
        id: "2",
        imgSrc: "src/assets/ketoanviahe.png",
        title: "Kế Toán Vỉa Hè",
        price: "169.000₫",
        discount: "-15%",
        sold: "Đã bán 13310",
      },
      {
        id: "3",
        imgSrc: "src/assets/payback.png",
        title: "Payback Time - Ngày Đòi Nợ",
        price: "284.050₫",
        discount: "-5%",
        sold: "Đã bán 32464",
      },
      {
        id: "4",
        imgSrc: "src/assets/maugiao.jpg",
        title: "Trường Mẫu Giáo Vui Nhộn",
        price: "46.000₫",
        discount: "-22%",
        sold: "Đã bán 5",
      },
      {
        id: "5",
        imgSrc: "src/assets/tronlanlongloc.png",
        title: "Tròn Lăn Long Lóc",
        price: "143.000₫",
        discount: "-24%",
        sold: "Đã bán 5",
      },
      {
        id: "6",
        imgSrc: "src/assets/hoocmon.jpg",
        title: "Giải mã Hoóc-môn Dopamine",
        price: "129.000₫",
        discount: "-35%",
        sold: "Đã bán 1569",
      },
      {
        id: "7",
        imgSrc: "src/assets/nexus.jpg",
        title: "Nexus",
        price: "241.300₫",
        discount: "-26%",
        sold: "Đã bán 32464",
      },
      {
        id: "8",
        imgSrc: "src/assets/baysoi.png",
        title: "Dẫn Dắt Một Bầy Sói",
        price: "137.000₫",
        discount: "-30%",
        sold: "Đã bán 5",
      },

    ];

    setBooks(fetchedBooks);
  }, []);

  return (
    <div>
      <TopSellingProduct />

      <h2>Khám phá theo danh mục</h2>
      <ClassicBrand />

      <FlashSale />
      <VoucherList numberOfVouchers={10} />

      <h2>Danh sách sản phẩm</h2>
      <ItemsList />
      <ProductsList books={books} />
    </div>
  );
};

export default HomePage;

