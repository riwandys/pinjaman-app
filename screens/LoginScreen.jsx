import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableNativeFeedback, View } from 'react-native'
import Header from '../components/Header';
import Logo from '../assets/logo.svg';
import color from '../constants/color'

const LoginScreen = () => {
    return (
        <SafeAreaView>
            <Header title="PinjaMAN" />
            <ScrollView style={styles.scrollContainer}>
                <KeyboardAvoidingView behavior='position'>
                    <View style={styles.container}>
                        <Logo style={styles.logo} />
                        <View style={styles.formContainer}>
                            <TextInput style={{ ...styles.textInput, marginBottom: 10 }} placeholder="Email" textContentType='emailAddress' keyboardType='email-address' />
                            <TextInput style={{ ...styles.textInput, marginBottom: 44 }} placeholder="PIN" secureTextEntry keyboardType='number-pad' />
                            <TouchableNativeFeedback useForeground={true}>
                                <View style={{ ...styles.button, backgroundColor: '#343434', marginBottom: 12 }}>
                                    <Text style={{ color: 'white' }}>MASUK</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback useForeground={true}>
                                <View style={{ ...styles.button, backgroundColor: 'white' }}>
                                    <Text style={{ color: color.primary }}>DAFTAR</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        marginTop: 115
    },
    formContainer: {
        marginTop: 72,
        paddingHorizontal: 34,
        paddingTop: 52,
        paddingBottom: 40,
        backgroundColor: color.primary,
        width: 285,
        borderRadius: 20
    },
    textInput: {
        width: '100%',
        height: 38,
        backgroundColor: 'white',
        borderRadius: 3,
        paddingHorizontal: 12
    },
    button: {
        width: '100%',
        height: 38,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4
    }
})

export default LoginScreen;
