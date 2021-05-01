import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
    return (
        <View style={styles.container}>
            <Text>PinjaMAN</Text>
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
