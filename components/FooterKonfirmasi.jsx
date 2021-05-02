import React from 'react'
import {StyleSheet, View} from 'react-native'

export default function FooterRegister(){
    return (
        <View style={styles.container}>
            <Button title="Konfirmasi"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F49135',
        width: '100%',
        height: 47,
        marginTop: 100
    }
});