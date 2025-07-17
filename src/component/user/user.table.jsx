import { Button, notification, Popconfirm, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import { DeleteUserAPI } from '../../services/api.service';
import { EditIcon, LucideDelete, Pencil, Trash } from 'lucide-react';
import ViewUserDetail from './view.user.detail';

const UserTable = (props) => {

    const { dataUsers, GetAllUser,
        current, pageSize, total,
        setCurrent, setPageSize, setTotal } = props
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false)
    const [dataUpdate, setDataUpdate] = useState(null)

    const [dataDetail, setDataDetail] = useState(null)
    const [isViewDetailOpen, setIsViewDetailOpen] = useState(false)

    const handleDeleteUser = async (id) => {
        const res = await DeleteUserAPI(id)
        if (res.data) {
            notification.success({
                message: "Delete User Successfully",
                showProgress: true,
                duration: 2,
            })
            await GetAllUser()
        } else {
            notification.error({
                message: "Delete User Failed",
                description: res.message,
                showProgress: true,
                duration: 2,
            })
        }
    }

    const columns = [

        {
            title: 'STT',
            render: (_, record, index) => {
                return (
                    <>{(index + 1) + (current - 1) * pageSize}</>
                )
            }

        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
            key: 'fullName',
            render: (_, record) => {
                return (
                    <a className="hover:underline"
                        onClick={() => {
                            setDataDetail(record)
                            setIsViewDetailOpen(true)
                        }}
                    >
                        {record.fullName}
                    </a>
                )
            }

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
                    <Pencil
                        className="text-lg text-blue-500 hover:text-blue-600 hover:scale-110 transition-transform duration-200 cursor-pointer"
                        onClick={() => {
                            setDataUpdate(record);
                            setIsModalUpdateOpen(true);
                        }}
                    />

                    <Popconfirm
                        title="Delete User"
                        description="Are you sure to delete this user?"
                        onConfirm={() => handleDeleteUser(record.id)}
                        okText="Delete"
                        cancelText="Cancel"
                    >
                        <Trash
                            className="text-lg text-red-500 hover:text-red-600 hover:scale-110 transition-transform duration-200 cursor-pointer"
                        />
                    </Popconfirm>
                </div>
            ),
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        // console.log("Check >>>: ", { pagination, filters, sorter, extra })
        // setCurrent(pagination.current);
        // setPageSize(pagination.pageSize)

        if (pagination && pagination.current && +pagination.current !== +current) {
            setCurrent(+pagination.current);
        }

        if (pagination && pagination.pageSize && +pagination.pageSize !== +pageSize) {
            setPageSize(+pagination.pageSize);
        }

    };
    return (

        <>
            <Table columns={columns} dataSource={dataUsers} rowKey="id"
                pagination={
                    {
                        current: current,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    }}
                onChange={onChange}
            />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                GetAllUser={GetAllUser}
            />

            <ViewUserDetail
                isViewDetailOpen={isViewDetailOpen}
                setIsViewDetailOpen={setIsViewDetailOpen}
                dataDetail={dataDetail}
                setDataDetail={dataDetail}
                GetAllUser={GetAllUser}
            />
        </>
    )

}

export default UserTable;