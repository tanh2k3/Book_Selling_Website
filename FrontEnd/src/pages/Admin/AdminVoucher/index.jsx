import axios from "axios";
import { useState, useEffect } from "react";
import './AdminVoucher.css'
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

function AdminVoucher() {
    const [currentPage, setCurrentPage] = useState(1);
    const vouchersPerPage = 5;
    const [vouchers, setVouchers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch voucher data from backend
    useEffect(() => {
        fetch("http://localhost:3001/voucher")
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "success") {
                    const sortedData = data.data.sort((a, b) => a.usedCount - b.usedCount);
                    setVouchers(sortedData);
                } else {
                    console.error("Error fetching vouchers:", data.message);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching vouchers:", error);
                setLoading(false);
            });
    }, []);

    // Delete voucher
    // Delete voucher
    const handleDelete = async (voucherId) => {
        // Hiển thị cảnh báo xác nhận trước khi xóa
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xoá voucher này không?");
        if (!confirmDelete) {
            return; // Người dùng chọn "Hủy"
        }

        try {
            const jwt = localStorage.getItem('token');
            const response = await axios.delete(`http://localhost:3001/voucher/${voucherId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`, // Gửi token trong header
                },
            });
            if (response.status === 200 && response.data.status === "success") {
                // Xóa voucher khỏi danh sách hiển thị
                setVouchers(vouchers.filter((voucher) => voucher._id !== voucherId));
                alert("Xoá voucher thành công!"); // Thông báo thành công
            } else {
                console.error("Error deleting voucher:", response.data.message);
                alert("Đã xảy ra lỗi khi xoá voucher!"); // Thông báo lỗi
            }
        } catch (error) {
            console.error("Error deleting voucher:", error);
            alert("Không thể xoá voucher, vui lòng thử lại!"); // Thông báo lỗi
        }
    };


    if (loading) {
        return <div className="voucher-loading">Đang tải danh sách voucher...</div>;
    }

    const indexOfLastVoucher = currentPage * vouchersPerPage;
    const indexOfFirstVoucher = indexOfLastVoucher - vouchersPerPage;
    const currentVouchers = vouchers.slice(indexOfFirstVoucher, indexOfLastVoucher);

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(vouchers.length / vouchersPerPage)));
    };

    return (
        <>
            <div style={{ height: "20px" }} />
            <h1>Quản lý voucher</h1>
            <div style={{ height: "20px" }} />
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã voucher</th>
                        <th>Giá trị</th>
                        <th>Giảm tối đa</th>
                        <th>Đơn hàng tối thiểu</th>
                        <th>Hạn sử dụng</th>
                        <th>Đã sử dụng</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {currentVouchers.map((voucher, index) => (
                        <tr key={voucher._id}>
                            <td className="stt">{indexOfFirstVoucher + index + 1}</td>
                            <td>{voucher.voucherCode}</td>
                            <td>
                                {voucher.voucherType === 1
                                    ? `${voucher.voucherValue.toLocaleString()}₫`
                                    : `${voucher.voucherValue}%`}
                            </td>
                            <td>
                                {voucher.voucherType === 1
                                    ? `${voucher.voucherValue.toLocaleString()}₫`
                                    : `${voucher.maxDiscountValue.toLocaleString()}₫`}
                            </td>
                            <td>{voucher.minOrderValue.toLocaleString()}₫</td>
                            <td>{voucher.voucherExpiration}</td>
                            <td>{voucher.usedCount}</td>
                            <td>
                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(voucher._id)}
                                >
                                    Xoá
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button className="arrow" onClick={handlePrevPage} disabled={currentPage === 1}>
                    <IoMdArrowDropleft style={{ marginBottom: "-3px" }} />
                </button>
                <span> {currentPage} </span>
                <button
                    className="arrow"
                    onClick={handleNextPage}
                    disabled={currentPage === Math.ceil(vouchers.length / vouchersPerPage)}
                >
                    <IoMdArrowDropright style={{ marginBottom: "-3px" }} />
                </button>
            </div>
        </>
    );
}

export default AdminVoucher;
