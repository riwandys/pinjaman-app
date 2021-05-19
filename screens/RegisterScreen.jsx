import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableNativeFeedback, KeyboardAvoidingView, Picker, Alert } from 'react-native'
import Header from '../components/Header';
import BackIcon from '../assets/back_icon.svg'
import CameraIcon from '../assets/camera.svg';
import StickButton from '../components/StickButton';
import * as ImagePicker from 'expo-image-picker';
import { validateEmail } from '../constants/function';

const RegisterScreen = (props) => {
    const [name, setName] = useState('');
    const [nik, setNik] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [parentName, setparentName] = useState('');
    const [education, setEducation] = useState('');
    const [marriageStatus, setMarriageStatus] = useState('');
    const [address, setAddress] = useState('');
    const [ktpPhoto, setKtpPhoto] = useState(null);
    const [ktpSelfie, setKtpSelfie] = useState(null);

    const ktpPhotoPickHandler = async () => {
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
        console.log(result);

        if (!result.cancelled) {
            setKtpPhoto(result);
        }
    }
    const ktpSelfiePickHandler = async () => {
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 6],
            quality: 1
        });
        console.log(result);

        if (!result.cancelled) {
            setKtpSelfie(result);
        }
    }

    const buttonPressHandler = () => {
        if (name === '' || nik === '' || phone === '' || email === '' || parentName === '' || education === '' || marriageStatus === '' || address == '' || !ktpPhoto || !ktpSelfie) {
            alert('Harap lengkapi form pendaftaran sebelum melanjutkan');
        } else if (!validateEmail(email)) {
            alert('Harap isi email dengan format yang benar')
        } else {
            props.navigation.navigate('KTPPreview', {
                name, nik, phone, email, parentName, education, marriageStatus, address, ktpPhoto, ktpSelfie
            })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Register" leftIcon={BackIcon} />
            <ScrollView style={styles.formContainer}>
                <Text style={{ fontWeight: 'bold', marginBottom: 12 }}>Data Pribadi</Text>
                <TextInput style={styles.textInput} placeholder="Nama Lengkap (Sesuai KTP)" onChangeText={(value) => { setName(value) }} />
                <TextInput style={styles.textInput} placeholder="Nomor Induk Kependudukan" keyboardType='number-pad' onChangeText={(value) => { setNik(value) }} />
                <TextInput style={styles.textInput} placeholder="Nomor Ponsel" keyboardType='number-pad' onChangeText={(value) => { setPhone(value) }} />
                <TextInput style={styles.textInput} placeholder="Email" textContentType='emailAddress' onChangeText={(value) => { setEmail(value) }} />
                <TextInput style={styles.textInput} placeholder="Nama Orang Tua (Sesuai KK)" onChangeText={(value) => { setparentName(value) }} />
                <TextInput style={styles.textInput} placeholder="Alamat Tinggal (Sesuai KTP)" onChangeText={(value) => { setAddress(value) }} />
                <Picker
                    mode='dialog'
                    selectedValue={marriageStatus}
                    onValueChange={(value, index) => { setMarriageStatus(value) }}
                    style={styles.picker}
                >
                    <Picker.Item label="Status Perkawinan" value="" />
                    <Picker.Item label="Belum Kawin" value="belum kawin" />
                    <Picker.Item label="Kawin" value="kawin" />
                    <Picker.Item label="Cerai Hidup" value="cerai hidup" />
                    <Picker.Item label="Cerai Mati" value="cerai mati" />
                </Picker>
                <Picker
                    mode='dialog'
                    selectedValue={education}
                    onValueChange={(value, index) => { setEducation(value) }}
                    style={styles.picker}
                >
                    <Picker.Item label="Pendidikan Terakhir" value="" />
                    <Picker.Item label="SD" value="sd" />
                    <Picker.Item label="SMP" value="smp" />
                    <Picker.Item label="SMA" value="sma" />
                    <Picker.Item label="S1" value="s1" />
                    <Picker.Item label="S2" value="s2" />
                    <Picker.Item label="S3" value="s3" />
                </Picker>
                <View style={styles.imagePickerContainer}>
                    <TouchableNativeFeedback onPress={ktpPhotoPickHandler}>
                        <View style={styles.imagePicker}>
                            <CameraIcon />
                            <Text style={{ fontSize: 12, textAlign: 'center', color: '#6B6B6B' }}>{ktpPhoto ? 'Foto KTP\ntelah diambil' : 'Ambil foto KTP'}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={ktpSelfiePickHandler}>
                        <View style={styles.imagePicker}>
                            <CameraIcon />
                            <Text style={{ fontSize: 12, textAlign: 'center', color: '#6B6B6B' }}>{ktpSelfie ? 'Selfie dengan KTP\ntelah diambil' : 'Ambil selfie\ndengan KTP'}</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
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
        marginBottom: 10
    },
    imagePickerContainer: {
        flexDirection: 'row'
    },
    imagePicker: {
        flexGrow: 1,
        height: 200,
        margin: 4,
        backgroundColor: '#ECECEC',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default RegisterScreen;