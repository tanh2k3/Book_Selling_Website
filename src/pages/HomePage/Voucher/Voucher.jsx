import React from 'react';

const Voucher = ({ vouchers }) => {
    return (
        <div>
            <h2>Vouchers</h2>
            <div className="voucher-list">
                {vouchers.map((voucher) => (
                    <div key={voucher.code} className="voucher-item">
                        <h3>Mã: {voucher.code}</h3>
                        <p>Giảm: {voucher.type === 'percentage' ? `${voucher.amount}%` : `${voucher.amount}₫`}</p>
                        <p>Áp dụng cho đơn hàng từ: {voucher.minOrderValue}₫</p>
                        <p>Thông tin: {voucher.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Voucher;
