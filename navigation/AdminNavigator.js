import { createStackNavigator, TransitionPresets } from "react-navigation-stack";
import AdminHomeScreen from '../screens/AdminHomeScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import AcceptApplicationScreen from '../screens/AcceptApplicationScreen';
import RejectApplicationAndPaymentScreen from '../screens/RejectApplicationAndPaymentScreen';
import PaymentDetailScreen from '../screens/PaymentDetailScreen';
import AdminTransactionHistoryScreen from '../screens/AdminTransactionHistoryScreen';

const AdminNavigator = createStackNavigator(
    {
        AdminHome: AdminHomeScreen,
        UserDetail: UserDetailScreen,
        AcceptApplication: AcceptApplicationScreen,
        RejectApplicationAndPayment: RejectApplicationAndPaymentScreen,
        PaymentDetail: PaymentDetailScreen,
        AdminTransactionHistory: AdminTransactionHistoryScreen
    },
    {
        headerMode: 'none',
        defaultNavigationOptions: {
            ...TransitionPresets.SlideFromRightIOS
        }
    }
);

export default AdminNavigator;