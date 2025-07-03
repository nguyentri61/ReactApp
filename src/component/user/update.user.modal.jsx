import { Input, Button, notification, Modal } from "antd";
import { useEffect, useState } from "react";
import { GetAllUserAPI, UpdateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {

    const [id, setId] = useState("")
    const [fullName, setFullName] = useState("")
    const [phone, setPhone] = useState("")

    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, GetAllUser } = props;

    useEffect(() => {
        console.log("Check dataUpdate:>> ", dataUpdate)

        if (dataUpdate) {
            setId(dataUpdate.id)
            setFullName(dataUpdate.fullName)
            setPhone(dataUpdate.phone)
        }

    }, [dataUpdate])

    const handleSubmitBtn = async () => {
        const dataRequest = {
            id: id,
            fullName: fullName,
            phone: phone
        }
        const res = await UpdateUserAPI(dataRequest)
        // console.log(">>> check res", res);
        if (res.data) {
            notification.success({
                message: "Update user successfully",
                description: `User "${res.data.fullName}" has been updated!`,
                showProgress: true,
                duration: 3,
            })
            resetAndCloseModal()
            await GetAllUser()
        } else {
            notification.error({
                message: "Update user failed",
                description: JSON.stringify(res.message),
                showProgress: true,
                duration: 3,
            })
        }
    }

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setFullName("")
        setPhone("")
    }

    return (
        <Modal
            title="Update User"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalUpdateOpen}
            onOk={handleSubmitBtn}
            onCancel={() => resetAndCloseModal()}
            okText="SAVE"
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
                    <span>Phone</span>
                    <Input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
            </div>
        </Modal>
    )
}

export default UpdateUserModal