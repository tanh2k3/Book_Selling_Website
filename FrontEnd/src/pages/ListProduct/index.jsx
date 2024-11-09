import MenuFilter from "./MenuFilter";
import ViewData from "./ViewData";
import React, { useState, useEffect } from 'react';
import './styles.css';

function ListProduct() {
    
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
            type: "Technology"
          },
          {
            id: "2",
            imgSrc: "src/assets/ketoanviahe.png",
            title: "Kế Toán Vỉa Hè",
            price: "169.000₫",
            discount: "-15%",
            sold: "Đã bán 13310",
            type: "Business"
          },
          {
            id: "3",
            imgSrc: "src/assets/payback.png",
            title: "Payback Time - Ngày Đòi Nợ",
            price: "284.050₫",
            discount: "-5%",
            sold: "Đã bán 32464",
            type: "Finance"
          },
          {
            id: "4",
            imgSrc: "src/assets/maugiao.jpg",
            title: "Trường Mẫu Giáo Vui Nhộn",
            price: "46.000₫",
            discount: "-22%",
            sold: "Đã bán 5",
            type: "Education"
          },
          {
            id: "5",
            imgSrc: "src/assets/tronlanlongloc.png",
            title: "Tròn Lăn Long Lóc",
            price: "143.000₫",
            discount: "-24%",
            sold: "Đã bán 5",
            type: "Children"
          },
          {
            id: "6",
            imgSrc: "src/assets/hoocmon.jpg",
            title: "Giải mã Hoóc-môn Dopamine",
            price: "129.000₫",
            discount: "-35%",
            sold: "Đã bán 1569",
            type: "Health"
          },
          {
            id: "7",
            imgSrc: "src/assets/nexus.jpg",
            title: "Nexus",
            price: "241.300₫",
            discount: "-26%",
            sold: "Đã bán 32464",
            type: "Science Fiction"
          },
          {
            id: "8",
            imgSrc: "src/assets/baysoi.png",
            title: "Dẫn Dắt Một Bầy Sói",
            price: "137.000₫",
            discount: "-30%",
            sold: "Đã bán 5",
            type: "Leadership"
          },
        ];
    
        setBooks(fetchedBooks);
      }, []);
    
    console.log(books);
    return (
        <div className="listproduct">
            {books.length > 0 ? (
                <>
                    <MenuFilter data={books} setData={setBooks} onChange={() => {}} />
                    <ViewData data={books} />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
  }
  
  export default ListProduct;
  