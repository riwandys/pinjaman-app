import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/Header';
import BackIcon from '../assets/back_icon.svg';
import TableRow from '../components/TableRow';
import BlockButton from '../components/BlockButton';

const PayBillScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Detail Pengguna" leftIcon={BackIcon} />
            <ScrollView style={styles.dataContainer}>
                <View style={styles.dataSection}>
                    <Text style={styles.sectionTitles}>Data Penerima</Text>
                    <TableRow field="Bank Penerima" value="BCA" />
                    <TableRow field="Nomor Rekening Tujuan" value="XX123456789" />
                </View>
                <View style={styles.dataSection}>
                    <Text style={styles.sectionTitles}>Data Pinjaman</Text>
                    <TableRow field="Jumlah Dana" value="Rp 1.000.000" />
                    <TableRow field="Tenggat Waktu" value="DD-MM-YYYY" />
                    <TableRow field="Biaya Admin" value="Rp 24.000" />
                    <TableRow field="Total Tagihan" value="Rp 1.024.000" />
                </View>
                <View style={{ marginTop: 28, height: 180, backgroundColor: 'grey' }}></View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <BlockButton text="Bayar" />
            </View>
        </SafeAreaView >
    )
}

export default PayBillScreen;

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
    buttonContainer: {
        paddingHorizontal: 16,
        paddingBottom: 8
    }
})
