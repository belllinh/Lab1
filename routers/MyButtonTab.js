import { createMaterialBottomTabNavigator } from "react-native-paper/lib/typescript/react-navigation";
import Profile from "../screens/Profile";

const Tab =createMaterialBottomTabNavigator()

const MyBottomTab =() =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name ="HOME" component={Home}
            options={{
                tabBarIcon:"home",
                tabBarBadge:4,
                title:"Trang Chu"
            }}
            />
            <Tab.Screen name="Profile" component={Profile}/>
            <Tab.Screen name="Setting" component={Setting}/>

        </Tab.Navigator>
    )
}