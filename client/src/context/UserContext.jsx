import { createContext, useState } from "react";
import { logout } from "../api/user.api";
import { toast } from "react-toastify";
import { redirect, useNavigate } from "react-router-dom";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => { },
    logoutUser: () => { }
});


export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(null);

    const logoutUser = async () => {
        await logout()
            .then((data) => {
                toast.success(data?.msg);
                navigate('/');
                window.location.reload();
            })
            .catch(err => console.log(err));
    }

    const value = { currentUser, setCurrentUser, logoutUser }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
