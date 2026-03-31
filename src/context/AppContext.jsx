import { useState } from "react";
import { createContext, useContext } from "react";

const AppContext = createContext()

export function AppProvider({children}) {
    const [ isDrawerOpen, setDrawerOpen ] = useState(false)
    const openDrawer = () => setDrawerOpen(true)
    const closeDrawer = () => setDrawerOpen(false)

    return(
        <AppContext.Provider value={{ isDrawerOpen, openDrawer, closeDrawer}}>
            {children}
        </AppContext.Provider>
    );
};

export function useAppContext() {
    return useContext(AppContext);
};