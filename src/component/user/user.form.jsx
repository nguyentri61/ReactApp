import { Input, Button, notification, Modal } from "antd";
import { useState } from "react";
import { CreateUserAPI } from "../../services/api.service";

const UserForm = (props) => {

    const { GetAllUser } = props

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmitBtn = async () => {
        const res = await CreateUserAPI(fullName, email, password, phone)
        // console.log(">>> check res", res);
        if (res.data) {
            notification.success({
                message: "Create user successfully",
                description: `User "${res.data.fullName}" has been created!`,
                showProgress: true,
                duration: 3,
            })
            resetAndCloseModal()
            await GetAllUser()
        } else {
            notification.error({
                message: "Create user failed",
                description: JSON.stringify(res.message),
                showProgress: true,
                duration: 3,
            })
        }
    }

    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setFullName("")
        setEmail("")
        setPassword("")
        setPhone("")
    }

    return (
        <div className="user-form" style={{ margin: "10px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table Users</h3>
                <Button type="primary"
                    onClick={() => setIsModalOpen(true)}
                >Create User</Button>
            </div>

            <Modal
                title="Create User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleSubmitBtn}
                onCancel={() => resetAndCloseModal()}
                okText="CREATE"
            >
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
                </div>
            </Modal>
        </div>
    )
}

export default UserForm;