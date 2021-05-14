import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/Header';
import BackIcon from '../assets/back_icon.svg';
import TransactionListItem from '../components/TransactionListItem';

const TransactionListScreen = (props) => {
    const backIconPressed = () => {
        props.navigation.goBack();
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Transaksi" leftIcon={BackIcon} onLeftIconPressed={backIconPressed} />
            <ScrollView>
                <View style={styles.scrollContainer}>
                    <TransactionListItem />
                    <TransactionListItem />
                    <TransactionListItem />
                    <TransactionListItem />
                    <TransactionListItem />
                    <TransactionListItem />
                    <TransactionListItem />
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
    }
})

export default TransactionListScreen;