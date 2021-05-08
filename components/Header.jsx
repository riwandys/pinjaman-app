import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import color from '../constants/color';

export default function Header(props) {
    const LeftIcon = props.leftIcon || View;
    const RightIcon = props.rightIcon || View;
    return (<>
        <StatusBar backgroundColor="rgba(0,0,0,0.1)" translucent />
        <View style={styles.container}>
            <LeftIcon width={24} height={24} />
            <Text style={styles.headerText}>{props.title}</Text>
            <RightIcon width={24} height={24} />
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.primary,
        width: '100%',
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 16,
        height: StatusBar.currentHeight + 54,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
});
