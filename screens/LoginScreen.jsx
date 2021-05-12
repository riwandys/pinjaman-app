import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableNativeFeedback, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Logo from '../assets/logo.svg';
import color from '../constants/color';
import { loginAction } from '../redux/actions/auth';

const LoginScreen = (props) => {
    const [email, setEmail] = useState('');
    const [pin, setPIN] = useState('');
    const dispatch = useDispatch();
    const role = useSelector(state => state.auth.role);
    const emailInputHandler = (text) => {
        setEmail(text);
    }

    useEffect(() => {
        if (role === 'User') {
            props.navigation.navigate('User');
        } else if (role === 'Admin') {
            props.navigation.navigate('Admin');
        } else if (role === 'Master Admin') {
            props.navigation.navigate('MasterAdmin')
        }
    }, [role]);

    const pinInputHandler = (text) => {
        setPIN(text);
    }

    const loginHandler = () => {
        if (email === '' || pin === '') {
            alert('Email/PIN belum lengkap');
        } else {
            dispatch(loginAction(email, pin));
        }
    }

    return (
        <SafeAreaView>
            <Header title="PinjaMAN" />
            <ScrollView>
                <KeyboardAvoidingView behavior='position'>
                    <View style={styles.container}>
                        <Logo style={styles.logo} />
                        <View style={styles.formContainer}>
                            <TextInput style={{ ...styles.textInput, marginBottom: 10 }} placeholder="Email" textContentType='emailAddress' keyboardType='email-address' onChangeText={emailInputHandler} />
                            <TextInput style={{ ...styles.textInput, marginBottom: 44 }} placeholder="PIN" secureTextEntry keyboardType='number-pad' onChangeText={pinInputHandler} />
                            <TouchableNativeFeedback useForeground={true} onPress={loginHandler}>
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