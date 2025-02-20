// import React, {createContext, useContext, useState} from "react";

// const AuthContext = createContext();

// function useAuth () {
//     return useContext(AuthContext);
// }

// function AuthProvider ({child}) {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     return (
//         <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
//             {child}
//         </AuthContext.Provider>
//     )
// }

// export {useAuth, AuthProvider};

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};
