import React, {createContext,useState} from "react";

const MyProvider = (props) =>{
    const [data,setData]= useState({});
    return (
        <AppContext.Provider value={[data,setData]}>
            {props.children}
        </AppContext.Provider>
    );
}

export default MyProvider;
export const AppContext = createContext();