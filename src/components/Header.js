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
                            className="max-[1024px]:hidden flex gap-2 bg-white/20 px-4 py-2 h-max rounded-xl hover:bg-white/30 transition "
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
                            <span className="text-sm items-center">{currentCategory}</span>
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
                                className="flex items-center bg-white/20 px-4 py-3 rounded-xl md:w-auto"
                                onClick={() => setIsLocationModalVisible(true)}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.7041 11C9.7041 11.7956 10.0202 12.5587 10.5828 13.1213C11.1454 13.6839 11.9085 14 12.7041 14C13.4998 14 14.2628 13.6839 14.8254 13.1213C15.388 12.5587 15.7041 11.7956 15.7041 11C15.7041 10.2044 15.388 9.44129 14.8254 8.87868C14.2628 8.31607 13.4998 8 12.7041 8C11.9085 8 11.1454 8.31607 10.5828 8.87868C10.0202 9.44129 9.7041 10.2044 9.7041 11Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13.7239 21.206C13.3419 21.4323 12.8955 21.525 12.455 21.4696C12.0145 21.4142 11.605 21.2138 11.2909 20.9L7.04692 16.657C6.14375 15.7536 5.47005 14.647 5.08221 13.4298C4.69436 12.2127 4.60364 10.9203 4.81763 9.66088C5.03162 8.40146 5.5441 7.2116 6.3122 6.19084C7.0803 5.17008 8.08168 4.34811 9.23257 3.79368C10.3835 3.23926 11.6504 2.96851 12.9274 3.00408C14.2043 3.03965 15.4542 3.38051 16.5725 3.99814C17.6907 4.61578 18.6448 5.49222 19.3548 6.55416C20.0649 7.6161 20.5104 8.83264 20.6539 10.102" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21.7041 15H19.2041C18.8063 15 18.4247 15.158 18.1434 15.4393C17.8621 15.7206 17.7041 16.1022 17.7041 16.5C17.7041 16.8978 17.8621 17.2794 18.1434 17.5607C18.4247 17.842 18.8063 18 19.2041 18H20.2041C20.6019 18 20.9835 18.158 21.2648 18.4393C21.5461 18.7206 21.7041 19.1022 21.7041 19.5C21.7041 19.8978 21.5461 20.2794 21.2648 20.5607C20.9835 20.842 20.6019 21 20.2041 21H17.7041" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19.7041 21V22M19.7041 14V15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <span className="text-white text-base font-medium mx-2 flex-1 text-left">
                                    {currentLocation}
                                </span>
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

                    <div className="flex-1 max-w-2xl min-w-xl">
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4895_10933)"><path d="M3.7041 10C3.7041 10.9193 3.88516 11.8295 4.23694 12.6788C4.58873 13.5281 5.10434 14.2997 5.75435 14.9497C6.40436 15.5998 7.17604 16.1154 8.02532 16.4672C8.8746 16.8189 9.78485 17 10.7041 17C11.6234 17 12.5336 16.8189 13.3829 16.4672C14.2322 16.1154 15.0038 15.5998 15.6538 14.9497C16.3039 14.2997 16.8195 13.5281 17.1713 12.6788C17.523 11.8295 17.7041 10.9193 17.7041 10C17.7041 9.08075 17.523 8.1705 17.1713 7.32122C16.8195 6.47194 16.3039 5.70026 15.6538 5.05025C15.0038 4.40024 14.2322 3.88463 13.3829 3.53284C12.5336 3.18106 11.6234 3 10.7041 3C9.78485 3 8.8746 3.18106 8.02532 3.53284C7.17604 3.88463 6.40436 4.40024 5.75435 5.05025C5.10434 5.70026 4.58873 6.47194 4.23694 7.32122C3.88516 8.1705 3.7041 9.08075 3.7041 10Z" stroke="#1D1D20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21.7041 21L15.7041 15" stroke="#1D1D20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g> <defs><clipPath id="clip0_4895_10933"><rect width="24" height="24" fill="white" transform="translate(0.704102)"></rect></clipPath></defs></svg></span>
                            <input
                                type="text"
                                placeholder="Bạn muốn mua gì hôm nay?"
                                className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="relative flex items-center gap-2 bg-[#e53935] text-white px-4 py-2 rounded-lg hover:bg-[#d32f2f] transition">
                            <span className="max-[1024px]:hidden text-base font-medium">Giỏ hàng</span>
                            <div className="relative">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 20C16.5 19.4477 16.9477 19 17.5 19C18.0523 19 18.5 19.4477 18.5 20C18.5 20.5523 18.0523 21 17.5 21C16.9477 21 16.5 20.5523 16.5 20Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> <path d="M6.5 20C6.5 19.4477 6.94772 19 7.5 19C8.05228 19 8.5 19.4477 8.5 20C8.5 20.5523 8.05228 21 7.5 21C6.94772 21 6.5 20.5523 6.5 20Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> <path d="M2.5 3H3.26772C3.74998 3 4.16354 3.3442 4.2511 3.81845L4.65385 6M4.65385 6L6.1978 14.3631C6.37291 15.3116 7.20004 16 8.16457 16H17.3968C17.8625 16 18.2665 15.6786 18.3712 15.2249L20.2173 7.22486C20.3619 6.59824 19.886 6 19.2429 6H4.65385Z" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg>
                                <span className="absolute right-[-5px] top-[-5px] bg-[#f98315] border border-white rounded-[8px] text-white text-[10px] font-bold leading-none px-[4px] py-[1px]">
                                    2
                                </span>
                            </div>
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
                                            <p className="text-white text-base font-medium mx-2 flex-1 text-left">{userInfo?.name}</p>
                                            <p className="text-xs text-gray-500">{userInfo?.email}</p>
                                        </div>
                                        <Link
                                            to="/account"
                                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition">
                                            Tài khoản của tôi
                                        </Link>
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
                                className="hidden md:flex items-center gap-2 bg-white/20 px-4 hover:bg-white/30 transition py-3 rounded-xl md:w-auto"
                            >
                                <span className="text-white text-base font-medium mx-2 flex-1 text-left-sm">Đăng nhập</span>
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