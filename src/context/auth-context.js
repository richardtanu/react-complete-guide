import React from 'react';

//globally available javascript object (we decide what the object)
const authContext = React.createContext({
    authenticated: false,
    login: () => { }
})

export default authContext;