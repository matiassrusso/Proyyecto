import React, {Component, useState} from 'react'
import { StatusBar, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { mainStyles, loginStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'
import ToolBar from '@components/ToolBar'



function goToScreen(props, routeName){
    props.navigation.navigate(routeName)
}

export default function RecuperarPasswordScreen(props) {

    return(
        <ScrollView
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={{backgroundColor: color.WHITE}}>
            <StatusBar backgroundColor={color.BLACK} translucent ={true}/>
            <ToolBar titulo='Contraseña'
            onPressLeft ={()=> goToScreen(props, 'Login')}
            iconLeft={require('@recursos/images/back.png')}/>
            <View style={[mainStyles.container,{padding: 50}]}>
                <Text style={mainStyles.titleText}> Recuperar{'\n'}contraseña</Text>
            <MyTextInput keyboardType='email-adress' placeholder='E-mail' image='user'/>
            <View style = {mainStyles.btnMain}>
                <TouchableOpacity onPress={()=> goToScreen(props, 'Login')}>
                    <Text style={ mainStyles.btntxt}>Recuperar</Text>
                    </TouchableOpacity>
                </View>     
            </View>
        </ScrollView>

    )    
}
