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

import { useContext } from 'react';
import  {ColorContext}  from './HomeSettingsTab';
import  {UserContext}  from './HomeSettingsTab';



const windowWidth=Dimensions.get('window').width
const windowHeight=Dimensions.get('window').height

export function Home({navigation, route}){
    const name=useContext(UserContext)
    const {color, setColor}=useContext(ColorContext)
    return(
        <View style={styles.fullScreen}>
            <View style={styles.helloContainer}>
                <Image source={require('../images/Hello.png')}/>
            </View>
            <View style={styles.titleContainer}>
            <Text style={styles.title}>
                Hi
            </Text>
            <Text style={{color: `${color}`, fontSize: 25, fontWeight: 'bold'}}>
                    {name}
            </Text>
            </View>
        </View>
    );
}
const styles=StyleSheet.create({
    fullScreen:{
        backgroundColor: '#ADD8E6',
        width: '100%',
        height: '100%',
    },
    helloContainer:{
        marginTop: 0.2*windowHeight,
        alignItems: 'center',
    },
    titleContainer:{
        marginTop: 20,
        alignItems: 'center',
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold'
    },
})
