import { NavigationContainer } from "@react-navigation/native"
import { PaperProvider, Text } from "react-native-paper"
import TodoApp from "./android/Excerise4/TodoApp"
import { View } from "react-native"

const App = ()=>{
  return(
    <NavigationContainer>
      <PaperProvider>
        <View style={{flex:1}}>
        <TodoApp/>
          {/* <Text> Hello </Text> */}
        </View>
       
      </PaperProvider>
    </NavigationContainer>
  )
}


export default App;
