import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView, TouchableNativeFeedback } from 'react-native'
import UserDataItems from '../components/UserDataItems'
import AdminBottomTabs from '../components/AdminBottomTabs';
import color from '../constants/color';

export default function AdminHomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="rgba(0,0,0,0.1)" translucent />
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerText}>Halo</Text>
                    <Text style={styles.headerText}>Admin XX</Text>
                </View>
                <View>
                    <Text style={styles.headerText}>DD/MM/YYYY</Text>
                </View>
            </View>
            <View style={styles.highlightDataContainer}>
                <View style={styles.highlightData}>
                    <Text style={styles.dataTitle}>Total Pengguna{'\n'}Menunggu Konfirmasi</Text>
                    <Text style={styles.dataAmount}>12</Text>
                </View>
                <View style={styles.highlightData}>
                    <Text style={styles.dataTitle}>Total Pengguna{'\n'}Terkonfirmasi</Text>
                    <Text style={styles.dataAmount}>183</Text>
                </View>
            </View>
            <ScrollView>
                <View style={styles.adminListContainer}>
                    <UserDataItems />
                    <UserDataItems />
                    <UserDataItems />
                    <UserDataItems />
                    <UserDataItems />
                    <UserDataItems />
                    <UserDataItems />
                    <UserDataItems />
                    <UserDataItems />
                </View>
            </ScrollView>
            <AdminBottomTabs />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: StatusBar.currentHeight + 141,
        width: '100%',
        backgroundColor: color.primary,
        paddingHorizontal: 16,
        paddingTop: StatusBar.currentHeight + 16,
        color: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        color: 'white',
        fontSize: 12
    },
    highlightDataContainer: {
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'space-between'
    },
    highlightData: {
        marginTop: -60,
        height: 149,
        width: '48%',
        borderRadius: 11,
        backgroundColor: 'white',
        elevation: 4,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    dataTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 4,
        textAlign: 'center'
    },
    dataAmount: {
        color: '#F7A75D',
        fontSize: 48,
        fontWeight: 'bold'
    },
    adminListContainer: {
        paddingHorizontal: 16
    },
    buttonContainer: {
        paddingHorizontal: 16,
        paddingBottom: 12
    },
    addButton: {
        width: '100%',
        height: 48,
        backgroundColor: color.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        overflow: 'hidden'
    },
    buttonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold'
    }
});

