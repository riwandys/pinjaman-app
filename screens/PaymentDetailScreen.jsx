import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import BackIcon from '../assets/back_icon.svg';
import TableRow from '../components/TableRow';
import StickButton from '../components/StickButton';
import API from '../constants/api';
import { currencyFormat } from '../constants/function';


const PaymentDetailScreen = (props) => {
    const [paymentData, setPaymentData] = useState({
        loan: {
            admin_fee: 0,
            amount: 0,
            deadline: '',
            total: 0
        },
        receiver: {
            bank: '',
            account_number: ''
        },
        payment_proof: ''
    });
    const { token } = useSelector(state => state.auth);
    useEffect(() => {
        fetch(`${API.BASE_URL}/transaction/${props.navigation.getParam('transactionID')}`, {
            method: 'GET',
            headers: {
                Authorization: `Basic ${token}`
            }
        })
            .then(response => response.json())
            .then(responseJSON => {
                setPaymentData(responseJSON);
            })
            .catch(err => console.log(err))
    }, []);

    const acceptPayment = () => {
        const bodyData = {
            nik: '',
            status: 'accepted'
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
                response.text();
            })
            .then(responseJSON => {
                console.log(responseJSON);
                if (responseJSON.data.status === 'accepted') {
                    alert('Pembayaran diterima');
                    props.navigation.navigate('AdminHome');
                }
            })
            .catch(err => {
                console.log(err);
                alert('Terjadi error');
            })
    }

    const alertToAccept = () => {
        Alert.alert(
            'Terima',
            `Anda yakin mengkonfirmasi total pembayaran sebesar ${currencyFormat(paymentData.loan.total)}`,
            [
                {
                    text: 'Tidak'
                },
                {
                    text: 'Ya',
                    onPress: acceptPayment
                }
            ]
        );
    }

    const navigateToReject = () => {
        props.navigation.navigate('RejectPayment', {
            transactionID: props.navigation.getParam('transactionID')
        })
    }

    const paymentProofImage = () => { return <Image source={{ uri: paymentData.payment_proof }} style={{ height: 400 }} /> };

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Detail Pembayaran" leftIcon={BackIcon} />
            <ScrollView style={styles.dataContainer}>
                <View style={styles.dataSection}>
                    <Text style={styles.sectionTitles}>Data Penerima</Text>
                    <TableRow field="Bank Tujuan" value={`Bank ${paymentData.receiver.bank}`} />
                    <TableRow field="Nomor Rekening Tujuan" value={paymentData.receiver.account_number} />
                </View>
                <View style={styles.dataSection}>
                    <Text style={styles.sectionTitles}>Data Pinjaman</Text>
                    <TableRow field="Jumlah Dana" value={currencyFormat(paymentData.loan.amount)} />
                    <TableRow field="Tenggat Waktu" value={paymentData.loan.deadline} />
                    <TableRow field="Biaya Admin" value={currencyFormat(paymentData.loan.admin_fee)} />
                    <TableRow field="Total Tagihan" value={currencyFormat(paymentData.loan.total)} />
                </View>
                <View style={styles.dataSection}>
                    <Text style={styles.sectionTitles}>Bukti Pembayaran</Text>
                    {paymentData.payment_proof === '' ? <View style={styles.imageContainer}></View> : paymentProofImage()}
                </View>
            </ScrollView>
            <StickButton text="Terima Pembayaran" onPress={alertToAccept} />
            <StickButton text="Tolak Pembayaran" secondary onPress={navigateToReject} />
        </SafeAreaView >
    )
}

export default PaymentDetailScreen;

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
    imageContainer: {
        backgroundColor: 'grey',
        height: 200
    }
})

