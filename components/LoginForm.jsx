import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

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
        backgroundColor: '#F49135',
        borderRadius: 19,
        padding: 30
    },
    input: {
        width: 217,
        height: 38,
        backgroundColor: '#FFFFFF',
        borderRadius: 3
    }
})
