import { createStackNavigator, TransitionPresets } from "react-navigation-stack";
import MasterAdminHomeScreen from '../screens/MasterAdminHomeScreen';
import AddNewAdminScreen from '../screens/AddNewAdminScreen';

const MasterAdminNavigator = createStackNavigator(
    {
        MasterAdminHome: MasterAdminHomeScreen,
        AddNewAdmin: AddNewAdminScreen
    },
    {
        headerMode: 'none',
        defaultNavigationOptions: {
            ...TransitionPresets.SlideFromRightIOS
        }
    }
);

export default MasterAdminNavigator;