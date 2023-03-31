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


const windowWidth=Dimensions.get('window').width
const windowHeight=Dimensions.get('window').height


export function Settings({navigation, route}){
    const {color, setColor}=useContext(ColorContext)
    return(
        <View style={styles.fullScreen}>
            <View style={styles.paintContainer}>
                <Image source={require('../images/Paint.png')}/>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Choose your name's color here:
                </Text>
            </View>
            <TouchableOpacity style={styles.redColor}
             onPress={()=>
                setColor('#DC143C')
             }/>
            <TouchableOpacity style={styles.yellowColor}
             onPress={()=>
                setColor('#FFD700')
             }
            />
            <TouchableOpacity style={styles.blackColor}
             onPress={()=>
                setColor('black')
             }
            />
        </View>
    );
}

const styles=StyleSheet.create({
    fullScreen:{
        backgroundColor: '#ADD8E6',
        width: '100%',
        height: '100%',
    },
    paintContainer:{
        marginTop: 0.2*windowHeight,
        alignItems: 'center',
    },
    titleContainer:{
        marginTop: 10,
        alignItems: 'center',
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    redColor: {
        position: 'absolute',
        marginTop: 0.43*windowHeight,
        marginLeft: windowWidth*0.05,
        borderRadius: 100,
        width: 110,
        height: 110,
        backgroundColor: '#DC143C'
    },
    yellowColor: {
        position: 'absolute',
        marginTop: 0.43*windowHeight,
        marginLeft: windowWidth*0.35,
        borderRadius: 100,
        width: 110,
        height: 110,
        backgroundColor: '#FFD700'
    },
    blackColor: {
        position: 'absolute',
        marginTop: 0.43*windowHeight,
        marginLeft: windowWidth*0.65,
        borderRadius: 100,
        width: 110,
        height: 110,
        backgroundColor: 'black'
    }
})
