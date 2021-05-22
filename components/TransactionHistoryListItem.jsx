import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../constants/color';
import { currencyFormat } from '../constants/function';

const TransactionHistoryListItem = (props) => {
    const getPaymentDate = () => {
        const [paymentDate] = props.paymentDate.split(' ');
        const [year, month, date] = paymentDate.split('-');
        return `${date}/${month}/${year}`;
    }

    return (
        <TouchableOpacity activeOpacity={0.4} onPress={props.onPress}>
            <View style={styles.listItemContainer}>
                <View style={styles.leftContainer}>
                    <View>
                        <Text style={{ fontSize: 11 }}>Tagihan</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{currencyFormat(props.total)}</Text>
                    </View>
                    <Text style={{ fontSize: 11 }}>Dibayar</Text>
                </View>
                <View style={styles.centerContainer}>
                    <View>
                        <Text style={{ fontSize: 9 }}>ID Transaksi</Text>
                        <Text style={{ fontSize: 9 }}>{props.id}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 9 }}>Penerima</Text>
                        <Text style={{ fontSize: 9 }}>{props.accountNumber} ({props.bank})</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 9 }}>Dana diperoleh</Text>
                        <Text style={{ fontSize: 9 }}>{currencyFormat(props.amount)}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 9 }}>Biaya Admin</Text>
                        <Text style={{ fontSize: 9 }}>{currencyFormat(props.adminFee)}</Text>
                    </View>
                </View>
                <View style={styles.rightContainer}>
                    <View style={{ flexGrow: 1 }}>
                        <Text style={{ fontSize: 10, textAlign: 'center' }}>Dibayar pada</Text>
                    </View>
                    <View style={{ flexGrow: 50, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 10, textAlign: 'center', fontWeight: 'bold' }}>{getPaymentDate()}</Text>
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