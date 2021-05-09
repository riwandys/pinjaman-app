import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/Header';
import BackIcon from '../assets/back_icon.svg';
import TableRow from '../components/TableRow';
import StickButton from '../components/StickButton';

const UserDetailScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Detail Pengguna" leftIcon={BackIcon} />
            <ScrollView style={styles.dataContainer}>
                <View style={styles.dataSection}>
                    <Text style={styles.sectionTitles}>Data Pribadi</Text>
                    <TableRow field="Nama Lengkap" value="Riwandy" />
                    <TableRow field="NIK" value="3258495846763" />
                    <TableRow field="Nomor Ponsel" value="082357446546" />
                    <TableRow field="E-mail" value="emailriwandy@email.com" />
                    <TableRow field="Nama Orang Tua" value="Kai Havertz" />
                    <TableRow field="Pendidikan Terakhir" value="SMA" />
                    <TableRow field="Status Perkawinan" value="Belum Menikah" />
                    <TableRow numberOfLines={5} field="Alamat Tinggal" multiline value="Jl. Lapas Narkotika No. 17 Kel. Way Hui, Kec. Jati Agung, Kab. Lampung Selatan" />
                </View>
                <View style={styles.dataSection}>
                    <Text style={styles.sectionTitles}>Data Pekerjaan</Text>
                    <TableRow field="Nama Perusahaan" value="Tokopedia" />
                    <TableRow field="Status Pekerjaan" value="Full Time" />
                    <TableRow field="Jabatan" value="VP of Engineering" />
                    <TableRow field="Lama Bekerja" value="4 Tahun" />
                    <TableRow field="Pendapatan per Bulan" value="-" />
                </View>
            </ScrollView>
            <StickButton text="Terima Pengajuan" />
            <StickButton text="Tolak Pengajuan" secondary />
        </SafeAreaView >
    )
}

export default UserDetailScreen;

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
})
