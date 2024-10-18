import "react-native-gesture-handler"
import { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Projects1 from "./components/Projects1";
import Projects2 from "./components/Projects2";
import Projects3 from "./components/Projects3";
import Projects4 from "./components/Projects4";
import Projects5 from "./components/Projects5";
import Projects6 from "./components/Projects6";
import Projects7 from "./components/Projects7";
import Projects8 from "./components/Projects8";
import DemoDarkLightTheme from "./components/DemoDarkLightTheme";
import Calculator from "./components/Calculator";
import DemoAppar from "./components/DemoAppar";
import DemoBanner from "./components/DemoBanner";
import LoginScreen from "./components/LoginScreen";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./components/MyStack";

const App = () => {

  return(
    <NavigationContainer>
      <PaperProvider>
        {/*<DemoTheme/>*/}
        {/*<DemoDarkLightTheme/>*/}
        {/*<DemoAppbar/>*/}
        {/*<DemoBanner/>*/}
        {/*<LoginScreen/>*/}
        {/*<CreateNewAccountScreen/>*/}
        {/*<ForgotPasswordScreen/>*/}
        {/* <HomeScreen/> */}
        <MyStack/>
      </PaperProvider>
    </NavigationContainer>
    
  )
}

export default App;