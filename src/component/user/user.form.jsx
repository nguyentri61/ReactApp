import { Input, Button } from "antd";
import { useState } from "react";

const UserForm = () => {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    // console.log(">>>> FullName:", fullName)
    // console.log(">>>> Email:", email)
    // console.log(">>>> password:", password)
    // console.log(">>>> phone:", phone)

    const handleClickCreate = () => {
        console.log(">>> Create User:", { fullName, email, password, phone })
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