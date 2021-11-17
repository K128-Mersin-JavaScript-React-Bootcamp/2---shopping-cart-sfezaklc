import { Content } from 'antd/lib/layout/layout'
import { Typography } from 'antd'
import React from 'react'
import { Row, Col, List, Card, Layout} from 'antd'
import { useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
export default function ShopPage() {

  const { Title, Paragraph } = Typography;
  const { Meta } = Card;
  const [products, setProducts] = useState([]);
  let history = useHistory();
  


  useEffect(() => {
    fetch('http://localhost:3004/products')
      .then(res => res.json())
      .then(json => handleData(json))
  }, [])
  const handleData = (data) => {
    //handleCategoryList(data);
    setProducts(data);
  }

  return (
    <>
      <Content>
        <Row align="top">
          <Col >
            <div style={{ paddingBlock: 20 }}>

              <Title level={2}>Shop Men's</Title>
              <Paragraph >
                Revamp your style Aenean gravida sapien non dolor iaculis, ut bibendum lorem pellentesque. Ut auctor maximus convallis. Orci varius natoque penatibus et magnis dis parturient montes, n metus in, eleifend dictum libero. Suspendisse consequat velit sit amet vulputate rutrum. Ut porta venenat
              </Paragraph>
            </div>
            <Layout>
              <div>
                <List
                  grid={{ gutter: 16, column: 3 }}
                  dataSource={products}
                  renderItem={item => {
                    return (
                      <List.Item>
                        <Card
                        onClick={() => history.push(
                          '/shopdetails',
                          {
                            item: item,
                          })}
                          hoverable
                          style={{ width: 240 }}
                          cover={<img alt="example" style={{ height: 100, width: '100%' }} src={item.image} />}
                        >
                          <Meta title={item.title} description={`${item.price} TL`} />
                          <span>{item.rating.rate} - {item.rating.count} değerlendirme</span>
                        </Card>
                      </List.Item>
                    )
                  }}
                />

              </div>
            </Layout>

          </Col>
        </Row>

      </Content>


    </>
  )
}