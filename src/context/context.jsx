import { createContext, useState } from "react";

const AppContext = createContext(null)

const AppProvider = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    const mediaqueryList = window.matchMedia("(min-width: 768px)");


    mediaqueryList.addEventListener('change', (EventoMediaQueryList) => {
        if (EventoMediaQueryList.matches && showMenu) {
            setShowMenu(false)
        }
    });


    return <AppContext.Provider value={{ showMenu, handleShowMenu }}>
        {children}
    </AppContext.Provider>


}

export { AppContext, AppProvider }