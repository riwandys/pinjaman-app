import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import HomeIcon from '../assets/home_color.svg';
import UserIcon from '../assets/user_circle.svg';
import HistoryIcon from '../assets/history.svg';
import color from '../constants/color'

const AdminBottomTabs = () => {
    return (
        <View style={styles.tabContainer}>
            <TouchableNativeFeedback>
                <View style={styles.navigationTabItem}>
                    <HistoryIcon width={24} height={28} />
                    <Text style={{ ...styles.navTabLabel, color: '#686868' }}>Riwayat</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={styles.navigationTabItem}>
                    <HomeIcon width={24} height={28} />
                    <Text style={{ ...styles.navTabLabel, color: color.primary }}>Beranda</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={styles.navigationTabItem}>
                    <UserIcon width={24} height={28} />
                    <Text style={{ ...styles.navTabLabel, color: '#686868' }}>Akun</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}


const styles = StyleSheet.create({
    tabContainer: {
        width: '100%',
        height: 60,
        flexDirection: 'row'
    },
    navigationTabItem: {
        flex: 1,
        backgroundColor: '#F3F3F3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    navTabLabel: {
        fontSize: 12
    }
})

export default AdminBottomTabs;