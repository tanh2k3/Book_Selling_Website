import React from 'react';
import "./Voucher.css";

// Function to generate a voucher code
const generateVoucherCode = () => {
    const prefix = 'KCAAB';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = prefix;
    for (let i = 0; i < 10; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
};

// Function to generate a random voucher value
const generateVoucherValue = () => {
    return Math.floor(Math.random() * 26) + 5; // Random value between 5 and 30
};

const generateVoucherExpiration = () => {
    const cal = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000); // Tạo đối tượng Date từ số
    const ans = cal.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    return ans;
}

const Voucher = ({ voucherValue, minOrderValue, expiration, voucherCode }) => (
    <div className="voucher">
        <img src="src/assets/voucher.png" alt="Voucher" />
        <p><b>Giảm {voucherValue}% giá trị đơn hàng</b></p>
        <p>Đơn tối thiểu: {minOrderValue.toLocaleString('vi-VN')}₫</p>
        <p id="hsd">HSD: {expiration} </p>
        <p> Code: {voucherCode}</p>
    </div>
);

const VoucherList = ({ numberOfVouchers }) => {
    const vouchers = Array.from({ length: numberOfVouchers }, () => {
        const voucherValue = generateVoucherValue();
        const minOrderValue = (30 + 4 * voucherValue) * 1000;
        return {
            voucherValue,
            minOrderValue,
            expiration: generateVoucherExpiration(),
            voucherCode: generateVoucherCode()
        };
    });

    return (
        <div className="voucher-list">
            <h2>VOUCHER</h2>
            <div id="voucher-list-div">
                {vouchers.map((voucher, index) => (
                    <Voucher
                        key={index}
                        voucherValue={voucher.voucherValue}
                        minOrderValue={voucher.minOrderValue}
                        expiration={voucher.expiration}
                        voucherCode={voucher.voucherCode}
                    />
                ))}
            </div>

        </div>
    );
};

export default VoucherList;
