import React, { useEffect, useState } from "react";
import CardItem from "../../../components/CardItem";
import { IoIosFlash } from "react-icons/io";
import Slide from "../../../components/Slide";
import "./FlashSale.css";

// const FlashSale = () => {
//     return (
//         <div className="flash-sale">
//             <h2> F<IoIosFlash />A S H &nbsp; S A L E </h2>
//             <Slide numToShow={6}>
//                 {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
//                     <div className="slide" key={index}>
//                         <CardItem item={{ title: "Sách đang Sale", price: Math.floor(50 + Math.random() * 150) * 1000, discount: Math.floor(20 + Math.random() * 15 * (0.5 + Math.random())), sold: Math.floor(20 + Math.random() * 100) }} />
//                     </div>
//                 ))}
//             </Slide>
//         </div>
//     );
// };

const FlashSale = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3001/product")
            .then((response) => response.json())
            .then((data) => {
                const sortedData = data.data.sort((a, b) => a.price / a.originalPrice - b.price / b.originalPrice).slice(0, 3);
                setBooks(sortedData);
            })
            .catch((error) => {
                console.error("Error fetching books:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="flashsale-loading">Đang tải danh sách sản phẩm Flash Sale...</div>;
    }

    return (
        <div className="flash-sale">
            <h2>
                F<IoIosFlash />A S H &nbsp; S A L E
            </h2>
            <Slide numToShow={3}>
                {books.map((book, index) => (
                    <div className="slide" key={index}>
                        <CardItem
                            item={{
                                title: book.title,
                                price: book.originalPrice,
                                discount: book.discount,
                                sold: book.soldCount,
                            }}
                        />
                    </div>
                ))}
            </Slide>

            {/* <Slide numToShow={6}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                    <div className="slide" key={index}>
                        <CardItem item={{ title: "Sách đang Sale", price: Math.floor(50 + Math.random() * 150) * 1000, discount: Math.floor(20 + Math.random() * 15 * (0.5 + Math.random())), sold: Math.floor(20 + Math.random() * 100) }} />
                    </div>
                ))}
            </Slide> */}
        </div>
    );
};

export default FlashSale;