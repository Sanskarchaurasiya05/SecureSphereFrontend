import { createContext, useState } from "react";
import { AppConstant } from "../util/constants";
import { toast } from "react-toastify";
import axios from 'axios';

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const BACKEND_URL = AppConstant.BACKEND_URL;
     const [isLoggedIn , setIsLoggedIn] = useState(false);
     const[userData,setUserData] = useState(false);


     const getUserData = async() =>{
        try{
            const response = await axios.get(BACKEND_URL+"/profile");
            if(response.status === 200){
                setUserData(response.data);
            }else{
                toast.error("Unable to retrive profile");
            }
        }catch(err){
            toast.error(err.message);
        }
     }


     const contextValue={
        BACKEND_URL,
        isLoggedIn,setIsLoggedIn,
        userData,setUserData,
        getUserData,
    }
    return (
        // whatever we pass to appcontextprovider that will be all the components of the app
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}