import { BookOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {

    const items = [
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

    const [current, setCurrent] = useState('home');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        // <ul>
        //     <li></li>
        //     <li><NavLink to="/users">Users</NavLink></li>
        //     <li><NavLink to="/books">Books</NavLink></li>
        // </ul>

        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}

export default Header;