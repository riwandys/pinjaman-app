import React from 'react'
import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView, TextInput, TouchableNativeFeedback, KeyboardAvoidingView } from 'react-native'
import Header from '../components/Header';
import BackIcon from '../assets/back_icon.svg'
import color from '../constants/color';
import StickButton from '../components/StickButton';

const AddNewAdminScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Tambah Admin" leftIcon={BackIcon} />
            <ScrollView style={styles.formContainer}>
                <TextInput style={{ ...styles.textInput, marginBottom: 10 }} placeholder="Email" textContentType='emailAddress' keyboardType='email-address' />
                <TextInput style={styles.textInput} placeholder="Password" secureTextEntry keyboardType='default' />
            </ScrollView>
            <KeyboardAvoidingView behavior='height'>
                <StickButton text="Tambah" />
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

export default AddNewAdminScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    formContainer: {
        padding: 16
    },
    textInput: {
        width: '100%',
        height: 38,
        backgroundColor: 'white',
        borderRadius: 3,
        paddingHorizontal: 12,
        borderColor: '#C1C1C1',
        borderWidth: 1
    }
})
