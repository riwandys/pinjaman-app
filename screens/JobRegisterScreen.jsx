import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'

export default function JobRegisterScreen(){
    return (
        <View>
            <View style={styles.header}>
                <Text>
                    Register
                    <Button title="<"></Button>
                </Text>
            </View>
            <View style={styles.container}>
                <Text>
                    Data Pekerjaan
                </Text>
                <TextInput style={styles.input}>
                    <Text style={styles.textInput}>Nama Perusahaan</Text>
                </TextInput>
                <TextInput style={styles.input}>
                    <Text style={styles.textInput}>Status pekerjaan</Text>
                </TextInput>
                <TextInput style={styles.input}>
                    <Text style={styles.textInput}>Jabatan</Text>
                </TextInput>
                <TextInput style={styles.input}>
                    <Text style={styles.textInput}>Lama bekerja</Text>
                </TextInput>
                <TextInput style={styles.input}>
                    <Text style={styles.textInput}>Pendapatan per-bulan</Text>
                </TextInput>
            </View>
            <View stlye={styles.footer}>
                <Button title="Lanjut"></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {},
    container: {},
    input: {},
    textInput: {}
})