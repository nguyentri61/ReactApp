import { useEffect, useState } from "react";
import UserForm from "../component/user/user.form";
import UserTable from "../component/user/user.table";
import 'antd/dist/reset.css';
import { GetAllUserAPI } from "../services/api.service";
const UserPage = () => {

    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        GetAllUser()
    }, []);

    const GetAllUser = async () => {
        const res = await GetAllUserAPI();
        console.log(">>> check res get", res);
        setDataUsers(res.data);
    }

    return (
        <div style={{ padding: "20px" }}>
            <UserForm GetAllUser={GetAllUser} />
            <UserTable
                dataUsers={dataUsers}
                GetAllUser={GetAllUser} />
        </div>
    )
}

export default UserPage;