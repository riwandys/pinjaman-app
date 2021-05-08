import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import color from '../constants/color';

export default function Header(props) {
    return (<>
        <StatusBar backgroundColor="rgba(0,0,0,0.1)" translucent />
        <View style={styles.container}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.primary,
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
