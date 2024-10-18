import { createContext, useContext,useEffect,useMemo,useReducer,useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {NavigationContainer} from "@react-navigation/native"
import { PaperProvider } from "react-native-paper"
import firestore from "@react-native-firebase/auth"
import auth from "@react-native-firebase/auth"
import { useEffect } from "react"
import Home from "../screens/Home"

const initial =()=>
{
    co
    
}



const App =()=>
{
    useEffect(()=> initial(),[])
    return(
    <MyContextControllerProvider>
        <NavigationContainer>
            <Home/>
         </NavigationContainer>
    </MyContextControllerProvider>
    )
}

export default App 