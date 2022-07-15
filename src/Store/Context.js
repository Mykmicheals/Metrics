import React, { useState } from 'react'

const AppContext = React.createContext({
    showContactPage: false,
    showNave: false,
    showNav: () => { },
    hideNav: () => { },
    showContactHandler: () => { },
    hideContactHandler: () => { },
})

export const AppProvider = (props) => {
    const [showContact, setShowContact] = useState(false)
    const [showNav, setShowNav] = useState(false)
    const showContactHandler = () => {
        setShowContact(true)
    }

    const hideContactHandler = () => {
        setShowContact(false)
    }

    const showNavHandler = () => {
        setShowNav(true)
    }

    const hideNavHandler = () => {
        setShowNav(false)
    }

    const contextValue = {
        showContactPage: showContact,
        showNav:showNav,
        showContactHandler: showContactHandler,
        hideContactHandler: hideContactHandler,
        showNavHandler: showNavHandler,
        hideNavHandler: hideNavHandler,
    }

    return <AppContext.Provider value={contextValue}>
        {props.children}
    </AppContext.Provider>
}


export default AppContext