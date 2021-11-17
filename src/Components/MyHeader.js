import React, { useState } from 'react'
import { Menu } from 'antd';
import "antd/dist/antd.css";
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import {ShoppingOutlined} from '@ant-design/icons';
import MyRoutes from './MyRoutes';
import Login from '../Pages/Login';
import { Typography } from 'antd';
import { Card, Image} from 'antd';
import  fashion  from '../images/fashion.jpg';
import '../App.css'

const { Title } = Typography;

const { Header} = Layout;

function MyHeader(props) {
    const { darkModeAcikMi } = props;
    const [darkMode, setdarkMode] = useState(darkModeAcikMi);

    const [title, setTitle] = useState( "Tatlış Shop");

    console.log(darkMode);
    {
        return (
            <Layout>
                    <Menu theme={darkMode ? "dark" : "light"} mode="horizontal" defaultSelectedKeys={['1']}>
                        {/* <div style={{ display: 'flex'}}> */}
                        <Menu.Item key="1"><NavLink to="/">Ecommerce</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink to="/shop">Shop</NavLink></Menu.Item>
                        <Menu.Item key="3"><NavLink to="/stories">Stories</NavLink></Menu.Item>
                        <Menu.Item key="4"><NavLink to="/about">About</NavLink></Menu.Item>
                        <Menu.Item key="5">Search</Menu.Item>
                        {/* </div> */}
                        {/* <div className="menu-right"> */}
                            <Menu.Item key="6"><ShoppingOutlined /><NavLink to="/basket"></NavLink></Menu.Item>
                            <Menu.Item key="7"><NavLink to="/login">Login</NavLink></Menu.Item>
                        {/* </div> */}
                    </Menu>

                    {/* <input type="checkbox" name="darkMode" defaultChecked={darkMode} onChange={() => {
                        setdarkMode(!darkMode)
                        setTitle("Koyu Tatlış Shop")
                    }} />
                    <input type="text" name="title" defaultValue={title} onChange={(e) => setTitle(e.target.value)} /> */}
            </Layout>


        )
    }
}

export default MyHeader



// class MyHeader {
//     bool darkMode;
//      string title;

//     MyHeader(darkModeAcikMi, title =  "Tatlış Shop") {
//         this.darkMode = darkModeAcikMi;
//          this.title = title;
//     }

//     public void setDarkMode(bool darkMode) {
//         this.darkMode = darkMode;
//     }
// }

// MyHeader header = new MyHeader(false);

// if (inputaTiklandi) {
//     header.setDarkMode(true);
// }