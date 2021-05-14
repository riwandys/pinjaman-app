import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../constants/color';

const TransactionHistoryListItem = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={props.onPress}>
            <View style={styles.listItemContainer}>
                <View style={styles.leftContainer}>
                    <View>
                        <Text style={{ fontSize: 11 }}>Tagihan</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Rp X.XXX.XXX</Text>
                    </View>
                    <Text style={{ fontSize: 11 }}>Cicilan X Bulan</Text>
                </View>
                <View style={styles.centerContainer}>
                    <View>
                        <Text style={{ fontSize: 9 }}>ID Transaksi</Text>
                        <Text style={{ fontSize: 9 }}>XX12345678900</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 9 }}>Penerima</Text>
                        <Text style={{ fontSize: 9 }}>12345678900(A/N)</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 9 }}>Dana diperoleh</Text>
                        <Text style={{ fontSize: 9 }}>Rp XX.XXX.XXX</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 9 }}>Biaya Admin</Text>
                        <Text style={{ fontSize: 9 }}>Rp X.XXX.XXX</Text>
                    </View>
                </View>
                <View style={styles.rightContainer}>
                    <View style={{ flexGrow: 1 }}>
                        <Text style={{ fontSize: 10, textAlign: 'center' }}>Dibayar pada</Text>
                    </View>
                    <View style={{ flexGrow: 50, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 10, textAlign: 'center', fontWeight: 'bold' }}>DD/MM/YYYY</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItemContainer: {
        borderRadius: 6,
        borderWidth: 1,
        borderColor: color.primary,
        height: 165,
        flexDirection: 'row',
        paddingVertical: 12,
        marginBottom: 16
    },
    leftContainer: {
        flexGrow: 9,
        paddingHorizontal: 12,
        justifyContent: 'space-between'
    },
    centerContainer: {
        flexGrow: 7,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: color.primary,
        paddingHorizontal: 12,
        justifyContent: 'space-between'
    },
    rightContainer: {
        flexGrow: 6,
        paddingHorizontal: 12
    }
});

export default TransactionHistoryListItem;