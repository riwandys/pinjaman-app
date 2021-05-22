import React, { useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import BackIcon from '../assets/back_icon.svg';
import TransactionHistoryListItem from '../components/TransactionHistoryListItem';
import { getTransactionsHistory } from '../redux/actions/user';

const UserTransactionHistoryScreen = (props) => {
    const transactionHistoryList = useSelector(state => state.user.transactionHistory);
    const { nik, token } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const backIconPressed = () => {
        props.navigation.goBack();
    }

    useEffect(() => {
        dispatch(getTransactionsHistory(nik, token));
    }, [dispatch])

    const renderItem = ({ item, index }) => {
        return (
            <TransactionHistoryListItem
                total={item.total}
                amount={item.amount}
                id={item.id}
                adminFee={item.admin_fee}
                paymentDate={item.paid_date}
                bank={item.bank}
                accountNumber={item.account_number}
            />
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Riwayat Transaksi" leftIcon={BackIcon} onLeftIconPressed={backIconPressed} />
            <FlatList
                data={transactionHistoryList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContainer: {
        padding: 16
    },
    buttonContainer: {
        paddingHorizontal: 16,
        paddingBottom: 8
    }
})

export default UserTransactionHistoryScreen;