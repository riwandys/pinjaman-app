import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import BackIcon from '../assets/back_icon.svg';
import TableRow from '../components/TableRow';
import StickButton from '../components/StickButton';
import { currencyFormat } from '../constants/function';
import { loanMoney } from '../redux/actions/user';

const LoanConfirmationScreen = (props) => {
    const { nik } = useSelector(state => state.auth);
    const loanAmount = parseInt(props.navigation.getParam('loanAmount'));
    const paymentDeadline = countDeadlineDay(props.navigation.getParam('deadline'));
    const adminFee = countAdminFee(loanAmount, props.navigation.getParam('deadline'));

    const dispatch = useDispatch();

    const confirmButtonHandler = () => {
        const data = {
            receiver: {
                bank: props.navigation.getParam('bank'),
                account_number: props.navigation.getParam('accountNumber')
            },
            loan: {
                amount: loanAmount,
                deadline: paymentDeadline,
                admin_fee: adminFee,
                total: loanAmount + adminFee
            }
        }
        console.log('Fetching API...');
        dispatch(loanMoney(nik, data));
        props.navigation.navigate('UserHome');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Konfirmasi Pinjaman" leftIcon={BackIcon} />
            <ScrollView style={styles.dataContainer}>
                <View style={styles.dataSection}>
                    <Text style={styles.sectionTitles}>Data Penerima</Text>
                    <TableRow field="Bank Tujuan" value={props.navigation.getParam('bank')} />
                    <TableRow field="Nomor Rekening Tujuan" value={props.navigation.getParam('accountNumber')} />
                </View>
                <View style={styles.dataSection}>
                    <Text style={styles.sectionTitles}>Data Pinjaman</Text>
                    <TableRow field="Jumlah Dana" value={currencyFormat(loanAmount)} />
                    <TableRow field="Tenggat Waktu" value={paymentDeadline} />
                    <TableRow field="Biaya Admin" value={currencyFormat(adminFee)} />
                    <TableRow field="Total Tagihan" value={currencyFormat(loanAmount + adminFee)} />
                </View>
            </ScrollView>
            <StickButton text="Pinjam" onPress={confirmButtonHandler} />
        </SafeAreaView >
    )
}


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
    }
});

const countAdminFee = (loanAmount, paymentDeadline) => {
    let adminFeePercentage;
    if (paymentDeadline === '1') {
        adminFeePercentage = 0;
    } else if (paymentDeadline === '3') {
        adminFeePercentage = 0.01;
    } else if (paymentDeadline === '6') {
        adminFeePercentage = 0.03;
    } else if (paymentDeadline === '12') {
        adminFeePercentage = 0.05;
    }
    return (loanAmount * adminFeePercentage);
}

const countDeadlineDay = (paymentDeadline) => {
    const date = new Date();
    const deadline = parseInt(paymentDeadline);
    date.setMonth(date.getMonth() + deadline + 1);
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
}

export default LoanConfirmationScreen;