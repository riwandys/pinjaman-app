import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableNativeFeedback, KeyboardAvoidingView, Picker, Alert } from 'react-native'
import Header from '../components/Header';
import BackIcon from '../assets/back_icon.svg';
import StickButton from '../components/StickButton';
import { registerActions } from '../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux'

const JobRegisterScreen = (props) => {
    const role = useSelector(state => state.auth.role);
    const dispatch = useDispatch();
    const [companyName, setCompanyName] = useState('');
    const [position, setPosition] = useState('');
    const [workLength, setWorkLength] = useState(null);
    const [monthlyIncome, setMonthlyIncome] = useState(null);
    const [workStatus, setWorkStatus] = useState('');
    const [pin, setPin] = useState('');
    const [pinConfirmation, setPinConfirmation] = useState('');

    useEffect(() => {
        if (role === 'User' || role === 'user') {
            props.navigation.navigate('User');
        } else if (role === 'Admin' || role === 'admin') {
            props.navigation.navigate('Admin');
        }
    }, [role]);

    const photoObject = props.navigation.getParam('ktpPhoto');
    const ktpPhoto = {
        uri: photoObject.uri,
        name: photoObject.uri.split('/').pop(),
        type: 'image/jpeg'
    }

    const selfieObject = props.navigation.getParam('ktpSelfie');
    const ktpSelfie = {
        uri: selfieObject.uri,
        name: selfieObject.uri.split('/').pop(),
        type: 'image/jpeg'
    }

    const buttonPressHandler = () => {
        if (companyName === '' || position === '' || !workLength || !monthlyIncome || workStatus === '') {
            alert('Harap lengkapi form pendaftaran sebelum melanjutkan');
        } else {
            if (pin === pinConfirmation) {
                const formData = new FormData();
                formData.append('name', props.navigation.getParam('name'));
                formData.append('nik', props.navigation.getParam('nik'));
                formData.append('phone', props.navigation.getParam('phone'));
                formData.append('email', props.navigation.getParam('email'));
                formData.append('parent_name', props.navigation.getParam('parentName'));
                formData.append('education', props.navigation.getParam('education'));
                formData.append('marriage_status', props.navigation.getParam('marriageStatus'));
                formData.append('address', props.navigation.getParam('address'));
                formData.append('ktp_image', ktpPhoto);
                formData.append('ktp_selfie', ktpSelfie);
                formData.append('company_name', companyName);
                formData.append('job_status', workStatus);
                formData.append('position', position);
                formData.append('work_length', workLength);
                formData.append('monthly_income', monthlyIncome);
                formData.append('pin', pin);
                dispatch(registerActions(formData));
            } else {
                alert('PIN Tidak cocok');
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Register" leftIcon={BackIcon} />
            <ScrollView style={styles.formContainer}>
                <Text style={{ fontWeight: 'bold', marginBottom: 12 }}>Data Pekerjaan</Text>
                <TextInput style={styles.textInput} placeholder="Nama Perusahaan" onChangeText={(value) => { setCompanyName(value) }} />
                <TextInput style={styles.textInput} placeholder="Jabatan" keyboardType='default' onChangeText={(value) => { setPosition(value) }} />
                <TextInput style={styles.textInput} placeholder="Lama Bekerja (tahun)" keyboardType='number-pad' onChangeText={(value) => { setWorkLength(value) }} />
                <TextInput style={styles.textInput} placeholder="Pendapatan per bulan" keyboardType='number-pad' onChangeText={(value) => { setMonthlyIncome(value) }} />
                <Picker
                    mode='dialog'
                    selectedValue={workStatus}
                    onValueChange={(value, index) => { setWorkStatus(value) }}
                    style={styles.picker}
                >
                    <Picker.Item label="Status Pekerjaan" value="" />
                    <Picker.Item label="Belum Bekerja" value="belum bekerja" />
                    <Picker.Item label="Pekerja Tetap" value="pekerja tetap" />
                    <Picker.Item label="Pekerja Tidak Tetap" value="pekerja tidak tetap" />
                </Picker>
                <Text style={{ fontWeight: 'bold', marginBottom: 12 }}>PIN</Text>
                <TextInput style={styles.textInput} placeholder="Masukkan PIN" keyboardType='number-pad' secureTextEntry onChangeText={(value) => { setPin(value) }} />
                <TextInput style={styles.textInput} placeholder="Konfirmasi PIN" keyboardType='number-pad' secureTextEntry onChangeText={(value) => { setPinConfirmation(value) }} />
            </ScrollView>
            <KeyboardAvoidingView behavior='height'>
                <StickButton text="Lanjut" onPress={buttonPressHandler} />
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

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
        borderWidth: 1,
        marginBottom: 10
    },
    picker: {
        marginBottom: 12
    }
})

export default JobRegisterScreen;