import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View, Dimensions } from 'react-native';
import ArrowIcon from '../assets/arrow_drop_right.svg';
import color from '../constants/color'

export default function UserDataItems(props) {
    const echo = () => {
        console.log(props);
    }
    return (
        <View style={styles.border}>
            <TouchableNativeFeedback useForeground={true} onPress={props.onPress}>
                <View style={styles.dataContainer} >
                    <View style={styles.itemDataContainer}>
                        <View>
                            <Text style={styles.itemTitle}>ID Pengguna</Text>
                            <Text style={styles.userIDText}>{props.data.nik}</Text>
                        </View>
                        <View style={styles.itemSmallTextContainer}>
                            <Text style={styles.itemSmallText}>Keterangan: {props.type === 'registration' ? 'Pendaftaran' : 'Pembayaran'}</Text>
                            <Text style={styles.itemSmallText}>{props.type === 'registration' ? props.data.registration_date : props.data.payment_deadline}</Text>
                        </View>
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
        justifyContent: 'space-between',
        width: Dimensions.get('window').width - 108
    },
    itemTitle: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    userIDText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    itemSmallTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemSmallText: {
        fontSize: 10,
        fontWeight: 'bold'
    },
    arrowContainer: {
        width: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftColor: color.primary,
        borderLeftWidth: 1
    }
});
