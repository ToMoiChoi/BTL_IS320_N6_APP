import React, { useState } from 'react';

const App = () => {
  const [selectedSort, setSelectedSort] = useState('popular');
  
  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max 256GB | Chính hãng VN/A',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png',
      price: '26.490.000đ',
      originalPrice: '34.990.000đ',
      discount: 24,
      installment: 'Smember giảm đến 265.000đ',
      specs: ['6.7 inches', '8 GB', '256 GB'],
      status: 'Sắp về hàng',
      installmentRate: '0%'
    },
    {
      id: 2,
      name: 'iPhone 16 Pro 128GB | Chính hãng VN/A',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png',
      price: '25.990.000đ',
      originalPrice: '28.990.000đ',
      discount: 10,
      installment: 'Smember giảm đến 260.000đ',
      specs: ['6.3 inches', '128 GB'],
      installmentRate: '0%'
    },
    {
      id: 3,
      name: 'Điện thoại iPhone 17 Pro 256GB',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-17-pro-256-gb.png',
      price: '34.990.000đ',
      discount: 14,
      installment: 'Smember giảm đến 350.000đ',
      specs: ['6.3 inches', '256 GB'],
      installmentRate: '0%'
    },
    {
      id: 4,
      name: 'iPhone 14 128GB | Chính hãng VN/A',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14_2_1.jpg',
      price: '13.690.000đ',
      originalPrice: '14.990.000đ',
      discount: 9,
      installment: 'Smember giảm đến 137.000đ',
      specs: ['6.1 inches', '6 GB', '128 GB'],
      installmentRate: '0%'
    },
    {
      id: 5,
      name: 'iPhone 14 Pro Max 128GB | Chính hãng VN/A',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__5.png',
      price: '25.590.000đ',
      originalPrice: '29.990.000đ',
      discount: 15,
      installment: 'Smember giảm đến 256.000đ',
      specs: ['6.7 inches', '6 GB', '128 GB'],
      installmentRate: '0%'
    },
    {
      id: 6,
      name: 'iPhone 15 128GB | Chính hãng VN/A',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
      price: '19.490.000đ',
      originalPrice: '22.990.000đ',
      discount: 13,
      installment: 'Smember giảm đến 195.000đ',
      specs: ['6.1 inches', '6 GB', '128 GB'],
      installmentRate: '0%'
    }
  ];

  const seriesCategories = [
    'IPHONE 17 SERIES',
    'IPHONE AIR',
    'IPHONE 16 SERIES',
    'IPHONE 15 SERIES',
    'IPHONE 14 SERIES',
    'IPHONE 13 SERIES',
    'IPHONE 12 SERIES',
    'IPHONE 11 SERIES'
  ];

  const filterOptions = [
    { icon: '🎛️', label: 'Bộ lọc', active: true },
    { icon: '🚚', label: 'Sẵn hàng' },
    { icon: '📦', label: 'Hàng mới về' },
    { icon: '⏰', label: 'Xem theo giá' },
    { label: 'Bộ nhớ trong', hasDropdown: true },
    { label: 'Dung lượng RAM', hasDropdown: true },
    { label: 'Kích thước màn hình', hasDropdown: true }
  ];

  const filterOptions2 = [
    { label: 'Nhu cầu sử dụng', hasDropdown: true },
    { label: 'Kiểu màn hình', hasDropdown: true },
    { label: 'Tính năng camera', hasDropdown: true },
    { label: 'Tần số quét', hasDropdown: true },
    { label: 'Tính năng đặc biệt', hasDropdown: true }
  ];

  const sortOptions = [
    { icon: '⭐', label: 'Phổ biến', value: 'popular' },
    { icon: '🔥', label: 'Khuyến mãi HOT', value: 'hot' },
    { icon: '↑', label: 'Giá Thấp - Cao', value: 'price-asc' },
    { icon: '↓', label: 'Giá Cao - Thấp', value: 'price-desc' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      <header className="bg-gradient-to-r from-red-500 to-pink-500 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
 
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold">cellphone S</div>
              
    
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
              <button className="hidden md:flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition">
                <span>👤</span>
                <span className="text-sm">Đăng nhập</span>
              </button>
            </div>
          </div>
        </div>
      </header>

    
      <div className="container mx-auto px-4 py-6">
  
        <h1 className="text-3xl font-bold mb-6">iPhone</h1>

  
        <div className="flex flex-wrap gap-3 mb-6">
          {seriesCategories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-red-500 hover:text-red-500 transition text-sm font-medium"
            >
              {category}
            </button>
          ))}
        </div>

     
        <h2 className="text-xl font-bold mb-4">Chọn theo tiêu chí</h2>

    
        <div className="flex flex-wrap gap-3 mb-3">
          {filterOptions.map((filter, index) => (
            <button
              key={index}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition text-sm font-medium ${
                filter.active
                  ? 'bg-red-50 border-2 border-red-500 text-red-500'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {filter.icon && <span>{filter.icon}</span>}
              <span>{filter.label}</span>
              {filter.hasDropdown && <span className="text-xs">▼</span>}
            </button>
          ))}
        </div>

  
        <div className="flex flex-wrap gap-3 mb-8">
          {filterOptions2.map((filter, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition text-sm font-medium"
            >
              <span>{filter.label}</span>
              {filter.hasDropdown && <span className="text-xs">▼</span>}
            </button>
          ))}
        </div>

   
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <h2 className="text-xl font-bold">Sắp xếp theo</h2>
          <div className="flex gap-3 flex-wrap">
            {sortOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedSort(option.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition text-sm font-medium ${
                  selectedSort === option.value
                    ? 'bg-blue-50 border-2 border-blue-500 text-blue-600'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {option.icon && <span>{option.icon}</span>}
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer group"
            >
              <div className="relative p-4">
        
                <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    Giảm {product.discount}%
                  </span>
                  <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded">
                    Trả góp {product.installmentRate}
                  </span>
                </div>

         
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <h3 className="font-medium text-sm mb-2 line-clamp-2 min-h-[40px]">
                  {product.name}
                </h3>

   
                <div className="flex flex-wrap gap-2 mb-3">
                  {product.specs.map((spec, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 px-2 py-1 rounded"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

   
                <div className="mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 font-bold text-lg">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-400 text-sm line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

     
                <div className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded mb-2">
                  {product.installment}
                </div>

                {product.status ? (
                  <div className="text-orange-600 text-xs font-medium">
                    {product.status}
                  </div>
                ) : (
                  <div className="text-gray-600 text-xs">
                    Trả góp 0% - 0đ phụ thu - 0đ trả trước
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>


      <button className="fixed bottom-8 right-8 bg-red-600 text-white px-6 py-4 rounded-full shadow-lg hover:bg-red-700 transition z-50 flex items-center gap-2">
        <span className="text-2xl">🎧</span>
        <span className="font-medium">Liên hệ</span>
      </button>
    </div>
  );
};

export default App; 