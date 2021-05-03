import React from 'react'
import { View, Button, Text, TextInput } from 'react-native'

export default function RejectApplicationAndPaymentScreen(){
    return(
        <View>
            <View style={styles.header}>
                <Text>
                    Tolak Pengajuan
                    <Button title="<"></Button>
                </Text>
            </View>
            <View style={style.container}>
                <Text>
                    Alasan Penolakan Pengajuan Pinjaman
                    <TextInput style={styles.input}></TextInput>
                </Text>
            </View>
            <View style={styles.footer}>
                <Button title="Tolak Pengajuan"></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {},
    container: {},
    input: {},
    footer: {}
})