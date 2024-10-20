import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle, MdLogout } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
//import { useUser } from './UserContext';
import './Header.css';
import logo from '../../assets/logo.png';

function Header() {
  /*
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { setUser } = useUser();
  const handleLogout = () => {
    if (window.confirm('Bạn có chắc chắn muốn đăng xuất không ?')) 
    {
      // Xóa thông tin người dùng khỏi localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      // Cập nhật trạng thái người dùng
      setUser(null);
      navigate('/');
    }
  };
  const {user} = useUser();
  
 const user=1;
 const handleLogout = () => {const test = 0;};

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigate(`/productfilter?search=${encodeURIComponent(searchTerm)}`);
    }
  };
  
  const [hienThiOptions1, setHienThiOptions1] = useState(false);
  const hienThiCacOption1 = () => {setHienThiOptions1(true);};
  const anCacOption1 = () => {
    setTimeout(() => {
      setHienThiOptions1(null);}, 2000);};

  const [hienThiOptions2, setHienThiOptions2] = useState(false);
  const hienThiCacOption2 = () => {setHienThiOptions2(true);};
  const anCacOption2 = () => {
    setTimeout(() => {
      setHienThiOptions2(null);}, 2000);};

  const [hienThiOptions3, setHienThiOptions3] = useState(false);
  const hienThiCacOption3 = () => {setHienThiOptions3(true);};
  const anCacOption3 = () => {
    setTimeout(() => {
      setHienThiOptions3(null);}, 2000);};
      

    return(
    <div className="navbar">
        <Link to="/"><img src={logo} className="logo"/></Link>
        <div className="buttons">
          <div onMouseEnter={hienThiCacOption1} onMouseLeave={anCacOption1}
          className="nav-button">Áo</div>
            {hienThiOptions1 && (
              <div className="Options1">
                <Link style={{textDecoration : 'none'}} 
                to="/productfilter/ao-khoac" className="Option">Áo khoác</Link>
                <br/>
                <Link style={{textDecoration : 'none'}} 
                to="/productfilter/ao-so-mi" className="Option">Áo sơ mi</Link>
                <br/>
                <Link style={{textDecoration : 'none'}} 
                to="/productfilter/ao-thun" className="Option">Áo thun</Link>
                <br/>
                <Link style={{textDecoration : 'none'}} 
                to="/productfilter/ao-polo" className="Option">Áo Polo</Link>
              </div>
            )}
          <div onMouseEnter={hienThiCacOption2} onMouseLeave={anCacOption2}
          className="nav-button" >Quần</div>
          {hienThiOptions2 && (
              <div className="Options2">
                <Link style={{textDecoration : 'none'}} 
                to="/productfilter/quan-short" className="Option">Quần Short</Link>
                <br/>
                <Link style={{textDecoration : 'none'}} 
                to="/productfilter/quan-jeans" className="Option">Quần Jeans</Link>
                <br/>
                <Link style={{textDecoration : 'none'}} 
                to="/productfilter/quan-au" className="Option">Quần Âu</Link>
              </div>
            )}
          <div onMouseEnter={hienThiCacOption3} onMouseLeave={anCacOption3}
          className="nav-button">Giày</div>
          {hienThiOptions3 && (
              <div className="Options3">
                <Link style={{textDecoration : 'none'}} 
                to="/productfilter/giay-tay" className="Option">Giày Tây</Link>
                <br/>
                <Link style={{textDecoration : 'none'}} 
                to="/productfilter/giay-the-thao" className="Option">Giày thể thao</Link>
              </div>
            )}
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search" className="tim-kiem" onChange={handleInputChange}/>
          <div className="search-icon" onClick={handleSearch}>
          <FaSearch />
          </div>
        </div>
        <div className="extra-buttons">
        {(!user) ?
          (<><Link style={{textDecoration : 'none'}} 
          to="/login" className="nav2"><LuLogIn />Đăng nhập</Link>
          <Link style={{textDecoration : 'none'}} 
          to="/register" className="nav2"><LuLogIn />Đăng ký</Link></>)
                 :
          (<>
          <Link style={{textDecoration : 'none'}}
          to="/giohang" className="navv2"><FaShoppingCart /></Link>
          <Link style={{textDecoration : 'none'}} 
          to="/profile" className="navv2"><MdAccountCircle /></Link>
          <button className='navv2' onClick={handleLogout}><MdLogout /></button></>)
        }
        </div> 
    </div>
    );
    */
    const [searchTerm, setSearchTerm] = useState('');
    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };
    return(
      <div className="navbar">
        <img src={logo} className="logo"/>
        <div className="search-container">
          <input type="text" placeholder="Search" className="tim-kiem" onChange={handleInputChange}/>
          <div className="search-icon"><FaSearch /></div>
        </div>
        <div className="extra-buttons">
          <div className="nav2"><LuLogIn />Đăng nhập</div>
          <div className="nav2"><LuLogIn />Đăng ký</div>
        </div> 
      </div>
      );
}

export default Header