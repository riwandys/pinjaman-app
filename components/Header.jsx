import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>PinjaMAN</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F49135',
        width: '100%',
        paddingTop: StatusBar.currentHeight,
        height: StatusBar.currentHeight + 54,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
});
