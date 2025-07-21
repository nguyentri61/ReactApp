import axios from "./axios.customize";

const CreateUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/users/save";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data)
}

const RegisterAPI = (data) => {
    const URL_BACKEND = "/users/save";
    return axios.post(URL_BACKEND, data)
}

const LoginAPI = (data) => {
    const URL_BACKEND = "/auth/login";
    return axios.post(URL_BACKEND, data)
}

const GetAllUserAPI = () => {
    const URL_BACKEND = "/users";
    return axios.get(URL_BACKEND)
}

const GetAllUserWithPage = (page, size) => {
    const URL_BACKEND = `/users/paging?page=${page}&size=${size}`;
    return axios.get(URL_BACKEND)
}

const UpdateUserAPI = (data) => {
    const URL_BACKEND = "/users/update";
    return axios.put(URL_BACKEND, data)
}

const DeleteUserAPI = (id) => {
    const URL_BACKEND = `/users/${id}`;
    return axios.delete(URL_BACKEND)
}

export {
    CreateUserAPI,
    GetAllUserAPI,
    UpdateUserAPI,
    DeleteUserAPI,
    GetAllUserWithPage,
    RegisterAPI, LoginAPI
}

// upload file img

const UploadImage = (file, type) => {
    const URL_BACKEND = `/image/upload`;

    let config = {
        headers: {
            "upload-type": type,
            "Content-Type": "multipart/form-data"
        }
    }

    const bodyFormData = new FormData()
    bodyFormData.append("file", file)

    return axios.post(URL_BACKEND, bodyFormData, config)
}

export {
    UploadImage
}
