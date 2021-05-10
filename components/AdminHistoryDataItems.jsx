import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import ArrowIcon from '../assets/arrow_drop_right.svg';
import color from '../constants/color';

export default function AdminHistoryDataItems() {
    return (
        <View style={styles.border}>
            <TouchableNativeFeedback useForeground={true}>
                <View style={styles.dataContainer} >
                    <View style={styles.itemDataContainer}>
                        <View>
                            <Text style={styles.itemTitle}>ID Pengguna</Text>
                            <Text style={styles.userIDText}>10000XY</Text>
                        </View>
                        <Text style={styles.statusText}>Status : <Text style={styles.statusValueText}>Pendaftaran Diterima</Text></Text>
                        <Text style={styles.timeText}>DD/MM/YYYY</Text>
                    </View>
                    <View style={styles.arrowContainer}>
                        <ArrowIcon height={28} width={28} />
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    border: {
        borderRadius: 6,
        borderColor: color.primary,
        borderWidth: 1,
        marginBottom: 14
    },
    dataContainer: {
        height: 100,
        backgroundColor: 'white',
        elevation: 2,
        paddingVertical: 12,
        paddingLeft: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6
    },
    itemDataContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    itemTitle: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    userIDText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    statusText: {
        fontSize: 10
    },
    arrowContainer: {
        width: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftColor: color.primary,
        borderLeftWidth: 1
    },
    statusValueText: {
        color: 'green'
    },
    timeText: {
        fontSize: 8,
        fontWeight: 'bold'
    }
});
