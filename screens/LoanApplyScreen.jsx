import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Picker, TextInput } from 'react-native';
import Header from '../components/Header';
import BackIcon from '../assets/back_icon.svg';
import StickButton from '../components/StickButton';

const LoanApplyScreen = (props) => {
    const [selectedBank, setSelectedBank] = useState('');
    const bankPickerValueChangeHandler = (value, index) => setSelectedBank(value);
    const [deadline, setDeadline] = useState('');
    const deadlineValueChangeHandler = (value, index) => setDeadline(value);

    const navigate = () => {
        props.navigation.navigate('Account');
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Ajukan Pinjaman" leftIcon={BackIcon} />
            <ScrollView>
                <View style={styles.bodyContainer}>
                    <View style={styles.dataSection}>
                        <Text style={styles.sectionTitles}>Data Penerima</Text>
                        <Picker
                            mode='dropdown'
                            selectedValue={selectedBank}
                            onValueChange={bankPickerValueChangeHandler}
                            style={styles.picker}
                        >
                            <Picker.Item label="Pilih Bank Tujuan" value="" />
                            <Picker.Item label="Bank Central Asia (BCA)" value="BCA" />
                            <Picker.Item label="Bank Negara Indonesia (BNI)" value="BNI" />
                            <Picker.Item label="Bank Rakyat Indonesia (BRI)" value="BRI" />
                        </Picker>
                        <TextInput style={styles.textInput} placeholder="Nomor Rekening Tujuan" keyboardType='number-pad' />
                    </View>
                    <View style={styles.dataSection}>
                        <Text style={styles.sectionTitles}>Data Pinjaman</Text>
                        <TextInput style={styles.textInput} placeholder="Jumlah dana (tanpa tanda baca)" keyboardType='number-pad' />
                        <Picker
                            mode='dropdown'
                            selectedValue={deadline}
                            onValueChange={deadlineValueChangeHandler}
                            style={styles.picker}
                        >
                            <Picker.Item label="Tenggat Waktu" value="" />
                            <Picker.Item label="1 Bulan (Bunga 0%)" value='1' />
                            <Picker.Item label="3 Bulan (Bunga 5%)" value='3' />
                            <Picker.Item label="6 Bulan (Bunga 9%)" value='6' />
                            <Picker.Item label="12 Bulan (Bunga 12%)" value='12' />
                        </Picker>
                    </View>
                </View>
            </ScrollView>
            <StickButton text="Lanjut" onPress={navigate} />
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bodyContainer: {
        padding: 16
    },
    dataSection: {
        marginBottom: 16
    },
    sectionTitles: {
        fontWeight: 'bold',
        marginBottom: 12
    },
    textInput: {
        width: '100%',
        height: 38,
        backgroundColor: 'white',
        borderRadius: 3,
        paddingHorizontal: 12,
        borderColor: '#C1C1C1',
        borderWidth: 1,
        marginBottom: 4
    },
    picker: {
        marginBottom: 4
    }
});

export default LoanApplyScreen;