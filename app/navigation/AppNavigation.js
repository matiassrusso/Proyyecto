import { ImagePickerIOS } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SplashScreen from '@screen/SplashScreen'
import LoginScreen from '@screen/LoginScreen'
import PrincipalScreen from '@screen/PrincipalScreen'
import RecuperarPasswordScreen from "@screen/RecuperarPasswordScreen";
import RegistroScreen from "@screen/RegistroScreen";






const AppNavigation = createStackNavigator({
    Splash:{
        screen: SplashScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Login:{
        screen: LoginScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Principal:{
        screen: PrincipalScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    RecuperarPassword:{
        screen: RecuperarPasswordScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Registro:{
        screen: RegistroScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
})

export default createAppContainer(AppNavigation)