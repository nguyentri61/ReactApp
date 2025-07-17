import { useEffect, useState } from "react";
import UserForm from "../component/user/user.form";
import UserTable from "../component/user/user.table";
import 'antd/dist/reset.css';
import { GetAllUserWithPage } from "../services/api.service";
const UserPage = () => {

    const [dataUsers, setDataUsers] = useState([]);

    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        GetAllUser()
    }, [current, pageSize]);

    const GetAllUser = async () => {
        const res = await GetAllUserWithPage(current - 1, pageSize);
        // console.log(">>> check res get", res);
        setDataUsers(res.data.content);
        // Chỉ set lại nếu giá trị khác
        if (res.data.pageable.pageNumber + 1 !== current) {
            setCurrent(res.data.pageable.pageNumber + 1);
        }

        if (res.data.pageable.pageSize !== pageSize) {
            setPageSize(res.data.pageable.pageSize);
        }
        setTotal(res.data.totalElements);
    }

    console.log("check current: ", current)

    return (
        <div style={{ padding: "20px" }}>
            <UserForm GetAllUser={GetAllUser} />
            <UserTable
                dataUsers={dataUsers}
                GetAllUser={GetAllUser}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
                setTotal={setTotal}
            />
        </div>
    )
}

export default UserPage;