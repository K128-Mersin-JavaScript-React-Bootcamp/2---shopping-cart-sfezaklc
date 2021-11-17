import React from 'react'
import { Card, Image } from 'antd';
import fashion from '../images/fashion.jpg';
import MyHeader from '../Components/MyHeader';
import { Typography } from 'antd';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;







export default function Home() {
    return (
        <div className="site-card-border-less-wrapper">


            <Content>
                <Title level={1} style={{ textAlign: 'center' }}>Better Clothing For The Planet</Title>
                <Title level={3} style={{ textAlign: 'center' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Title>
                <Image width={'75%'} height={'75%'} src={fashion} style={{ marginLeft: '175px' }} />
            </Content>
            <Footer>Footer</Footer>

        </div>
    )
}
