// src/components/ProductDetail.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header'; // Giả định Header component đã tồn tại
import Footer from './Footer'; // Giả định Footer component đã tồn tại

const ProductDetail = ({ products }) => {
    // 1. Lấy tham số 'productId' (slug) từ URL
    const { productId } = useParams();

    // State để lưu trữ sản phẩm chi tiết
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // 2. Tìm sản phẩm trong mảng products dựa trên slug
        // Chúng ta cần một cách để so sánh slug với dữ liệu sản phẩm

        // Tạo slug từ tên sản phẩm để tìm kiếm (PHẢI TRÙNG KHỚP VỚI LOGIC TRONG CARD.JS)
        const findProductBySlug = (slug) => {
            return products.find(p => {
                const pSlug = p.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                return pSlug === slug;
            });
        };

        const foundProduct = findProductBySlug(productId);

        if (foundProduct) {
            setProduct(foundProduct);
        } else {
            setProduct(null); // Không tìm thấy sản phẩm
        }
        setLoading(false);

    }, [productId, products]); // Chạy lại khi slug hoặc danh sách products thay đổi

    if (loading) {
        return <div className="text-center p-10">Đang tải chi tiết sản phẩm...</div>;
    }

    if (!product) {
        return <div className="text-center p-10 text-red-600">Không tìm thấy sản phẩm này.</div>;
    }

    // 3. Hiển thị chi tiết sản phẩm
    return (
        <>
            <Header /* ... props */ />
            <div className="container mx-auto px-4 py-8 bg-white min-h-screen">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">{product.name}</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cột 1: Hình ảnh chính */}
                    <div className="lg:col-span-1">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full object-cover rounded-lg shadow-md"
                        />
                        {/* Khu vực ảnh phụ và video */}
                    </div>

                    {/* Cột 2: Thông tin giá và nút mua hàng */}
                    <div className="lg:col-span-1">
                        <p className="text-4xl font-bold text-red-600 mb-2">{product.price}</p>
                        {product.originalPrice && (
                            <p className="text-xl text-gray-400 line-through mb-6">
                                {product.originalPrice}
                            </p>
                        )}

                        {/* Nút mua hàng/Thêm vào giỏ */}
                        <button className="w-full py-3 bg-red-600 text-white text-lg font-bold rounded-lg hover:bg-red-700 transition mb-4">
                            MUA NGAY (Giao hàng tận nơi)
                        </button>

                        {/* Thông số cơ bản (có thể chi tiết hơn) */}
                        <div className="border border-gray-200 p-4 rounded-lg">
                            <h3 className="font-bold mb-2">Thông số cơ bản</h3>
                            <ul>
                                {product.specs.map((spec, index) => (
                                    <li key={index} className="text-sm text-gray-700">{spec}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Cột 3: Chính sách, bảo hành */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold mb-4">Chính sách & Bảo hành</h3>
                        {/* ... Nội dung chính sách chi tiết ... */}
                    </div>
                </div>

                {/* Khu vực mô tả chi tiết / Đánh giá */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-4">Mô tả chi tiết sản phẩm</h2>
                    <p className="text-gray-700">
                        {/* product.description hoặc nội dung chi tiết */}
                        Đây là nơi chứa nội dung mô tả chi tiết, các tính năng nổi bật, và thông tin kỹ thuật sâu hơn của {product.name}.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetail;