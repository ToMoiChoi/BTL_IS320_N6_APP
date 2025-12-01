import React from 'react';

// Nhận isLoggedIn và userInfo từ App.js
const Header = ({ setCurrentPage, isLoggedIn, userInfo }) => {

  const memberColor = userInfo.memberTier === '4VIP' ? 'bg-red-600' : 'bg-pink-600'; // Giả lập màu cho cấp độ thành viên

  return (
    <header className="bg-gradient-to-r from-red-500 to-pink-500 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo và Danh mục */}
          <div className="flex items-center gap-4">
            <div 
              className="text-2xl font-bold cursor-pointer" 
              onClick={() => setCurrentPage('list')}
            >
              cellphone S
            </div>
            
            <button className="hidden md:flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition">
              <span className="text-sm">☰ Danh mục</span>
              <span className="text-xs">▼</span>
            </button>
            
            <button className="hidden md:flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition">
              <span>📍</span>
              <span className="text-sm">Hồ Chí Minh</span>
              <span className="text-xs">▼</span>
            </button>
          </div>

          {/* Thanh tìm kiếm */}
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

          {/* Giỏ hàng và Đăng nhập/Profile */}
          <div className="flex items-center gap-4">
            <button 
              className="hidden md:flex items-center gap-2 hover:opacity-80 transition cursor-pointer"
              onClick={() => setCurrentPage('cart')}
            >
              <span>🛒</span>
              <span className="text-sm">Giỏ hàng</span>
              <span className="bg-yellow-400 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">1</span>
            </button>
            
            {/* Hiển thị dựa trên trạng thái đăng nhập */}
            {isLoggedIn ? (
                <button 
                    className="hidden md:flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition"
                    onClick={() => setCurrentPage('profile')} // Chuyển đến trang Profile
                >
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${memberColor}`}>
                        {userInfo.memberTier.toUpperCase()}
                    </span>
                    <span className="text-sm font-semibold">{userInfo.name}</span>
                </button>
            ) : (
                <button 
                    className="hidden md:flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition"
                    onClick={() => setCurrentPage('login')} // Chuyển đến trang Đăng nhập
                >
                    <span>👤</span>
                    <span className="text-sm">Đăng nhập</span>
                </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;