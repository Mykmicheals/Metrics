import React, { useState } from 'react'

const AppContext = React.createContext({
    showContactPage: false,
    showContactHandler: () => { },
    hideContactHandler: () => { },
})

export const AppProvider = (props) => {
    const [showContact, setShowContact] = useState(false)
    // const [hideContact, setHideContact] = useState(false)
    const showContactHandler = () => {
        setShowContact(true)
    }

    const hideContactHandler = () => {
        setShowContact(false)
    }

    const contextValue = {
        showContactPage: showContact,
        showContactHandler: showContactHandler,
        hideContactHandler: hideContactHandler
    }

    return <AppContext.Provider value={contextValue}>
        {props.children}
    </AppContext.Provider>
}


export default AppContext