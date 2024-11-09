import { FaCircle } from "react-icons/fa";
import './Footer.css';

function Footer()
{
    return(
        <footer className="fter">
            <hr/>
            <div className="footer">
              <h1>Tên website</h1>
              <br/>
              <p className="footer-chu">Giới thiệu về trang web</p>
              <br/>
              <p className="footer-mxh">Facebook: ... <FaCircle style={{fontSize : '5px'}} /> Instagram: ... <FaCircle style={{fontSize : '5px'}}/> Tiktok: ...</p>
              <br/>
            </div>
            <p className="footer-nam">&copy; {new Date().getFullYear()} Tên website</p>
        </footer>
    );
}

export default Footer