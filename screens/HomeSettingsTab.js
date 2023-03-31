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

import { useState } from 'react';

import { Home } from './Home';
import { Settings } from './Settings';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createContext } from 'react';


export const ColorContext=createContext()
export const ColorProvider=ColorContext.Provider

export const UserContext=createContext()
export const NameProvider=UserContext.Provider


const windowWidth=Dimensions.get('window').width
const windowHeight=Dimensions.get('window').height

const Tabs=createBottomTabNavigator();

export function HomeSettingsTab({navigation, route}){
    const [color, setColor]=useState('black')
    return(
    <NameProvider value={route.params?.userName}>
    <ColorProvider value={{color, setColor}}>
    <Tabs.Navigator
    screenOptions={{
        headerShown: false,
        tabBarShowLabel:false,
        tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            height: 90,
            borderRadius: 25
        },
        headerLeft: ()=>(
            <TouchableOpacity style={{marginLeft: 10}}>
                <Image source={require('../images/Menu.png')} style={{width: 25,height: 25}}/>
            </TouchableOpacity>
        )
    }}
    >
        <Tabs.Screen name="MainHome" component={Home} options={{
            tabBarIcon: ({focused})=>(
                <View style={styles(null).tabItemContainer}>
                    <Image
                    source={require('../images/Home.png')}
                    resizeMode='contain'
                    style={styles(focused).tabItemImage}
                    />
                    <Text style={styles(focused).tabItemTitle}>
                        Home
                    </Text>
                </View>
            )
        }}
        />
        <Tabs.Screen name="Settings" component={Settings} options={{
            tabBarIcon: ({focused})=>(
                <View style={styles(null).tabItemContainer}>
                    <Image
                    source={require('../images/SettingsIcon.png')}
                    resizeMode='contain'
                    style={styles(focused).tabItemImage}
                    />
                    <Text style={styles(focused).tabItemTitle}>
                        Settings
                    </Text>
                </View>
            )
        }}/>
    </Tabs.Navigator>
    </ColorProvider>
    </NameProvider>
    );
}
const styles=(focused)=>StyleSheet.create({
    tabItemContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    tabItemImage:{
        width: 25,
        height: 25,
        tintColor: focused?'#FF8C00':'#000000'
    },
    tabItemTitle:{
        color: focused?'#FF8C00':'#000000',
        fontSize: 12
    }
})