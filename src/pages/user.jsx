import UserForm from "../component/user/user.form";
import UserTable from "../component/user/user.table";
import 'antd/dist/reset.css';
const UserPage = () => {
    return (
        <div style={{ padding: "20px" }}>
            <UserForm />
            <UserTable />

        </div>
    )
}

export default UserPage;