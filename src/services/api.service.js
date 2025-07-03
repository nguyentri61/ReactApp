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

const GetAllUserAPI = () => {
    const URL_BACKEND = "/users";
    return axios.get(URL_BACKEND)

}

const UpdateUserAPI = (data) => {
    const URL_BACKEND = "/users/update";
    return axios.put(URL_BACKEND, data)
}

export {
    CreateUserAPI,
    GetAllUserAPI,
    UpdateUserAPI
}

