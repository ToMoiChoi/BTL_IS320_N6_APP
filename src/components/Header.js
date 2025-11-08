import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allCities, allCategories } from '../data/appData'
const Header = ({ isLoggedIn, userInfo, onLogout }) => {
    const [currentLocation, setCurrentLocation] = useState('Hồ Chí Minh');
    const [currentCategory, setCurrentCategory] = useState('Danh Mục');
    const [isLocationModalVisible, setIsLocationModalVisible] = useState(false);
    const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false);
    const [locationSearchText, setLocationSearchText] = useState('');
    const [categorySearchText, setCategorySearchText] = useState('');
    const [cities, setCities] = useState([[], []]);
    const [categories, setCategories] = useState([[], []]);
    const [showUserMenu, setShowUserMenu] = useState(false);

    // const allCities = [
    //     'Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Cần Thơ', 'Hải Phòng',
    //     'Nha Trang', 'Vũng Tàu', 'Đà Lạt', 'Huế', 'Quy Nhơn',
    //     'Bình Dương', 'Đồng Nai', 'Long An', 'Tiền Giang', 'An Giang'
    // ];

    // const allCategories = [
    //     'Hãng điện thoại', 'Mức giá điện thoại', 'Điện thoại hot',
    //     'iPhone', 'Samsung', 'Xiaomi', 'OPPO', 'realme', 'vivo',
    //     'Phụ kiện', 'Dưới 2 triệu', 'Từ 2-4 triệu', 'Trên 4 triệu'
    // ];

    useEffect(() => {
        const filteredCities = allCities.filter(city =>
            city.toLowerCase().includes(locationSearchText.toLowerCase())
        );
        const midIndex = Math.ceil(filteredCities.length / 2);
        setCities([
            filteredCities.slice(0, midIndex),
            filteredCities.slice(midIndex)
        ]);
    }, [locationSearchText]);

    useEffect(() => {
        const filteredCategories = allCategories.filter(category =>
            category.toLowerCase().includes(categorySearchText.toLowerCase())
        );
        const midIndex = Math.ceil(filteredCategories.length / 2);
        setCategories([
            filteredCategories.slice(0, midIndex),
            filteredCategories.slice(midIndex)
        ]);
    }, [categorySearchText]);

    const handleCitySelect = (city) => {
        setCurrentLocation(city);
        setIsLocationModalVisible(false);
        setLocationSearchText('');
    };

    const handleCategorySelect = (category) => {
        setCurrentCategory(category);
        setIsCategoryModalVisible(false);
        setCategorySearchText('');
    };

    const handleCloseModal = (e, setModalVisible) => {
        if (e.target === e.currentTarget) {
            setModalVisible(false);
        }
    };

    const handleLogout = () => {
        if (onLogout) {
            onLogout();
        }
        setShowUserMenu(false);
    };

    return (
        <header className="bg-gradient-to-r from-red-500 to-pink-500 text-white sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold">Cellphone S</div>

                        {/* Category Button */}
                        <button
                            className="hidden md:flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition"
                            onClick={() => setIsCategoryModalVisible(true)}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.7041 4H10.7041V10H4.7041V4Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M14.7041 4H20.7041V10H14.7041V4Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M4.7041 14H10.7041V20H4.7041V14Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M14.7041 17C14.7041 17.7956 15.0202 18.5587 15.5828 19.1213C16.1454 19.6839 16.9085 20 17.7041 20C18.4998 20 19.2628 19.6839 19.8254 19.1213C20.388 18.5587 20.7041 17.7956 20.7041 17C20.7041 16.2044 20.388 15.4413 19.8254 14.8787C19.2628 14.3161 18.4998 14 17.7041 14C16.9085 14 16.1454 14.3161 15.5828 14.8787C15.0202 15.4413 14.7041 16.2044 14.7041 17Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="text-sm">{currentCategory}</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.7041 9L12.7041 15L18.7041 9"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        {/* Category Modal */}
                        {isCategoryModalVisible && (
                            <div
                                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
                                onClick={(e) => handleCloseModal(e, setIsCategoryModalVisible)}
                            >
                                <div className="bg-white rounded-2xl w-full max-w-md">
                                    <div className="flex items-center p-4 border-b border-gray-200">
                                        <div className="flex items-center flex-1 border border-[#B62616] rounded-lg">
                                            <span className="pl-3 text-[#B62616] text-lg">🔍</span>
                                            <input
                                                type="text"
                                                className="flex-1 h-10 px-3 text-base outline-none"
                                                placeholder="Tìm kiếm danh mục"
                                                value={categorySearchText}
                                                onChange={(e) => setCategorySearchText(e.target.value)}
                                            />
                                        </div>
                                        <button
                                            className="flex items-center pl-4"
                                            onClick={() => setIsCategoryModalVisible(false)}
                                        >
                                            <span className="text-[#B62616] font-bold text-base mr-1">Đóng</span>
                                            <span className="text-[#B62616] text-lg">✕</span>
                                        </button>
                                    </div>

                                    <div className="p-4">
                                        <p className="text-gray-500 text-sm mb-4">
                                            Chọn danh mục sản phẩm bạn quan tâm
                                        </p>

                                        <div className="max-h-64 overflow-y-auto">
                                            <div className="flex">
                                                {categories.map((column, colIndex) => (
                                                    <div key={colIndex} className="flex-1 px-1">
                                                        {column.map((category, index) => (
                                                            <button
                                                                key={`${colIndex}-${index}`}
                                                                className="w-full py-3 border-b border-gray-100 text-left hover:bg-gray-50"
                                                                onClick={() => handleCategorySelect(category)}
                                                            >
                                                                <span className="text-base text-gray-800">{category}</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Location Button */}
                        <div className="px-4 py-2">
                            <button
                                className="flex items-center bg-[#e53935] px-4 py-3 rounded-xl w-full md:w-auto"
                                onClick={() => setIsLocationModalVisible(true)}
                            >
                                <span className="text-white text-lg">📍</span>
                                <span className="text-white text-base font-medium mx-2 flex-1 text-left">
                                    {currentLocation}
                                </span>
                                <span className="text-white text-lg">⌄</span>
                            </button>

                            {/* Location Modal */}
                            {isLocationModalVisible && (
                                <div
                                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
                                    onClick={(e) => handleCloseModal(e, setIsLocationModalVisible)}
                                >
                                    <div className="bg-white rounded-2xl w-full max-w-md">
                                        <div className="flex items-center p-4 border-b border-gray-200">
                                            <div className="flex items-center flex-1 border border-[#B62616] rounded-lg">
                                                <span className="pl-3 text-[#B62616] text-lg">🔍</span>
                                                <input
                                                    type="text"
                                                    className="flex-1 h-10 px-3 text-base outline-none"
                                                    placeholder="Nhập tên tỉnh thành"
                                                    value={locationSearchText}
                                                    onChange={(e) => setLocationSearchText(e.target.value)}
                                                />
                                            </div>
                                            <button
                                                className="flex items-center pl-4"
                                                onClick={() => setIsLocationModalVisible(false)}
                                            >
                                                <span className="text-[#B62616] font-bold text-base mr-1">Đóng</span>
                                                <span className="text-[#B62616] text-lg">✕</span>
                                            </button>
                                        </div>

                                        <div className="p-4">
                                            <p className="text-gray-500 text-sm mb-4">
                                                Vui lòng chọn tỉnh, thành phố để biết chính xác giá, khuyến mãi và tồn kho
                                            </p>

                                            <div className="max-h-64 overflow-y-auto">
                                                <div className="flex">
                                                    {cities.map((column, colIndex) => (
                                                        <div key={colIndex} className="flex-1 px-1">
                                                            {column.map((city, index) => (
                                                                <button
                                                                    key={`${colIndex}-${index}`}
                                                                    className="w-full py-3 border-b border-gray-100 text-left hover:bg-gray-50"
                                                                    onClick={() => handleCitySelect(city)}
                                                                >
                                                                    <span className="text-base text-gray-800">{city}</span>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex-1 max-w-2xl">
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                            <input
                                type="text"
                                placeholder="Bạn muốn mua gì hôm nay?"
                                className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="hidden md:flex items-center gap-2 hover:opacity-80 transition">
                            <span>🛒</span>
                            <span className="text-sm">Giỏ hàng</span>
                            <span className="bg-yellow-400 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">0</span>
                        </button>

                        {/* Login Button */}
                        {/* User Menu */}
                        {isLoggedIn ? (
                            <div className="relative">
                                <button
                                    className="hidden md:flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition"
                                    onClick={() => setShowUserMenu(!showUserMenu)}
                                >
                                    <span className="text-sm">👤 {userInfo?.name || 'Người dùng'}</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                {showUserMenu && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                                        <div className="px-4 py-2 border-b border-gray-100">
                                            <p className="text-sm font-medium text-gray-900">{userInfo?.name}</p>
                                            <p className="text-xs text-gray-500">{userInfo?.email}</p>
                                        </div>
                                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition">
                                            Tài khoản của tôi
                                        </button>
                                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition">
                                            Đơn hàng
                                        </button>
                                        <button
                                            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition"
                                            onClick={handleLogout}
                                        >
                                            Đăng xuất
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className="hidden md:flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition"
                            >
                                <span className="text-sm">Đăng nhập</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_4926_290388)">
                                        <path
                                            d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M9 10C9 10.7956 9.31607 11.5587 9.87868 12.1213C10.4413 12.6839 11.2044 13 12 13C12.7956 13 13.5587 12.6839 14.1213 12.1213C14.6839 11.5587 15 10.7956 15 10C15 9.20435 14.6839 8.44129 14.1213 7.87868C13.5587 7.31607 12.7956 7 12 7C11.2044 7 10.4413 7.31607 9.87868 7.87868C9.31607 8.44129 9 9.20435 9 10Z"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M6.16797 18.849C6.41548 18.0252 6.92194 17.3032 7.61222 16.79C8.30249 16.2768 9.13982 15.9997 9.99997 16H14C14.8612 15.9997 15.6996 16.2774 16.3904 16.7918C17.0811 17.3062 17.5874 18.0298 17.834 18.855"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4926_290388">
                                            <rect width="24" height="24" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;