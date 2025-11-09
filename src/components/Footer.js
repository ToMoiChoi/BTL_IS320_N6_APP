import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t border-gray-200 py-6 md:py-8 lg:px-20">

            {/* Container chính cho 4 cột (Responsive) */}
            <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">

                {/* Cột 1: Tổng đài & Thanh toán */}
                <div className="col-span-1">
                    <h3 className="text-base font-bold text-gray-800 mb-3">Tổng đài hỗ trợ miễn phí</h3>
                    <p className="text-sm text-gray-600">Mua hàng - bảo hành **1800.1508**</p>
                    <p className="text-sm text-gray-600 mb-4">Khiếu nại **1800.1744**</p>

                    <h3 className="text-base font-bold text-gray-800 mb-3 mt-4">Phương thức thanh toán</h3>
                    <div className="flex flex-wrap gap-2">
                        {/* Đây là nơi bạn sẽ chèn các logo thanh toán */}
                        <span className="text-xs bg-white border border-gray-300 px-2 py-1 rounded">Visa</span>
                        <span className="text-xs bg-white border border-gray-300 px-2 py-1 rounded">Master</span>
                        {/* ... thêm các logo thanh toán khác */}
                    </div>
                </div>

                {/* Cột 2: Thông tin và chính sách */}
                <div className="col-span-1">
                    <h3 className="text-base font-bold text-gray-800 mb-3">Thông tin và chính sách</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Mua hàng và thanh toán Online</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Chính sách giao hàng</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Chính sách đổi trả</a></li>
                        {/* ... Thêm các link khác */}
                    </ul>
                </div>

                {/* Cột 3: Dịch vụ và thông tin khác */}
                <div className="col-span-1">
                    <h3 className="text-base font-bold text-gray-800 mb-3">Dịch vụ và thông tin khác</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Khách hàng doanh nghiệp (B2B)</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Ưu đãi thanh toán</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Tuyển dụng</a></li>
                        {/* ... Thêm các link khác */}
                    </ul>

                    {/* Phần QR Code App */}
                    <h3 className="text-sm font-bold text-gray-800 mt-6 mb-3">Mua sắm dễ dàng</h3>
                    <div className="flex items-center space-x-2">
                        {/* Thay thế bằng 

[Image of QR Code]
 thực tế */}
                        <div className="w-12 h-12 bg-gray-300 flex items-center justify-center text-xs">QR</div>
                        <div>
                            <div className="text-xs bg-black text-white p-1 rounded mb-1">Google Play</div>
                            <div className="text-xs bg-black text-white p-1 rounded">App Store</div>
                        </div>
                    </div>
                </div>

                {/* Cột 4: Kết nối & Website thành viên */}
                <div className="col-span-1">
                    <h3 className="text-base font-bold text-gray-800 mb-3">Kết nối với Nhóm 4</h3>
                    <div className="flex space-x-2 mb-4">
                        {/* Thay thế bằng các icons mạng xã hội thực tế */}
                        <a href="#" className="w-8 h-8 bg-red-600 text-white flex items-center justify-center rounded-full text-sm">Y</a>
                        <a href="#" className="w-8 h-8 bg-blue-700 text-white flex items-center justify-center rounded-full text-sm">F</a>
                        {/* ... Thêm các icons khác */}
                    </div>

                    <h3 className="text-base font-bold text-gray-800 mb-3">Website thành viên</h3>
                    <div className="space-y-2">
                        <div className="text-sm font-semibold p-1 bg-green-700 text-white inline-block">DIENTHOAIXINHX</div>
                        <div className="text-sm font-semibold p-1 bg-green-700 text-white inline-block">4CARE</div>
                        <div className="text-sm font-semibold p-1 bg-green-700 text-white inline-block">4OFFICIAL</div>
                    </div>
                </div>

            </div>

            {/* Dạng ký nhận khuyến mãi (có thể đặt thành 1 hàng riêng, nhưng ta đặt tạm ở đây) */}
            <div className="container mx-auto px-4 mt-8 pt-6 border-t border-gray-300">
                <h3 className="text-base font-bold text-gray-800 mb-3">ĐĂNG KÝ NHẬN KHUYẾN MÃI</h3>
                {/* ... Form đăng ký Email và SĐT */}
            </div>

            {/* Phần liên kết nhanh và thông tin bản quyền cuối cùng */}
            <div className="bg-gray-200 mt-6 py-3">
                <div className="container mx-auto px-4 text-xs text-gray-500 text-center">
                    {/* Các liên kết nhanh */}
                    <div className="mb-2 flex flex-wrap justify-center gap-x-4 gap-y-1">
                        <a href="#">iPhone Air</a> | <a href="#">Laptop</a> | <a href="#">Samsung</a> | <a href="#">Xiaomi</a> | <a href="#">LG</a>
                    </div>
                    {/* Thông tin bản quyền */}
                    <p>Công ty TNHH Thương Mại và Dịch Vụ Kỹ Thuật Phụ Nữ - GPDKD: 039133702...</p>
                    <p>Điện thoại: **028.7394.4444**</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;