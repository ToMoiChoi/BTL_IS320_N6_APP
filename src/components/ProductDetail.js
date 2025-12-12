// src/components/ProductDetail.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header'; // Giả định Header component đã tồn tại
import Footer from './Footer'; // Giả định Footer component đã tồn tại

// const parsePrice = (priceString) => { /* ... */ }; 

const ProductDetail = ({ products, isLoggedIn, userInfo, onLogout }) => {
    const { productId } = useParams(); // productId ở đây là slug
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedVersion, setSelectedVersion] = useState(null); // Để lưu phiên bản đã chọn (8GB 128GB)
    const [selectedColor, setSelectedColor] = useState(null);     // Để lưu màu sắc đã chọn (Đen titan)

    // Dữ liệu giả định cho hình ảnh thumbnail và màu sắc nếu không có trong `product`
    // Trong thực tế, bạn sẽ lấy data này từ product.images hoặc product.variants
    const dummyThumbnails = [
        "https://via.placeholder.com/60x60?text=Img1",
        "https://via.placeholder.com/60x60?text=Img2",
        "https://via.placeholder.com/60x60?text=Img3",
        "https://via.placeholder.com/60x60?text=Img4",
    ];

    useEffect(() => {
        setLoading(true);
        const findProductBySlug = (slug) => {
            return products.find(p => {
                const pSlug = p.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                return pSlug === slug;
            });
        };

        const foundProduct = findProductBySlug(productId);

        if (foundProduct) {
            setProduct(foundProduct);
            // Thiết lập giá trị mặc định cho phiên bản và màu sắc nếu có
            if (foundProduct.versions && foundProduct.versions.length > 0) {
                setSelectedVersion(foundProduct.versions[0]);
            }
            if (foundProduct.colors && foundProduct.colors.length > 0) {
                setSelectedColor(foundProduct.colors[0]);
            }
        } else {
            setProduct(null);
        }
        setLoading(false);

    }, [productId, products]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <p className="text-xl text-gray-700">Đang tải chi tiết sản phẩm...</p>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <p className="text-xl text-red-600">Không tìm thấy sản phẩm này.</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Header isLoggedIn={isLoggedIn} userInfo={userInfo} onLogout={onLogout} />

            {/* Main Content Area */}
            <div className="container mx-auto px-4 py-6 lg:py-8 flex-grow">
                {/* Product Meta Section */}
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <button className="flex items-center space-x-1 hover:text-red-500">
                        <span className="text-xl">❤️</span><span>Yêu thích</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-red-500">
                        <span className="text-xl">💬</span><span>Hỏi đáp</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-red-500">
                        <span className="text-xl">⚙️</span><span>Thông số</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-red-500">
                        <span className="text-xl">⚖️</span><span>So sánh</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 bg-white p-6 rounded-lg shadow-md">
                    {/* LEFT SIDE: Image Gallery & Features */}
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800 hidden lg:block">
                            {product.name}
                        </h1>
                        <div className="flex flex-col lg:flex-row gap-4">
                            {/* Main Image */}
                            <div className="relative flex-grow lg:w-3/5">
                                <img
                                    src={product.image} // Sử dụng ảnh chính của sản phẩm
                                    alt={product.name}
                                    className="w-full h-auto object-cover rounded-lg shadow"
                                />
                            </div>

                            {/* Features Box */}
                            <div className="lg:w-2/5 bg-gradient-to-br from-pink-100 to-red-100 p-6 rounded-lg shadow-inner">
                                <h3 className="text-lg font-bold text-gray-800 mb-3">TÍNH NĂNG NỔI BẬT</h3>
                                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                                    <li>Chip Exynos 1330 kết hợp RAM 8GB mang đến hiệu năng ổn định, xử lý đa nhiệm mượt mà</li>
                                    <li>Camera chính 50MP chống rung OIS, hỗ trợ chụp đêm và quay phim Full-D sắc nét</li>
                                    <li>Viên pin 5.000 mAh cho thời gian sử dụng dài, sạc nhanh 25W đáp ứng nhu cầu cả ngày</li>
                                    <li>Màn hình Super AMOLED 6.7 inch Full HD+ cùng tần số quét 120Hz mượt mà</li>
                                    {/* Bạn có thể map từ product.highlights hoặc product.features */}
                                </ul>
                            </div>
                        </div>

                        {/* Thumbnail Images */}
                        <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
                            {dummyThumbnails.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Thumbnail ${index}`}
                                    className="w-16 h-16 object-cover rounded-md border border-gray-200 hover:border-blue-500 cursor-pointer transition"
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: Options, Price & Actions */}
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800 lg:hidden">
                            {product.name}
                        </h1>

                        {/* Price Display */}
                        <div className="flex items-end space-x-3 mb-4">
                            <span className="text-4xl font-bold text-red-600">{product.price}</span>
                            {product.originalPrice && (
                                <span className="text-xl text-gray-400 line-through">{product.originalPrice}</span>
                            )}
                        </div>
                        <div className="text-blue-600 text-sm mb-6">
                            Trả giá đến 500.000đ <a href="#" className="font-medium hover:underline">Bình giờ ngay »</a>
                        </div>

                        {/* Phiên bản (Versions) */}
                        <h3 className="font-bold text-gray-800 mb-2">Phiên bản</h3>
                        <div className="flex flex-wrap gap-3 mb-6">
                            {product.versions?.map((version, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedVersion(version)}
                                    className={`px-6 py-3 rounded-lg border-2 text-sm font-medium transition ${selectedVersion?.name === version.name
                                        ? 'border-red-500 text-red-600 bg-red-50'
                                        : 'border-gray-300 bg-white hover:border-gray-400'
                                        }`}
                                >
                                    {version.name}
                                </button>
                            ))}
                        </div>

                        {/* Màu sắc (Colors) */}
                        <h3 className="font-bold text-gray-800 mb-2">Màu sắc</h3>
                        <div className="flex flex-wrap gap-3 mb-6">
                            {product.colors?.map((color, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedColor(color)}
                                    className={`flex items-center gap-2 p-3 rounded-lg border-2 text-sm font-medium transition ${selectedColor?.name === color.name
                                        ? 'border-red-500 text-red-600 bg-red-50'
                                        : 'border-gray-300 bg-white hover:border-gray-400'
                                        }`}
                                >
                                    <img src={color.image} alt={color.name} className="w-10 h-10 object-cover rounded-md" />
                                    <div>
                                        <p>{color.name}</p>
                                        <p className="text-xs text-gray-500">{color.price}</p> {/* Giá có thể thay đổi theo màu */}
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Ưu đãi cho học sinh/sinh viên */}
                        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6 text-blue-800 text-sm">
                            <p className="font-bold mb-1">Ưu đãi cho Học sinh - sinh viên, Giảng viên - giáo viên chỉ còn {product.studentPrice || '5.570.000đ'}</p>
                            <a href="#" className="font-medium hover:underline">Xác thực để mua ngay →</a>
                        </div>

                        {/* Chọn trả góp 0% */}
                        <div className="bg-gradient-to-br from-red-50 to-orange-100 p-4 rounded-lg text-red-800 mb-6">
                            <h3 className="font-bold text-lg mb-2">CHỌN TRẢ GÓP 0%</h3>
                            <p className="text-sm">Trả trước 0đ | Phụ phí 0đ</p>
                            <div className="flex flex-wrap gap-3 mt-3">
                                {/* Logos thẻ ngân hàng */}
                                <img src="https://via.placeholder.com/60x30?text=VISA" alt="VISA" className="h-8" />
                                <img src="https://via.placeholder.com/60x30?text=JCB" alt="JCB" className="h-8" />
                                {/* Thêm các logo khác */}
                            </div>
                        </div>

                        {/* ... Các phần khác như Cam kết sản phẩm nếu có ... */}
                    </div>
                </div>

                {/* Cam kết sản phẩm */}
                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h2 className="text-xl font-bold mb-4">Cam kết sản phẩm</h2>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                        <li>Sản phẩm chính hãng, mới 100%.</li>
                        <li>Bảo hành 12 tháng tại trung tâm ủy quyền.</li>
                        <li>Đổi mới trong 30 ngày đầu nếu có lỗi phần cứng từ nhà sản xuất.</li>
                        {/* Thêm các cam kết khác */}
                    </ul>
                </div>

                {/* Product Description / Specification */}
                <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Mô tả chi tiết & Thông số kỹ thuật</h2>
                    {/* Phần này có thể là một component riêng hoặc render nội dung HTML */}
                    <div className="prose max-w-none text-gray-700"> {/* "prose" from @tailwindcss/typography plugin is useful here */}
                        <p>
                            {product.description || `Chi tiết về ${product.name} đang được cập nhật. Sản phẩm này nổi bật với...`}
                        </p>
                        {/* Ví dụ về một số thông số kỹ thuật chi tiết hơn */}
                        <h3 className="font-bold text-lg mt-6 mb-3">Thông số kỹ thuật</h3>
                        <table className="min-w-full divide-y divide-gray-200">
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Màn hình</td>
                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">Super AMOLED, 6.7 inch, Full HD+</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Chip xử lý</td>
                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">Exynos 1330</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">RAM</td>
                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">{selectedVersion?.ram || '8GB'}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Bộ nhớ trong</td>
                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">{selectedVersion?.storage || '128GB'}</td>
                                </tr>
                                {/* ... Thêm các thông số khác */}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Customer Reviews Section */}
                <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Đánh giá sản phẩm</h2>
                    {/* ... Component đánh giá ... */}
                    <p className="text-gray-700">Chưa có đánh giá nào cho sản phẩm này.</p>
                </div>
            </div>

            <Footer />

            {/* Floating Action Bar (Sticky Footer) */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-3 lg:p-4 flex items-center justify-between z-50">
                <div className="flex items-center space-x-3">
                    <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-md hidden sm:block" />
                    <div>
                        <p className="text-sm font-medium text-gray-800">{product.name} - {selectedColor?.name || product.colors?.[0]?.name || 'Mặc định'}</p>
                        <p className="text-lg font-bold text-red-600">{selectedColor?.price || product.price}</p>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-blue-100 text-blue-600 border border-blue-300 rounded-lg text-sm font-medium hover:bg-blue-200 transition">
                        Trả góp 0%
                    </button>
                    <button className="px-5 py-2 bg-red-600 text-white rounded-lg text-lg font-bold hover:bg-red-700 transition">
                        MUA NGAY
                    </button>
                    <button className="px-3 py-2 bg-gray-100 text-gray-600 border border-gray-300 rounded-lg text-xl hover:bg-gray-200 transition">
                        🛒
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;