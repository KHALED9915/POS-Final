import './NavbarLayout.css'
import { useState } from 'react';
import {
    AppstoreOutlined,
    BookOutlined,
    DesktopOutlined,
    DollarOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Home', '1', <HomeOutlined />),
    getItem('POS', '2', <DesktopOutlined />),
    getItem('Payment', '3', <DollarOutlined />),
    getItem('Product List', 'sub1', <BookOutlined />, [
        getItem('Option 1', '5'),
        getItem('Option 2', '6'),
        getItem('Option 3', '7'),
        getItem('Option 4', '8'),
    ]),
    getItem('Warehouse', 'sub2', <AppstoreOutlined />, [
        getItem('Option 5', '9'),
        getItem('Option 6', '10'),
        getItem('Submenu', 'sub3', null, [getItem('Option 7', '11'), getItem('Option 8', '12')]),
    ]),
];

function NavbarLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);

    };
    return (
        <div
            style={{
                width: 256,
                zIndex: 10,
            }}
        >
            <Button
                type="primary"
                className='Button-nav'
                onClick={toggleCollapsed}
                style={{
                    marginBottom: 16,
                }}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
                className='Menu-list'
            />
        </div>
    )
}

export default NavbarLayout