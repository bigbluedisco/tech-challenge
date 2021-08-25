import { Card, Col, Row } from 'antd';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <Row gutter={12}>
        <Col span={8}>
          <Card
            cover={
              <img
                alt='example'
                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
              />
            }
            actions={['Add to cart', 'Remove from cart']}
          >
            <Card.Meta
              title='Product name'
              description={
                <Col>
                  <Row>Price</Row>
                  <Row>Quantity</Row>
                </Col>
              }
              style={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            cover={
              <img
                alt='example'
                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
              />
            }
            actions={['Add to cart', 'Remove from cart']}
          >
            <Card.Meta
              title='Product name'
              description={
                <Col>
                  <Row>Price</Row>
                  <Row>Quantity</Row>
                </Col>
              }
              style={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            cover={
              <img
                alt='example'
                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
              />
            }
            actions={['Add to cart', 'Remove from cart']}
          >
            <Card.Meta
              title='Product name'
              description={
                <Col>
                  <Row>Price</Row>
                  <Row>Quantity</Row>
                </Col>
              }
              style={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
