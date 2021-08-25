import { HomeOutlined, ShoppingOutlined } from '@ant-design/icons';
import { PageHeader, Typography } from 'antd';
import Link from 'next/link';

const Header = () => {
  return (
    <PageHeader
      backIcon={false}
      style={{ boxShadow: '0 2px 8px #f0f1f2' }}
      title={
        <Link href='/'>
          <a>
            <HomeOutlined />
          </a>
        </Link>
      }
      extra={
        <>
          <Typography.Text>Total: 300€</Typography.Text>
          <Link href='/checkout'>
            <a>
              <ShoppingOutlined />
            </a>
          </Link>
        </>
      }
    />
  );
};

export default Header;
