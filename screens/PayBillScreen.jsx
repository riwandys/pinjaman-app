import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableNativeFeedback, Image, Dimensions } from 'react-native';
import Header from '../components/Header';
import BackIcon from '../assets/back_icon.svg';
import TableRow from '../components/TableRow';
import BlockButton from '../components/BlockButton';
import * as ImagePicker from 'expo-image-picker';
import { currencyFormat } from '../constants/function';
import CameraIcon from '../assets/camera.svg';
import { useSelector } from 'react-redux';
import { payBill } from '../redux/actions/user';

const PayBillScreen = (props) => {
    const data = props.navigation.getParam('data');
    const [paymentProof, setPaymentProof] = useState(null);
    const { token } = useSelector(state => state.auth)

    const paymentProofPickHandler = async () => {
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
            aspect: [4, 3]
        });
        console.log(result);

        if (!result.cancelled) {
            setPaymentProof({
                uri: result.uri,
                name: result.uri.split('/').pop(),
                type: 'image/jpeg'
            });
        }
    }

    const payButtonHandler = () => {
        payBill(data.id, token, paymentProof);
        props.navigation.navigate('UserHome')
    }

    const imagePicker = () => (
        <TouchableNativeFeedback onPress={paymentProofPickHandler}>
            <View style={styles.imagePicker}>
                <CameraIcon />
                <Text style={{ fontSize: 12, textAlign: 'center', color: '#6B6B6B' }}>{'Ambil foto\nbukti pembayaran'}</Text>
            </View>
        </TouchableNativeFeedback>
    );

    const imagePreview = () => (
        <View style={styles.imagePreviewContainer}>
            <Image source={{ uri: paymentProof.uri }} style={styles.imagePreview} />
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Bayar" leftIcon={BackIcon} />
            <ScrollView style={styles.dataContainer}>
                <View style={styles.dataSection}>
                    <Text style={styles.sectionTitles}>Data Penerima</Text>
                    <TableRow field="Bank Penerima" value={data.bank} />
                    <TableRow field="Nomor Rekening Tujuan" value={data.account_number} />
                </View>
                <View style={styles.dataSection}>
                    <Text style={styles.sectionTitles}>Data Pinjaman</Text>
                    <TableRow field="Jumlah Dana" value={currencyFormat(data.amount)} />
                    <TableRow field="Tenggat Waktu" value={data.deadline} />
                    <TableRow field="Biaya Admin" value={currencyFormat(data.admin_fee)} />
                    <TableRow field="Total Tagihan" value={currencyFormat(data.total)} />
                </View>
                <View style={styles.dataSection}>
                    <Text style={styles.sectionTitles}>Bukti Pembayaran</Text>
                    {paymentProof === null ? imagePicker() : imagePreview()}
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <BlockButton text="Bayar" onPress={payButtonHandler} />
            </View>
        </SafeAreaView >
    )
}

export default PayBillScreen;

const width = (Dimensions.get('window').width * 0.8) - 32;
const height = 3 / 4 * width;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    dataContainer: {
        padding: 16
    },
    dataSection: {
        marginBottom: 16
    },
    sectionTitles: {
        fontWeight: 'bold',
        marginBottom: 12
    },
    imagePicker: {
        height: 200,
        backgroundColor: '#ECECEC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagePreviewContainer: {
        alignItems: 'center'
    },
    imagePreview: {
        width: width,
        height: height
    },
    buttonContainer: {
        paddingHorizontal: 16,
        paddingBottom: 8
    }
})
