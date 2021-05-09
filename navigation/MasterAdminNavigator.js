import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import MasterAdminHomeScreen from '../screens/MasterAdminHomeScreen';
import AddNewAdminScreen from '../screens/AddNewAdminScreen';

const MasterAdminNavigator = createStackNavigator({
    MasterAdminHome: MasterAdminHomeScreen,
    AddNewAdmin: AddNewAdminScreen
});

export default createAppContainer(MasterAdminNavigator);