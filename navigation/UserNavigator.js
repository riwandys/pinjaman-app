import { createStackNavigator, TransitionPresets } from "react-navigation-stack";
import UserHomeScreen from "../screens/UserHomeScreen";
import LoanApplyScreen from "../screens/LoanApplyScreen";
import LoanConfirmationScreen from "../screens/LoanConfirmationScreen";
import TransactionListScreen from "../screens/TransactionListScreen";
import PayBillScreen from '../screens/PayBillScreen';
import PaymentConfirmationScreen from '../screens/PaymentConfirmationScreen';
import UserTransactionHistoryScreen from '../screens/UserTransactionHistoryScreen';
import AccountScreen from '../screens/AccountScreen';
import SettingScreen from '../screens/SettingScreen';

const UserNavigator = createStackNavigator(
    {
        UserHome: UserHomeScreen,
        LoanApply: LoanApplyScreen,
        LoanConfirmation: LoanConfirmationScreen,
        TransactionList: TransactionListScreen,
        PayBill: PayBillScreen,
        // PaymentConfirmation: PaymentConfirmationScreen,
        UserTransactionHistory: UserTransactionHistoryScreen,
        Account: AccountScreen,
        // Setting: SettingScreen
    },
    {
        headerMode: 'none',
        defaultNavigationOptions: {
            ...TransitionPresets.SlideFromRightIOS
        }
    }
)

export default UserNavigator;