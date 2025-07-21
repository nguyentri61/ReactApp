import { createContext, useState } from 'react';

export const AuthContext = createContext({
    id: "",
    fullName: "",
    email: "",
    password: "",
    phone: "",
    imgAvatar: ""
});

export const AuthWrapper = ({ props }) => {
    const [user, setUser] = useState({
        id: "",
        fullName: "",
        email: "",
        password: "",
        phone: "",
        imgAvatar: ""
    });

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    );
}

