import { useEffect, useMemo, useState, createContext } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {

    const [ userName, setUserName ] = useState(sessionStorage.userName);

    const context = useMemo(() => ({ userName, setUserName }), [ userName ]);

    useEffect(() => {
        if (userName) {
            sessionStorage.userName = userName;
        }
    }, [ userName ]);

    return <AppContext.Provider value={context}>
        { children }
    </AppContext.Provider>
}