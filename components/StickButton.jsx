import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'
import color from '../constants/color';

const StickButton = (props) => {
    let backgroundColor, textColor;

    if (props.secondary) {
        backgroundColor = '#F3F3F3';
        textColor = 'black';
    } else {
        backgroundColor = color.primary;
        textColor = 'white';
    }

    return (
        <TouchableNativeFeedback onPress={props.onPress}>
            <View style={{ ...styles.stickButton, backgroundColor }}>
                <Text style={{ ...styles.buttonText, color: textColor }}>{props.text}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

export default StickButton

const styles = StyleSheet.create({
    stickButton: {
        height: 60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})
