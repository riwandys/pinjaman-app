import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableNativeFeedback } from 'react-native'
import Header from '../components/Header';
import BackIcon from '../assets/back_icon.svg';
import UserIcon from '../assets/user_circle.svg';

const AccountScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Akun" leftIcon={BackIcon} />
            <ScrollView>
                <View style={styles.accountSection}>
                    <UserIcon width={45} height={45} style={styles.userIcon} />
                    <View>
                        <Text style={{ ...styles.accountInfoText, fontWeight: 'bold' }}>MasterAdmin</Text>
                        <Text style={styles.accountInfoText}>(ID)</Text>
                    </View>
                </View>
                <View style={styles.settingSection}>
                    <TouchableNativeFeedback>
                        <View style={{ ...styles.settingItem, borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }}>
                            <Text>Ganti Email</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <View style={styles.settingItem}>
                            <Text>Ganti Password</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    accountSection: {
        height: 85,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14,
        elevation: 8
    },
    userIcon: {
        marginRight: 15
    },
    accountInfoText: {
        fontSize: 12
    },
    settingSection: {
        backgroundColor: 'white',
        marginBottom: 14,
        elevation: 8,
    },
    settingItem: {
        height: 48,
        paddingHorizontal: 16,
        justifyContent: 'center'
    }
})
