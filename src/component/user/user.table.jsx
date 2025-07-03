import { Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';

const UserTable = (props) => {

    const { dataUsers, GetAllUser } = props

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false)
    const [dataUpdate, setDataUpdate] = useState(null)

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
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div className="flex items-center gap-3">
                    <EditOutlined className="text-lg text-gray-600 hover:text-blue-500 hover:scale-110 transition-transform cursor-pointer"
                        onClick={() => {
                            setDataUpdate(record)
                            setIsModalUpdateOpen(true);
                        }}
                    />
                    <DeleteOutlined className="text-lg text-gray-600 hover:text-red-500 hover:scale-110 transition-transform cursor-pointer" />
                </div>
            ),
        },
    ];

    return (

        <>
            <Table columns={columns} dataSource={dataUsers} rowKey="id" />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                GetAllUser={GetAllUser}
            />
        </>
    )

}

export default UserTable;