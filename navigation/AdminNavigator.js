import { createStackNavigator, TransitionPresets } from "react-navigation-stack";
import AdminHomeScreen from '../screens/AdminHomeScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import AcceptApplicationScreen from '../screens/AcceptApplicationScreen';
import RejectPaymentScreen from '../screens/RejectPaymentScreen';
import PaymentDetailScreen from '../screens/PaymentDetailScreen';
import AdminTransactionHistoryScreen from '../screens/AdminTransactionHistoryScreen';
import AccountScreen from "../screens/AccountScreen";

const AdminNavigator = createStackNavigator(
    {
        AdminHome: AdminHomeScreen,
        UserDetail: UserDetailScreen,
        AcceptApplication: AcceptApplicationScreen,
        RejectPayment: RejectPaymentScreen,
        PaymentDetail: PaymentDetailScreen,
        AdminTransactionHistory: AdminTransactionHistoryScreen,
        Account: AccountScreen
    },
    {
        headerMode: 'none',
        defaultNavigationOptions: {
            ...TransitionPresets.SlideFromRightIOS
        }
    }
);

export default AdminNavigator;