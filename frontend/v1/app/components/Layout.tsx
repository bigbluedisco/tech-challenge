import { Col, Row } from 'antd';
import Head from 'next/head';
import Header from './Header';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name='description' content='E-commerce checkout' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <Row>
          <Col
            xs={{ span: 22, offset: 1 }}
            xl={{ span: 20, offset: 2 }}
            xxl={{ span: 16, offset: 4 }}
            style={{
              marginTop: '40px',
              marginBottom: '40px',
            }}
          >
            {children}
          </Col>
        </Row>
      </main>
    </>
  );
};

export default Layout;
