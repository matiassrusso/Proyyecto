import React, {Component, useState} from 'react'
import { StatusBar, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { mainStyles, loginStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'


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
                <View style={[mainStyles.container,{padding: 25}]}>
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
