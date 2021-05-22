import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import Header from '../components/Header';
import StickButton from '../components/StickButton';
import BackIcon from '../assets/back_icon.svg';
import color from '../constants/color';
import API from '../constants/api';
import { useSelector } from 'react-redux';

const RejectPaymentScreen = (props) => {
    const { token } = useSelector(state => state.auth)
    const [temp, setTemp] = useState('');
    const [reason, setReason] = useState('');
    const inputHandler = (input) => {
        setTemp(input);
    }

    const submitHandler = (data) => {
        const bodyData = {
            nik: '',
            status: 'rejected',
            reason: reason
        }

        fetch(`${API.BASE_URL}/transaction/${props.navigation.getParam('transactionID')}/payment`, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData)
        })
            .then(response => {
                response.json();
            })
            .then(responseJSON => {
                console.log(responseJSON);
                if (responseJSON.data.status === 'rejected') {
                    alert('Pembayaran ditolak');
                    props.navigation.navigate('AdminHome');
                }
            })
            .catch(err => {
                console.log(err);
                alert('Terjadi error')
            })
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="rgba(0,0,0,0.1)" translucent />
            <Header title="Tolak Pengajuan" leftIcon={BackIcon} />
            <ScrollView>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Alasan Penolakan Pengajuan Pinjaman</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} keyboardType='default' textAlignVertical='top' multiline onChangeText={inputHandler} />
                </View>
            </ScrollView>
            <KeyboardAvoidingView behavior='height'>
                <StickButton text="Tolak Pengajuan" onPress={submitHandler} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default RejectPaymentScreen

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
        height: 200,
        borderWidth: 1,
        borderColor: color.primary,
        borderRadius: 6,
        color: '#979797',
        padding: 16,
        justifyContent: 'flex-start'
    }
})
