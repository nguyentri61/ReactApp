import { Input, Button, notification } from "antd";
import { useState } from "react";
import { CreateUserAPI } from "../../services/api.service";

const UserForm = () => {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    const handleClickCreate = async () => {
        const res = await CreateUserAPI(fullName, email, password, phone)
        // console.log(">>> check res", res);
        if (res.data) {
            notification.success({
                message: "Create user successfully",
                description: `User "${res.data.fullName}" has been created!`,
                showProgress: true,
                duration: 3,
            })
        } else {
            notification.error({
                message: "Create user failed",
                description: JSON.stringify(res.message),
                showProgress: true,
                duration: 3,
            })
        }

        // console.log(">>> check res", res);
    }

    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>Full name</span>
                    <Input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>

                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <span>Phone</span>
                    <Input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div>
                    <Button type="primary"
                        onClick={handleClickCreate}
                    >Create User</Button>
                </div>


            </div>

        </div>
    )
}

export default UserForm;