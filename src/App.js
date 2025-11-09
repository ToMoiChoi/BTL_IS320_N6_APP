import React, { useState } from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/login';
import ProductDetail from './components/ProductDetail';
import {
  products,
  seriesCategories,
  filterOptions,
  filterOptions2,
  sortOptions
} from './data/productsData';

const App = () => {
  const [selectedSort, setSelectedSort] = useState('popular');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const handleLoginSuccess = (userData) => {
    setIsLoggedIn(true);
    setUserInfo(userData);
  };

  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserInfo(null);
  };

  return (
    <Router>
      {/* Sử dụng Switch để đảm bảo chỉ một route được render */}
      <Switch>
        <Route
          path="/products/:productId"
          render={(props) => (
            <ProductDetail
              {...props}
              products={products} // Truyền data sản phẩm để tìm kiếm
              isLoggedIn={isLoggedIn}
              userInfo={userInfo}
              onLogout={handleLogout}
            />
          )}
        />

        {/* ROUTE ĐĂNG NHẬP */}
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login
              {...props}
              onLoginSuccess={handleLoginSuccess}
            />
          )}
        />

        {/* ROUTE TRANG CHỦ (PHẢI ĐẶT CUỐI CÙNG HOẶC DÙNG 'exact' VÌ NÓ CÓ PATH="/") */}
        <Route exact path="/">
          <Home
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
            products={products}
            seriesCategories={seriesCategories}
            filterOptions={filterOptions}
            filterOptions2={filterOptions2}
            sortOptions={sortOptions}
            isLoggedIn={isLoggedIn}
            userInfo={userInfo}
            onLogout={handleLogout}
          />
        </Route>

        {/* Thêm một Route mặc định cho 404 nếu cần thiết */}

      </Switch>
    </Router>
  );
};

export default App;