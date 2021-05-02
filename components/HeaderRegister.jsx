import React from 'react'
import {StyleSheet, View, Text } from 'react-native'

export default function HeaderRegister(){
    return (
        <View style={styles.container}>
            <Text><Button title = ">"></Button>Register</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F49135',
        width: '100%',
        height: 47,
        marginBottom: 100
    }
});
