import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import ArrowIcon from '../assets/arrow_drop_right.svg';

export default function AdminDataItems() {
    return (
        <View style={styles.border}>
            <TouchableNativeFeedback useForeground={true}>
                <View style={styles.dataContainer} >
                    <View style={styles.itemDataContainer}>
                        <View>
                            <Text style={styles.itemTitle}>ID Admin</Text>
                            <Text style={styles.adminIDText}>10000XY</Text>
                        </View>
                        <Text style={styles.adminRegistrationText}>Terdaftar sejak: DD/MM/YYYY</Text>
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
        borderColor: 'orange',
        borderWidth: 1,
        marginBottom: 18
    },
    dataContainer: {
        height: 99,
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
    adminIDText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    adminRegistrationText: {
        fontSize: 10,
        fontWeight: 'bold'
    },
    arrowContainer: {
        width: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftColor: 'orange',
        borderLeftWidth: 1,
    }
});
