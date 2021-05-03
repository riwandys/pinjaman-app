import React from 'react'
import { View, Button, Text, TextInput } from 'react-native'

export default function AcceptApplicationScreen(){
    return(
        <View>
            <View style={styles.header}>
                <Text>
                    Terima Pengajuan
                    <Button title="<"></Button>
                </Text>
            </View>
            <View style={style.container}>
                <Text style={styles.text}>
                    Tentukan Limit Pinjaman
                </Text>
                <TextInput style={styles.input}></TextInput>
            </View>
            <View styles={styles.footer}>
                <Button title="Terima Pengajuan"></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {},
    container: {},
    text: {},
    input: {},
    footer: {}
})
