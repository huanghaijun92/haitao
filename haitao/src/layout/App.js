import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Home from '@/views/home';
import Choose from '@/views/choose';
import Find from '@/views/find';
import Cart from '@/views/cart';
import User from '@/views/user';

const Com = () => (
  <div className = "container">
    <Switch>
      <Route path = "/home" component = { Home } />
      <Route path = "/choose" component = { Choose } />
      <Route path = "/find" component = { Find } />
      <Route path = "/cart" component = { Cart } />
      <Route path = "/user" component = { User } />
      <Redirect to = "/home" />
    </Switch>
    <footer className = "footer">
      <ul>
        <NavLink to = "/home">
          <span></span>
          <p>首页</p>
        </NavLink>
        <NavLink to = "/choose">
          <span></span>
          <p>选购</p>
        </NavLink>
        <NavLink to = "/find">
          <span></span>
          <p>发现</p>
        </NavLink>
        <NavLink to = "/cart">
          <span></span>
          <p>购物车</p>
        </NavLink>
        <NavLink to = "/user">
          <span></span>
          <p>我的</p>
        </NavLink>
      </ul>
    </footer>
  </div>
)

export default Com;