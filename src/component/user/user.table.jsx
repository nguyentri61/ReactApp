import React, { useEffect, useState } from 'react';
import { notification, Space, Table, Tag } from 'antd';
import { GetAllUserAPI } from '../../services/api.service';

const UserTable = () => {


    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        GetAllUser()
    }, []);

    const columns = [
        {
            title: 'Full Name',
            dataIndex: 'fullName',
            key: 'fullName',
            // render: text => <a>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
    ];
    //     {
    //         key: '1',
    //         name: 'John Brown',
    //         age: 32,
    //         address: 'New York No. 1 Lake Park',
    //         tags: ['nice', 'developer'],
    //     },
    //     {
    //         key: '2',
    //         name: 'Jim Green',
    //         age: 42,
    //         address: 'London No. 1 Lake Park',
    //         tags: ['loser'],
    //     },
    //     {
    //         key: '3',
    //         name: 'Joe Black',
    //         age: 32,
    //         address: 'Sydney No. 1 Lake Park',
    //         tags: ['cool', 'teacher'],
    //     },
    // ];

    const GetAllUser = async () => {
        const res = await GetAllUserAPI();
        console.log(">>> check res get", res);
        setDataUsers(res.data);
    }



    return (
        <Table columns={columns} dataSource={dataUsers} rowKey="id" />
    )

}

export default UserTable;