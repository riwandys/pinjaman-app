import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const AuthNavigator = createStackNavigator(
    {
        Login: LoginScreen,
        // Register: RegisterScreen
    },
    {
        headerMode: 'none'
    }
);

export default AuthNavigator;