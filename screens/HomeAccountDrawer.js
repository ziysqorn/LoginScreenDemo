import 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import {
    View, 
    Text , 
    StyleSheet,
    SafeAreaView,
    Dimensions,
    TextInput,
    Button,
    Image
} from 'react-native';

import { HomeSettingsTab } from './HomeSettingsTab';
import { Account } from './Account';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer=createDrawerNavigator();

export function HomeAccountDrawer({navigation, route}){
    return(
        <Drawer.Navigator initialRouteName='Home'
        screenOptions={{
            drawerActiveBackgroundColor: '#FF8C00',
            drawerActiveTintColor: 'white',
            drawerLabelStyle: {
                marginLeft: -25,
                fontWeight: 'bold',
                fontSize: 15
            }
        }}
        >
            <Drawer.Screen  name="Home" component={HomeSettingsTab} options={{
            drawerIcon: ({focused})=>(
                <Image source={require('../images/Home.png')} style={styles(focused).drawerIcon}/>
            )
        }}/>
            <Drawer.Screen name="Account" component={Account} options={{
            drawerIcon: ({focused})=>(
                <Image source={require('../images/Account.png')} style={styles(focused).drawerIcon}/>
            )
        }}/>
        </Drawer.Navigator>
    )
}
const styles=(focused)=>StyleSheet.create({
    drawerIcon: {
        width: 25,
        height: 25,
        tintColor: focused?'white':'black'
    }
})