import { Button, Drawer, Image, notification } from "antd"
import { useState } from "react"
import { UpdateUserAPI, UploadImage } from "../../services/api.service";
const ViewUserDetail = (props) => {

    const { isViewDetailOpen, setIsViewDetailOpen, dataDetail, setDataDetail, GetAllUser } = props

    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleUpdateUserAvatar = async () => {
        // upload file
        const resUpload = await UploadImage(selectedFile, "avatar");
        // console.log("Checkk resUpload: ", resUpload)

        if (resUpload.data) {
            // update avatar
            const dataUpdateUser = {
                id: dataDetail.id,
                imgAvatar: resUpload.data.image
            }
            const resSave = await UpdateUserAPI(dataUpdateUser);
            if (resSave.data) {
                notification.success({
                    message: "Update User Successfully",
                    showProgress: true,
                    duration: 3,
                })

                setPreview(null)
                setSelectedFile(null)
                await GetAllUser()
                setIsViewDetailOpen(false)

            } else {
                notification.error({
                    message: "Update User Failed",
                    description: JSON.stringify(resSave.message),
                    showProgress: true,
                    duration: 3,
                })
            }
        } else {
            notification.error({
                message: "Upload Image Failed",
                description: JSON.stringify(resUpload.message),
                showProgress: true,
                duration: 3,
            })
        }
    }

    const handleOnChangeFile = (e) => {
        if (!e.target.files || e.target.files.length == 0) {
            setSelectedFile(null)
            setPreview(null)
            return;
        }

        const file = e.target.files[0];

        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file))
        }
    }

    return (
        <Drawer
            title="User Detail"
            closable={{ 'aria-label': 'Close Button' }}
            width={"40vw"}
            onClose={() => {
                setIsViewDetailOpen(false)
                setDataDetail(null)
            }}
            open={isViewDetailOpen}
        >
            <div className="space-y-4">
                {dataDetail ?
                    <>
                        <div>
                            <p className="text-sm text-gray-500">ID</p>
                            <p className="text-base text-gray-800 font-medium">{dataDetail.id}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Full name</p>
                            <p className="text-base text-gray-800 font-medium">{dataDetail.fullName}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="text-base text-gray-800 font-medium">{dataDetail.email}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Phone number</p>
                            <p className="text-base text-gray-800 font-medium">{dataDetail.phone}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Avatar</p>
                            <Image
                                width={180}
                                src={`${import.meta.env.VITE_BACKEND_URL}/image/avatar/${dataDetail.imgAvatar}`} alt="Avatar" />
                        </div>

                        <div>
                            <label htmlFor="btnUpload"
                                className="inline-block cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                                Upload Avatar
                            </label>
                            <input type="file" hidden id="btnUpload"
                                onChange={(e) => handleOnChangeFile(e)}
                            ></input>
                        </div>

                        {preview && (
                            <>
                                <div>
                                    <Image width={180} src={preview} />
                                </div>
                                <Button type="primary"
                                    onClick={handleUpdateUserAvatar}
                                >
                                    Save
                                </Button>
                            </>
                        )}
                    </>
                    :
                    <p className="text-sm text-gray-500">Không có dữ liệu</p>
                }
            </div>
        </Drawer>
    )
}

export default ViewUserDetail