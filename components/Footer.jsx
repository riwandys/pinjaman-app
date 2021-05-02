import React from 'react'
import {StyleSheet, View, Text } from 'react-native'

export default function Footer(){
    return(
        <View style={style.container}>
            <Button title="Lanjut"></Button>
        </View>
    )
}

const styles = StyleSheet.create(){
    container: {
        backgroundColor: '#F49135',
        width: '100%',
        height: 47,
        marginTop: 100
    }
}