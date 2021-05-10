import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import Header from '../components/Header';
import StickButton from '../components/StickButton';
import BackIcon from '../assets/back_icon.svg';
import color from '../constants/color';

const AcceptApplicationScreen = () => {
    const [temp, setTemp] = useState(0);
    const [limit, setLimit] = useState(0);
    const inputHandler = (input) => {
        setTemp(input);
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="rgba(0,0,0,0.1)" translucent />
            <Header title="Terima Pengajuan" leftIcon={BackIcon} />
            <ScrollView>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Tentukan Limit Pengajuan</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} textAlign='center' keyboardType='number-pad' placeholder='Rp 0' onChangeText={inputHandler} />
                </View>
            </ScrollView>
            <KeyboardAvoidingView behavior='height'>
                <StickButton text="Terima Pengajuan" />
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default AcceptApplicationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleContainer: {
        padding: 16,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold'
    },
    inputContainer: {
        paddingHorizontal: 16,
        paddingVertical: 4
    },
    input: {
        height: 85,
        borderWidth: 1,
        borderColor: color.primary,
        borderRadius: 6,
        fontSize: 24,
        color: '#979797'
    }
})
