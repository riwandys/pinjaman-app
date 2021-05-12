import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'

export default function PINRegisterScreen(){
    return (
        <View>
            <View style={styles.header}>
                Buat Pin
            </View>
            <View style={styles.container}>
                <Text>
                    PIN
                    <TextInput style={styles.input}>
                        <Text>
                            6 digit angka tanpa spasi
                        </Text>
                    </TextInput>
                    <TextInput style={style.input}>
                        <Text>
                            Konfirmasi PIN
                        </Text>
                    </TextInput>
                </Text>
            </View>
            <View style={styles.footer}>
                <Button title="Buat PIN"></Button>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    header: {},
    container: {},
    input: {},
    footer: {}
})