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
        const res = await GetAllUserWithPage(current, pageSize);
        // console.log(">>> check res get", res);
        setDataUsers(res.data.result);
        // Chỉ set lại nếu giá trị khác
        if (res.data.meta.page !== current) {
            setCurrent(res.meta.page);
        }

        if (res.data.meta.pageSize !== pageSize) {
            setPageSize(res.meta.pageSize);
        }

        setTotal(res.data.meta.total);
    }

    // console.log("check current: ", current)

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