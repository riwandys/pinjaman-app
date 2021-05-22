import React, { useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import BackIcon from '../assets/back_icon.svg';
import HistoryIcon from '../assets/history.svg';
import TransactionListItem from '../components/TransactionListItem';
import { getTransactionsList } from '../redux/actions/user';


const TransactionListScreen = (props) => {
    const dispatch = useDispatch();
    const { nik, token } = useSelector(state => state.auth);
    const transactionList = useSelector(state => state.user.transactions);

    const backIconPressed = () => {
        props.navigation.goBack();
    }

    const navigateToPayBill = (data) => {
        props.navigation.navigate('PayBill', {
            data: data
        });
    }

    const navigateToHistory = () => {
        props.navigation.navigate('UserTransactionHistory');
    }

    useEffect(() => {
        dispatch(getTransactionsList(nik, token));
    }, [dispatch]);

    const renderItem = ({ item, index }) => {
        return (
            <TransactionListItem
                total={item.total}
                amount={item.amount}
                id={item.id}
                adminFee={item.admin_fee}
                deadline={item.deadline}
                bank={item.bank}
                accountNumber={item.account_number}
                onPress={navigateToPayBill.bind(this, item)}
            />
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Transaksi" leftIcon={BackIcon} onLeftIconPressed={backIconPressed} rightIcon={HistoryIcon} onRightIconPressed={navigateToHistory} />
            <FlatList
                data={transactionList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingVertical: 16 }}
            />
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default TransactionListScreen;