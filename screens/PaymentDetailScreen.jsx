import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/Header';
import BackIcon from '../assets/back_icon.svg';
import TableRow from '../components/TableRow';
import StickButton from '../components/StickButton';

const PaymentDetailScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Detail Pembayaran" leftIcon={BackIcon} />
            <ScrollView style={styles.dataContainer}>
                <View style={styles.dataSection}>
                    <Text style={styles.sectionTitles}>Data Penerima</Text>
                    <TableRow field="Bank Tujuan" value="Bank BRI" />
                    <TableRow field="Nomor Rekening Tujuan" value="9876295293865198374" />
                </View>
                <View style={styles.dataSection}>
                    <Text style={styles.sectionTitles}>Data Pinjaman</Text>
                    <TableRow field="Jumlah Dana" value="Rp 1.200.000" />
                    <TableRow field="Tenggat Waktu" value="DD - MM - YYYY" />
                    <TableRow field="Biaya Admin" value="Rp 24.000" />
                    <TableRow field="Total Tagihan" value="Rp 1.224.000" />
                </View>
                <View style={styles.dataSection}>
                    <Text style={styles.sectionTitles}>Bukti Pembayaran</Text>
                    <View style={styles.imageContainer}></View>
                </View>
            </ScrollView>
            <StickButton text="Terima Pengajuan" />
            <StickButton text="Tolak Pengajuan" secondary />
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
        height: 85
    }
})

