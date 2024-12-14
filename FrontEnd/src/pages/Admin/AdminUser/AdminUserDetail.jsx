import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
//import ProductDetails from './ProductDetails';
import './AdminUser.css';
import { FaArrowLeft } from "react-icons/fa6";

function AdminUserDetail(props) 
{
    const user = props.user;
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/product")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await axios.get(`http://localhost:3001/orders/${user._id}`);
            if (response.status === 200) setOrders(response.data);
            else alert('Internal server error');
        }
        fetchOrders();
    },[]);

    const favoriteProducts = user.favorite.map(fav => 
        products.find(product => product._id === fav.favProId)).filter(Boolean);
    console.log(user.favorite);

    useEffect(() => {
        console.log(orders);
    }, [orders]);

    const handleCloseFP = () => {
        setSelectedProductId(null);
    };

    return (<>
        {selectedProductId ? <div/>//<ProductDetails productId={selectedProductId} onClose={handleCloseFP}/> 
        :
        <div id="user-detail-container">
            <div id="user-detail-content">
                <div className='adusdehd'>
                    <h1>Thông tin chi tiết khách hàng</h1>
                    <button onClick={props.onClose}><FaArrowLeft/></button>
                </div>
                <h3 className='adush3'>Thông tin cá nhân</h3>
                <div style={{height:"10px"}}/>
                <div id="user-information">
                    <div>
                        <p>Họ và tên: {user.name}</p>
                        <div style={{height:"5px"}}/>
                        <p>Email: {user.email}</p>
                        <div style={{height:"5px"}}/>
                        <p>Số điện thoại: {user.sdt}</p>
                        <div style={{height:"5px"}}/>
                    </div>
                </div>
                <h3 className='adush3'>Đơn hàng</h3>

                {orders.length === 0 ? <p style={{textAlign:"center"}}>Không có đơn hàng nào</p> :
                <div id="orders">
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Số lượng sản phẩm</th>
                                <th>Tổng giá trị</th>
                                <th>Trạng thái</th>
                                <th>Phương thức thanh toán</th>
                                <th>Ngày đặt</th>
                                <th>Ngày giao</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index}>
                                    <td className="stt">{index+1}</td>
                                    <td className="stt">{order.total}</td>
                                    <td>{order.total}</td>
                                    <td>{order.status}</td>
                                    <td>{order.total}</td>
                                    <td>{order.createdAt}</td>
                                    <td>{order.createdAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> }

                <h3 className='adush3'>Sản phẩm yêu thích</h3>
                {favoriteProducts.length === 0 ? <p style={{textAlign:"center"}}>Không có sản phẩm yêu thích nào</p> : 
                <div id="favorite-products">
                    <ul>
                        {favoriteProducts.map((favorite, index) => (
                            <div key={index} className="kardspp">
                                <img className="kardspp-image" src={favorite.imgSrc}
                                //onClick={()=>setSelectedProductId(favorite._id)}
                                />
                                <p className="kardspp-title">{favorite.title}</p>
                                <p className="kardspp-price">{favorite.price}₫</p>
                            </div>
                        ))}
                    </ul>
                </div> }
            </div>
        </div>}</>
    )
}

export default AdminUserDetail