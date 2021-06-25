import {createContext, useState} from "react";

export const AccountContext = createContext();

const AccountContextProvider = (props) => {
    const [page, setPage] = useState("login");

    const switchToLogin = () => {
        setPage("login")
    };

    const switchToSignUp = () => {
        setPage("signup")
    }

    return(
        <AccountContext.Provider
            value={{
                page,
                switchToLogin,
                switchToSignUp
            }}
        >
            {props.children}
        </AccountContext.Provider>
    )
}

export default AccountContextProvider;