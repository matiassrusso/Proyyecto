import React, {Component, useState} from 'react'
import { StatusBar, Text, View, TouchableOpacity, Image } from 'react-native'
//import { View } from 'react-native-animatable'
//import { TouchableOpacity } from 'react-native-gesture-handler'
//import { color } from 'react-native-reanimated'
import { loginStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'

export default function LoginScreen(){

    const [hidepassword, sethidepassword] = useState(false)
        return(
            <View style={[loginStyles.container,{padding: 25}]}>
                <StatusBar backgroundColor={color.WHITE} translucent ={true}/>
                <View style={[loginStyles.logo]}>
                    <Image source={require('@recursos/images/64943.png')}
                    style={{ height:250, width:250}}/>
                </View>
                <MyTextInput keyboardType='email-adress' placeholder='E-mail' image='user'/>
                <MyTextInput keyboardType={null} placeholder='Contraseña' image='lock'
                bolGone={true} secureTextEntry={hidepassword}
                onPress={()=> sethidepassword(!hidepassword)}/>
                <View style = {loginStyles.btnMain}>
                    <TouchableOpacity>
                        <Text style={ loginStyles.btntxt}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>
                <View style = {loginStyles.btnTransparent}>
                    <TouchableOpacity>
                        <Text style={ [loginStyles.btntxt,{ color: color.BLACK}]}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={ [loginStyles.txtTransparent, { fontWeight: 'bold',textDecorationLine: 'underline'}]}>Olvide mi contraseña</Text>
                    </TouchableOpacity>
                </View>


            </View>
            
        )
    
        
    
}