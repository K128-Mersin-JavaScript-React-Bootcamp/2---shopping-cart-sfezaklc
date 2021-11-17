import React from 'react'
import { Menu } from 'antd';
import { blue } from '@ant-design/colors';
import { Layout, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'

import About from '../Pages/About';
import Stories from '../Pages/Stories';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import ShopPage from '../Pages/Shop/ShopPage';
import ShopDetailsPage from '../Pages/Shop/ShopDetails'
import Basket from '../Pages/Basket'
const { Header, Content, Sider } = Layout;
export default function MyRoutes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/shopdetails" component={ShopDetailsPage} />
            <Route exact path="/stories" component={Stories} />
            <Route exact path="/basket" component={Basket} />
            <Route exact path="/login" component={Login} />
        </Switch>
    )
}