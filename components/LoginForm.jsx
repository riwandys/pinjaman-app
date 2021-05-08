import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import color from '../constants/color'

export default function LoginForm() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 285,
        height: 308,
        backgroundColor: color.primary,
        borderRadius: 19,
        padding: 30
    },
    input: {
        width: 217,
        height: 38,
        backgroundColor: 'white',
        borderRadius: 3
    }
})
