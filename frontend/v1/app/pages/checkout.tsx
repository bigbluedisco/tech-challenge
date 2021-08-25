import { Button, Card, Col, Form, Input, Row, Typography } from 'antd';
import Head from 'next/head';
import Placeholder from '../components/Placeholder';

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Row gutter={12}>
        <Col span={12}>
          <Card>
            <Typography.Title level={4} style={{ textAlign: 'center' }}>
              Order summary
            </Typography.Title>
            <Placeholder color='cornsilk'>Cart table</Placeholder>
            <Typography.Title
              level={4}
              style={{ textAlign: 'center', marginTop: 20 }}
            >
              Shipping
            </Typography.Title>
            <Form colon={false}>
              <Form.Item
                label='First name'
                name='firstName'
                rules={[
                  { required: true, message: 'Please input your first name!' },
                ]}
              >
                <Input placeholder='Harry' />
              </Form.Item>
              <Form.Item
                label='Last name'
                name='lastName'
                rules={[
                  { required: true, message: 'Please input your last name!' },
                ]}
              >
                <Input placeholder='Potter' />
              </Form.Item>
              <Form.Item
                label='Address'
                name='address'
                rules={[
                  {
                    required: true,
                    message: 'Please input your shipping address!',
                  },
                ]}
              >
                <Input
                  id='place'
                  placeholder='45 Rue des Petites Ecuries, 75010, Paris'
                />
              </Form.Item>
              <Form.Item style={{ textAlign: 'center' }}>
                <Button type='primary' htmlType='submit'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col
          style={{
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
          }}
          span={12}
        >
          <Placeholder height={400} color='aliceblue'>
            Map
          </Placeholder>
        </Col>
      </Row>
    </>
  );
};

export default Checkout;
