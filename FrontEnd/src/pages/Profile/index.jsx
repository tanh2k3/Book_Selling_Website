import React, { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Profile.css';
import { useUser } from '../../context/UserContext';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaEye } from "react-icons/fa";

function Profile() {

    const { user, setUser } = useUser();
    const [name, setName] = useState(user.name);
    const [phone, setPhone] = useState(user.sdt);
    const [password, setPassword] = useState('');
    const [ht, setHt] = useState(false);
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingPhone, setIsEditingPhone] = useState(false);
    const [isEditingPassword, setIsEditingPassword] = useState(false);
    const [error, setError] = useState('');
    const handleUpdate = async (field, value) => {
        if (!window.confirm(`Bạn chắc chắn muốn đổi ${field === 'name' ? 'tên' : field === 'phone' ? 'số điện thoại' : 'mật khẩu'} chứ ?`)) 
        {return;}
        try {
            const response = await axios.post(`http://localhost:3001/update-${field}`, { email: user.email, [field]: value });
            if (response.data.status === 'success') {
                setUser(response.data.user);
                setIsEditingName(false);
                setIsEditingPhone(false);
                setIsEditingPassword(false);
                setError('');
            } else {setError(response.data.message);}
        } catch (error) {
            console.error(`Error updating ${field}:`, error);
            setError(`Error updating ${field}`);
        }
    };




    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fetchOrders = async () => {
          try {
            const response = await axios.get(`http://localhost:3001/orders/${user._id}`);
            if (response.status === 200) {
              setOrders(response.data);
            } else {
              alert('Failed to fetch orders');
            }
          } catch (error) {
            console.error('Error fetching orders:', error);
            alert('Error fetching orders');
          }
        };
        fetchOrders();
      }, []);



    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/product")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);
    //Lấy danh sách sản phẩm yêu thích
    const favorites = user.favorite.map(fav => 
        products.find(product => product._id === fav.favProId)).filter(Boolean);
    console.log(user.favorite);
    /*
    const handleRemoveFavorite = (productId) => {
        axios.post('http://localhost:3001/remove-favorite', { userId, productId })
            .then(response => {
                if (response.data.status === 'success') {
                    setFavorites(favorites.filter(fav => fav.fp_id_sp !== productId));
                }
            })
            .catch(error => console.error(error));
    };*/

    const handleCardClick = (productId) => {
        navigate(`/book/${productId._id}`);
    };

    return(
        <div className="content">
            <div>
            <div style={{height:"20px"}}/>
            <h1>Thông tin cá nhân</h1>
            <div className="info-item">
                <span>Họ và tên: </span>
                {isEditingName ? 
                (<>
                    <input type="text" value={name} 
                    onChange={(e) => setName(e.target.value)}/>
                    <button className='content-button2' onClick={() => handleUpdate('name', name)}>Lưu</button>
                    <button className='content-button2' onClick={() => setIsEditingName(false)}>Hủy</button>
                </>)           : 
                (<>
                    <span>{name}</span>
                    <button className='content-button' onClick={() => setIsEditingName(true)}><MdDriveFileRenameOutline style={{"marginBottom":"-4px"}} /></button>
                </>)}
            </div>
            <div className="info-item">
                <span>Số điện thoại: </span>
                {isEditingPhone ? 
                (<>
                    <input type="text" value={phone}
                    onChange={(e) => setPhone(e.target.value)}/>
                    <button className='content-button2' onClick={() => handleUpdate('phone', phone)}>Lưu</button>
                    <button className='content-button2' onClick={() => setIsEditingPhone(false)}>Hủy</button>
                </>)            : 
                (<>
                    <span>{phone}</span>
                    <button className='content-button' onClick={() => setIsEditingPhone(true)}><MdDriveFileRenameOutline style={{"marginBottom":"-4px"}} /></button>
                </>)}
            </div>
            <div style={{height:"15px"}}/>
            <div className="info-item">
                <span>Email: </span>
                <span>{user.email}</span>
            </div>
            <div style={{height:"10px"}}/>
            <div className="info-item">
                <span>Mật khẩu: </span>
                {isEditingPassword ? 
                (<>
                    <input type="text" value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                    <button className='content-button2' onClick={() => handleUpdate('password', password)}>Lưu</button>
                    <button className='content-button2' onClick={() => setIsEditingPassword(false)}>Hủy</button>
                </>)               : 
                (<>
                    {ht ? 
                    <>
                    <span>{user.password}</span>
                    <button className='content-button' onClick={() => setIsEditingPassword(true)}><MdDriveFileRenameOutline style={{"marginBottom":"-4px"}} /></button>
                    <button className='content-button22' onClick={() => setHt(false)}><FaEye /></button>
                    </> : 
                    <>
                    <span>********</span>
                    <button className='content-button' onClick={() => setIsEditingPassword(true)}><MdDriveFileRenameOutline style={{"marginBottom":"-4px"}} /></button>
                    <button className='content-button22' onClick={() => setHt(true)}><FaEye /></button>
                    </>}
                </>)}
            </div>
            {error && <p className="error-message">{error}</p>}
        </div>

        <h1>Đơn hàng</h1>
        <div style={{height:"20px"}}/>
        {orders.length === 0 ? <h2 style={{textAlign:"center"}}>Bạn chưa có đơn hàng nào</h2> :
        <div>
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
            </div>
        </div>
        }
        <div style={{height:"30px"}}/>

        <h1>Sản phẩm yêu thích</h1>
        {favorites.length === 0 ? <h2 style={{textAlign:"center"}}>Không có sản phẩm yêu thích nào</h2> :
        <div>
        <div className="favorites-list">
            {favorites.map(favorite => (
                <div key={favorite._id} className="cardsppp">
                    <img className="cardsppp-image" src={favorite.imgSrc}
                    onClick={() => handleCardClick(favorite)}/>
                    <p className="cardsppp-title">{favorite.title}</p>
                    <p className="cardsppp-price">{favorite.price}₫</p>
                    <button className="cardsppp-button" 
                    //onClick={() => handleRemoveFavorite(favorite.fp_id_sp)}
                    >Xóa</button>
                </div>
            ))}
        </div>
        </div>}
        </div>
    );
}

export default Profile;