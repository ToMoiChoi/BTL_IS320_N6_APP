import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';
import Login from './pages/Login'; 
import Register from './pages/Register'; 
import Profile from './pages/Profile';
import AdminLogin from './pages/admin/AdminLogin';
import AdminRegister from './pages/admin/AdminRegister';
import AdminDashboard from './pages/admin/AdminDashboard';
import {
  products,
  seriesCategories,
  filterOptions,
  filterOptions2,
  sortOptions
} from './data/productsData';
import Account from './components/Account';

// Dữ liệu sản phẩm cho trang danh sách
const initialProducts = [
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

// Dữ liệu sản phẩm mẫu cho trang chi tiết
const sampleProductDetail = {
  id: 7,
  name: 'OPPO Reno14 F 8GB 256GB',
  price: '9.800.000đ',
  originalPrice: '10.300.000đ',
  discountText: 'Tiết kiệm 500.000đ',
  image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/p/oppo-reno14-f.png',
  color: 'Xanh dương',
  ramRomOptions: [
    { label: 'Reno14 F', specs: '8G 256GB', price: '9.800.000đ', active: true },
    { label: 'Reno14 Pro', specs: '12G 256GB', price: '10.500.000đ' },
    { label: 'Reno14 Lite', specs: '6G 128GB', price: '8.500.000đ' },
  ],
  specs: [
    { label: 'Màn hình', detail: '6.43 inches, AMOLED, 90Hz' },
    { label: 'Camera sau', detail: 'Chính 64MP, Góc rộng 8MP, Macro 2MP' },
    { label: 'Camera trước', detail: '32MP' },
    { label: 'Chipset', detail: 'MediaTek Dimensity 920' },
    { label: 'Bộ nhớ trong', detail: '256 GB' },
    { label: 'RAM', detail: '8 GB' },
    { label: 'Pin', detail: '4500mAh, Sạc nhanh 33W' },
  ]
};

// Dữ liệu sản phẩm mẫu cho trang giỏ hàng
const cartItems = [
  {
    id: 1,
    name: 'OPPO Reno14 F - Xanh dương',
    price: '10.300.000đ',
    quantity: 1,
    image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/p/oppo-reno14-f.png',
  }
];

// Component trang danh sách sản phẩm
const ProductListPage = () => {
  const [selectedSort, setSelectedSort] = useState('popular');
  const history = useHistory();

  const seriesCategoriesList = [
    'IPHONE 17 SERIES', 'IPHONE AIR', 'IPHONE 16 SERIES', 'IPHONE 15 SERIES', 
    'IPHONE 14 SERIES', 'IPHONE 13 SERIES', 'IPHONE 12 SERIES', 'IPHONE 11 SERIES'
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">iPhone</h1>

        <div className="flex flex-wrap gap-3 mb-6">
          {seriesCategoriesList.map((category, index) => (
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
          {initialProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer group"
              onClick={() => {
                history.push(`/product/${product.id}`);
              }}
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
      <Footer />
    </>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userInfo, setUserInfo] = useState({ name: 'Trần Văn A', phone: '0987xxxxxx', memberTier: '4MEMBER' });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminInfo, setAdminInfo] = useState(null);
  const history = useHistory();
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserInfo(null);
  };
  const handleAdminLogin = (adminData) => {
    setIsAdminLoggedIn(true);
    setAdminInfo(adminData);
    // Lưu vào localStorage để giữ trạng thái
    localStorage.setItem('adminData', JSON.stringify(adminData));
    // Chuyển đến dashboard
    window.location.href = '/admin/dashboard';
  };

  // Handlers cho Admin Register
  const handleAdminRegister = (adminData) => {
    setIsAdminLoggedIn(true);
    setAdminInfo(adminData);
    localStorage.setItem('adminData', JSON.stringify(adminData));
    window.location.href = '/admin/dashboard';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {!window.location.pathname.startsWith('/admin') && (
        <Header 
          isLoggedIn={isLoggedIn}
          userInfo={userInfo}
        />
      )}

      <Switch>
        <Route exact path="/" component={ProductListPage} />
        <Route path="/product/:id" render={() => <ProductDetail product={sampleProductDetail} />} />
        <Route path="/cart" render={() => <Cart items={cartItems} />} />
        <Route path="/login" render={() => <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" component={Register} />
        <Route path="/profile" render={() => <Profile userInfo={userInfo} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/account" render={() => <Account isLoggedIn={isLoggedIn} userInfo={userInfo} onLogout={handleLogout} />} />

        <Route 
          path="/admin/login" 
          render={() => (
            <AdminLogin 
              onLoginSuccess={handleAdminLogin}
              onNavigateToRegister={() => window.location.href = '/admin/register'}
              onNavigateToHome={() => window.location.href = '/'}
            />
          )} 
        />
        <Route 
          path="/admin/register" 
          render={() => (
            <AdminRegister 
              onRegisterSuccess={handleAdminRegister}
              onNavigateToLogin={() => window.location.href = '/admin/login'}
              onNavigateToHome={() => window.location.href = '/'}
            />
          )} 
        />
        <Route 
          path="/admin/dashboard" 
          component={AdminDashboard}
        />
      </Switch>

      

      {!window.location.pathname.startsWith('/admin') && (
        <button className="fixed bottom-8 right-8 bg-red-600 text-white px-6 py-4 rounded-full shadow-lg hover:bg-red-700 transition z-50 flex items-center gap-2">
          <span className="text-2xl">🎧</span>
          <span className="font-medium">Liên hệ</span>
        </button>
      )}
    </div>
  );
};

export default App;