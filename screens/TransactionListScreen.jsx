import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/Header';
import BackIcon from '../assets/back_icon.svg';
import TransactionListItem from '../components/TransactionListItem';
import BlockButton from '../components/BlockButton';

const TransactionListScreen = (props) => {
    const backIconPressed = () => {
        props.navigation.goBack();
    }
    const navigateToPayBill = () => {
        props.navigation.navigate('PayBill');
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Transaksi" leftIcon={BackIcon} onLeftIconPressed={backIconPressed} />
            <ScrollView>
                <View style={styles.scrollContainer}>
                    <TransactionListItem onPress={navigateToPayBill} />
                    <TransactionListItem onPress={navigateToPayBill} />
                    <TransactionListItem onPress={navigateToPayBill} />
                    <TransactionListItem onPress={navigateToPayBill} />
                    <TransactionListItem onPress={navigateToPayBill} />
                    <TransactionListItem onPress={navigateToPayBill} />
                    <TransactionListItem onPress={navigateToPayBill} />
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

export default TransactionListScreen;