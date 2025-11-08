import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';
import Login from './components/login';
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

  // Hàm xử lý đăng nhập thành công
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
      <Switch>
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
        <Route path="/">
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
      </Switch>
    </Router>
  );
};

export default App;