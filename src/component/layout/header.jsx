import { BookOutlined, HomeOutlined, UserOutlined, LoginOutlined, LogoutOutlined, AliwangwangOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
const Header = () => {

    const [current, setCurrent] = useState('home');
    const { user } = useContext(AuthContext);
    console.log('user', user);

    const onClick = e => {
        setCurrent(e.key);
    };

    const baseItems = [
        {
            label: <NavLink to="/">Home</NavLink>,
            key: 'home',
            icon: <HomeOutlined />,
        },

        {
            label: <NavLink to="/users">Users</NavLink>,
            key: 'users',
            icon: <UserOutlined />,
        },

        {
            label: <NavLink to="/books">Books</NavLink>,
            key: 'books',
            icon: <BookOutlined />,
        },

    ];

    const authItems = user?.id ? [
        {
            label: `Welcome, ${user.fullName}`,
            key: 'welcome',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: 'Đăng xuất',
                    key: 'logout',
                    icon: <LogoutOutlined />,
                },
            ],
        },
    ] : [
        {
            label: <NavLink to="/login">Đăng nhập</NavLink>,
            key: 'login',
            icon: <LoginOutlined />,
        },
    ];

    const items = [...baseItems, ...authItems];

    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}

export default Header;