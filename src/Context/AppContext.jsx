import { createContext, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import{GetUser} from '../pages/Login/AuthSlice';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {


     const dispatch = useDispatch();
            useEffect(()=>
              {
               
                dispatch(GetUser());
              },[dispatch]);
           const {user} = useSelector((state)=>state.auth);

    return (
        <AppContext.Provider value={{ user }}>
            {children}
        </AppContext.Provider>
    );
};
