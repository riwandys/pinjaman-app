import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function OTPScreen() {
    return (<>
        <View style={styles.header}>
            <Text>
                Register
            </Text>
        </View>
        <View>
            <Text style={styles.text1}>
                Kode OTP
                <TextInput>
                    <Text style={styles.text2}>
                        OTP
                    </Text>
                </TextInput>
                <Text style={styles.text3}>
                    OTP telah dikirimkan melalui e-mail
                    <Button title="Kirim ulang"></Button>
                </Text>
            </Text>
        </View>
        <View style={styles.footer}>
            <Button title="Registrasi"></Button>
        </View>
    </>
    )
}

// const styles = StyleSheet.create({
//     header: {
//         width: '100%',
//         height: 47,
//         marginTop: 0
//     },
//     text1: {
//         fontStyle: 'bold',
//         justifyContent: 'left'
//     },
//     text2: {
//         font: 
//         fontColor:
//         marginHorizontal: 
//     },
//     text3: {
//         fontSize:
//         margin: 
//         justifyContent: 'center'
//     }

// })