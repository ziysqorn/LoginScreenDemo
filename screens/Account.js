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

const windowWidth=Dimensions.get('window').width
const windowHeight=Dimensions.get('window').height


export function Account({navigation, route}){
    const clearName=''
    function LogoutEvent(){
        navigation.navigate('Login', clearName)
    }
    return(
        <View style={styles(null).fullScreen}>
            <View style={styles(null).titleContainer}>
            <TouchableOpacity style={styles(null).buttonLogout} onPress={()=>LogoutEvent()}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>
                    Logout
            </Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles=(focused)=>StyleSheet.create({
    fullScreen:{
        backgroundColor: '#ADD8E6',
        width: '100%',
        height: '100%',
    },
    titleContainer:{
        marginTop: 0.3*windowHeight,
        alignItems: 'center',
    },
    buttonLogout: {
        height: '30%',
        width: '60%',
        borderRadius: 25,
        backgroundColor: '#FF8C00',
        alignItems: 'center',
        justifyContent: 'center'
    },
})
