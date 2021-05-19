import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import JobRegisterScreen from '../screens/JobRegisterScreen';
import KTPPreviewScreen from '../screens/KTPPreviewScreen';
import KTPSelfiePreviewScreen from '../screens/KTPSelfiePreviewScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const AuthNavigator = createStackNavigator(
    {
        Login: LoginScreen,
        Register: RegisterScreen,
        KTPPreview: KTPPreviewScreen,
        KTPSelfiePreview: KTPSelfiePreviewScreen,
        JobRegister: JobRegisterScreen
    },
    {
        headerMode: 'none',
        defaultNavigationOptions: {
            ...TransitionPresets.SlideFromRightIOS
        }
    }
);

export default AuthNavigator;