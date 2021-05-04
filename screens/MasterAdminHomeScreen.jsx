import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native'
import AdminDataItems from '../components/AdminDataItems'

export default function MasterAdminHomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="rgba(0,0,0,0.1)" translucent />
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerText}>Halo</Text>
                    <Text style={styles.headerText}>Master Admin</Text>
                </View>
                <View>
                    <Text style={styles.headerText}>DD/MM/YYYY</Text>
                </View>
            </View>
            <View style={styles.highlightDataContainer}>
                <View style={styles.highlightData}>
                    <Text style={styles.dataTitle}>Total Admin</Text>
                    <Text style={styles.dataAmount}>12</Text>
                </View>
                <View style={styles.highlightData}>
                    <Text style={styles.dataTitle}>Total Pengguna</Text>
                    <Text style={styles.dataAmount}>141</Text>
                </View>
            </View>
            <ScrollView style={styles.adminListContainer}>
                <AdminDataItems />
                <AdminDataItems />
                <AdminDataItems />
                <AdminDataItems />
                <AdminDataItems />
                <AdminDataItems />
                <AdminDataItems />
                <AdminDataItems />
                <AdminDataItems />
            </ScrollView>
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
        backgroundColor: '#F49135',
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
        paddingVertical: 24,
        alignItems: 'center'
    },
    dataTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 8
    },
    dataAmount: {
        color: '#F7A75D',
        fontSize: 56,
        fontWeight: 'bold'
    },
    adminListContainer: {
        padding: 16
    }
});
