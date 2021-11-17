import React, { useState } from 'react'
import { useLocation } from 'react-router';
import { Card, Button } from 'antd';
import { Typography } from 'antd';
export default function ShopDetails(props) {
  const location = useLocation();
  const item = location.state.item;
  const { Meta } = Card;
  const { Title, Paragraph } = Typography;

  const [selectedQuantity, setSelectedQuantity] = useState(1);
  return (
    <div>
      <div style={{ display: 'flex', gap: 100 }}>
        <Card

          hoverable
          style={{ width: 400 }}
          cover={<img alt="example" style={{ width: '100%', height: '100%' }} src={item.image} />}
        >

        </Card>
        <div>
          <Title level={2}>{item.title}</Title>
          <Paragraph >
            Revamp your style Aenean gravida sapien non dolor iaculis, ut bibendum lorem pellentesque. Ut auctor maximus convallis. Orci varius natoque penatibus et magnis dis parturient montes, n metus in, eleifend dictum libero. Suspendisse consequat velit sit amet vulputate rutrum. Ut porta venenat
          </Paragraph>

          <div style={{ display: 'flex', gap: 5}}>
          <Button type="primary" size={"Large"} style={{ width: 150, backgroundColor:'#000' }}>
            Primary
          </Button>
            <div style={{ border: '1px solid #000', padding: 5}}>
            <button onClick={() => {
              if (selectedQuantity <= 1)
                return;
              setSelectedQuantity(selectedQuantity - 1)
            }}>-</button>
            <input value={selectedQuantity} style={{ width: 50 }}/>
            <button onClick={() => {
              console.log(selectedQuantity);
              setSelectedQuantity(selectedQuantity + 1)
            }}>+</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
