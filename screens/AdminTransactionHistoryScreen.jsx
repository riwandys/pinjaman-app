import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import Header from '../components/Header';
import AdminHistoryDataItems from '../components/AdminHistoryDataItems';
import BackIcon from '../assets/back_icon.svg';
import AdminBottomTabs from '../components/AdminBottomTabs';

const AdminTransactionHistoryScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Riwayat" leftIcon={BackIcon} />
            <ScrollView>
                <View style={styles.dataContainer}>
                    <AdminHistoryDataItems />
                    <AdminHistoryDataItems />
                    <AdminHistoryDataItems />
                    <AdminHistoryDataItems />
                    <AdminHistoryDataItems />
                    <AdminHistoryDataItems />
                    <AdminHistoryDataItems />
                    <AdminHistoryDataItems />
                    <AdminHistoryDataItems />
                    <AdminHistoryDataItems />
                    <AdminHistoryDataItems />
                    <AdminHistoryDataItems />
                    <AdminHistoryDataItems />
                    <AdminHistoryDataItems />
                    <AdminHistoryDataItems />
                    <AdminHistoryDataItems />
                    <AdminHistoryDataItems />
                    <AdminHistoryDataItems />
                    <AdminHistoryDataItems />
                    <AdminHistoryDataItems />
                </View>
            </ScrollView>
            <AdminBottomTabs />
        </SafeAreaView >
    )
}

export default AdminTransactionHistoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    dataContainer: {
        padding: 16
    },
})
