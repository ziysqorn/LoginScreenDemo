import { Alert, ImageBackground, TouchableOpacity } from 'react-native';
import {
    View, 
    Text , 
    StyleSheet,
    SafeAreaView,
    Dimensions,
    TextInput,
    Button,
} from 'react-native';
import { useState, useEffect} from 'react';

const windowWidth=Dimensions.get('window').width
const windowHeight=Dimensions.get('window').height
const LoginBackground=require("../images/LoginBackGround.jpg")

export function Login({navigation, route}){
    const [name, setName]=useState('')
    useEffect(()=>{
        setName('')
        console.log(name)
    }, [route.params?.clearName])
    function LoginEvent(){
        if(name===''){
            Alert.alert('Please enter your username !')
        }
        else{
        navigation.setParams({clearName: name})
        navigation.navigate('HomeAccount', {screen: 'Home', params: {userName: name}})
        }
    }
    return(
        <ImageBackground source={LoginBackground} style={styles.background}>
        <View style={styles.fullScreen}>
            <View style={styles.titleContainer}>
            <Text style={styles.title}>
            Login
            </Text>
            </View>
            <View style={styles.textInputContainer}>
            <TextInput 
            placeholder='Username'
            placeholderTextColor='white'
            value={name}
            onChangeText={setName}
            style={styles.textStyle}
            />
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonLogin} onPress={()=>LoginEvent()}>
                <Text style={styles.buttonTitle}>
                    Login
                </Text>
            </TouchableOpacity>
            </View>
        </View>
        </ImageBackground>
    );
}
const styles=StyleSheet.create({
    fullScreen:{
        width: '100%',
        height: '100%',
    },
    background:{
        position: 'absolute',
        height: windowHeight,
        width: windowWidth,
    },
    titleContainer:{
        marginTop: 0.3*windowHeight,
        alignItems: 'center',
    },
    title:{
        fontSize: 45,
        fontWeight: 'bold',
        color: 'white'
    },
    textInputContainer:{
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 0.1*windowHeight,
    },
    textStyle: {
        width: '95%',
        height: '90%',
        fontSize: 18,
        color: 'white',
        borderBottomWidth: 1.75,
        borderBottomColor: 'white',
    },
    buttonContainer: {
        marginTop: 20,
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold'
    },
    buttonLogin: {
        height: '50%',
        width: '90%',
        borderRadius: 25,
        backgroundColor: '#00BFFF',
        alignItems: 'center',
        justifyContent: 'center'
    }
})