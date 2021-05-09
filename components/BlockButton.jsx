import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import color from '../constants/color'

const BlockButton = (props) => {
    return (
        <TouchableNativeFeedback useForeground={true}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

export default BlockButton

const styles = StyleSheet.create({
    button: {
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
})
