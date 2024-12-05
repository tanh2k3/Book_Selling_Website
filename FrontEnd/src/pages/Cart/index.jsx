import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../context/UserContext';
import './Cart.css';

function Cart() {
    const { user } = useUser();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [cartproducts, setCartproducts] = useState([]);
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        phone: '',
        address: '',
        paymentMethod: ''
    });

    useEffect(() => {
        fetch("http://localhost:3001/product")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    // Update cartproducts when products or user.cart changes
    useEffect(() => {
        const updatedCartProducts = user.cart.map(cartItem => {
            const product = products.find(prod => prod._id === cartItem.product);
            return product ? { ...product, quantity: cartItem.quantity } : null;
        }).filter(Boolean);
        setCartproducts(updatedCartProducts);
    }, [products, user.cart]);

    const calculateTotal = () => {
        return cartproducts.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    };

    const calculateTt = () => {
        return cartproducts.reduce((tt, item) =>
            tt + item.quantity, 0);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleclick = (product) => {
        navigate(`/book/${product._id}`);
    };

    const handleRemove = (product) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng không?')) {
            removeFromCart(product);
        }
    };

    const removeFromCart = async (product) => {
        try {
            // Gửi yêu cầu xóa sản phẩm khỏi giỏ hàng
            await axios.delete(`http://localhost:3001/cart/${user._id}/${product._id}`);
    
            // Cập nhật lại giỏ hàng trong giao diện
            const updatedCartProducts = cartproducts.filter(item => item._id !== product._id);
            setCartproducts(updatedCartProducts);
    
            // Cập nhật giỏ hàng trong context người dùng
            user.cart = user.cart.filter(cartItem => cartItem.product !== product._id);
    
            alert("Sản phẩm đã được xóa khỏi giỏ hàng.");
        } catch (error) {
            console.error("Lỗi khi xóa sản phẩm:", error);
            alert("Không thể xóa sản phẩm. Vui lòng thử lại.");
        }
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!customerInfo.name || !customerInfo.phone || !customerInfo.address || !customerInfo.paymentMethod) {
            alert('Vui lòng điền đầy đủ thông tin.');
            return;
        }

        if (customerInfo.paymentMethod === 'COD') {
            handleOrder(e);
        } else if (customerInfo.paymentMethod === 'BANKING') {
            handlePayment();
        }
    };

    const handleOrder = async (e) => {
        // Logic đặt hàng
    };

    const handlePayment = () => {
        navigate('/');
    };

    return (
        <div>
            <div style={{ "height": "10px" }}></div>
            <h1 style={{ fontFamily: 'Arial', marginLeft: '50px' }}>Giỏ hàng của bạn</h1>
            <h3 style={{ fontFamily: 'Arial', marginLeft: '50px', padding: '10px' }}>TỔNG CỘNG: {calculateTotal()}₫</h3>
            <div className='giohang'>
                <div className="cardgh-zone">
                    {cartproducts.length > 0 ? (
                        <div className="cart-main">
                            {cartproducts.map((product, index) => (
                                <div className="cardgh" key={index}>
                                    <img onClick={()=>handleclick(product)} src={product.imgSrc} alt={product.title} />
                                    <div className="cardgh-text">
                                        <p style={{ "height": "40px" }}>{product.title}</p>
                                        <p>Số lượng: {product.quantity}</p>
                                        <p>Giá: {product.price}₫</p>
                                        <div className="cardghprice">
                                            <div className="cargh-pr">Tổng: </div>
                                            <div className="cardgh-price">{product.price * product.quantity}₫</div>
                                        </div>
                                    </div>
                                    <div className='cardgh-button'>
                                        <button onClick={() => handleRemove(product)}>Xóa</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p style={{ fontFamily: "Arial", marginLeft: "50px" }}>Giỏ hàng của bạn đang trống.</p>
                    )}
                </div>
                <div className='gh-form'>
                    <form onSubmit={handleSubmit}>
                        <h2>Thông tin đặt hàng</h2>
                        <div>
                            <input className='gh-form-input' name='name' type='text' placeholder='Họ và tên' value={customerInfo.name} onChange={handleInputChange} />
                        </div>
                        <div>
                            <input className='gh-form-input' name='phone' type='text' placeholder='Số điện thoại' value={customerInfo.phone} onChange={handleInputChange} />
                        </div>
                        <div>
                            <input className='gh-form-input' name='address' type='text' placeholder='Địa chỉ' value={customerInfo.address} onChange={handleInputChange} />
                        </div>
                        <div className='gh-form-h'>Tổng giá trị: {calculateTotal()}₫ ({calculateTt()} sản phẩm)</div>
                        <div className='gh-form-h'>Phương thức thanh toán:</div>
                        <div className='gh-form-label'>
                            <label>
                                <input name='paymentMethod' value="BANKING" type="radio" onChange={handleInputChange} /> BANKING
                            </label>
                            <label>
                                <input name='paymentMethod' value="COD" type="radio" onChange={handleInputChange} /> Thanh toán khi giao hàng
                            </label>
                        </div>
                        <div className='gh-form-h'>Áp dụng Voucher
                            <input type='text' placeholder='Mã Voucher' />
                            <button>Áp dụng</button>
                        </div>
                        <div>Thanh toán: ₫</div>
                        <div className='gh-form-button'><button type='submit'>Tiếp tục</button></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Cart;
