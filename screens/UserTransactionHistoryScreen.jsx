import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/Header';
import BackIcon from '../assets/back_icon.svg';
import HistoryIcon from '../assets/history.svg';
import TransactionHistoryListItem from '../components/TransactionHistoryListItem';


const UserTransactionHistoryScreen = (props) => {
    const backIconPressed = () => {
        props.navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Riwayat Transaksi" leftIcon={BackIcon} onLeftIconPressed={backIconPressed} rightIcon={HistoryIcon} />
            <ScrollView>
                <View style={styles.scrollContainer}>
                    <TransactionHistoryListItem />
                </View>
            </ScrollView>
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
