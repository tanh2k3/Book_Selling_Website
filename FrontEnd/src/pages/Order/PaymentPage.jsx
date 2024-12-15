import React, { useEffect } from 'react';
import QrCode from 'qrcode.react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css';

function PaymentPage() {

    const navigate = useNavigate();
    const { user } = useUser();
    const location = useLocation();
    const total = location.state?.total || 0;

    useEffect(() => {
        if (!location.state) {
            navigate('/order'); // Redirect to cart if no state is found
        }
    }, [location, navigate]);

    function crc16_ccitt(data) {
        // Tham số CRC-16-CCITT
        const polynomial = 0x1021;
        let crc = 0xFFFF;
        // Chuyển đổi chuỗi đầu vào thành bytes
        const bytesData = new TextEncoder().encode(data);
        // Xử lý từng byte
        for (let byte of bytesData) {
            crc ^= byte << 8;
            for (let i = 0; i < 8; i++) {
                if (crc & 0x8000) {
                    crc = (crc << 1) ^ polynomial;
                } else {
                    crc <<= 1;
                }
                crc &= 0xFFFF; // Đảm bảo CRC vẫn là giá trị 16-bit
            }
        }
        // Trả về CRC dưới dạng chuỗi thập lục phân
        return crc.toString(16).toUpperCase().padStart(4, '0');
    }

    let message = "Thanh toan hoa don Bookie " + user.email;
    let money = total;
    let money_string = money.toString();
    let input_data = '00020101021138620010A00000072701320006970454011899MM24169M631118280208QRIBFTTA5303704540'+money_string.length+money_string+'5802VN62'+(23+message.length)+'0515MOMOW2W6311182808'+message.length.toString().padStart(2, '0')+message+'80038546304';
    // Calculate CRC
    const crc_result = crc16_ccitt(input_data);
    input_data += crc_result;

    const handleCompletePayment = async (e) => {
        e.preventDefault();
        alert('Bạn đã đặt hàng thành công!');
        navigate('/');
    };

    return (
        <div>
            <Header />
        <div className='paymentpage'>
            <h1>Thanh Toán</h1>
            <div className='pmqrcode'>
                <QrCode value={input_data} size={200}/>
            </div>
            <p>Vui lòng quét mã QR trên bằng ứng dụng MOMO hoặc app ngân hàng để thanh toán</p>
            <p>Cảm ơn quý khách đã mua sắm tại Bookie! Đơn hàng của bạn sẽ được chúng tôi xử lý và giao đến bạn nhanh nhất có thể.</p>
            <button onClick={handleCompletePayment}>Hoàn tất</button>
        </div>
            <Footer />
        </div>
    );
}

export default PaymentPage;
