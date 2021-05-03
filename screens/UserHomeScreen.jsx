import React from 'react'
import { Text, View, TextInput, Button, SafeAreaView } from 'react-native'

export default function AccountScreen(){
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text1}>
                    Halo!
                    Nama Pengguna
                </Text>
                <Text style={styles.text2}>
                    DD/MM/YY
                </Text>
            </View>
            <View style={styles.limit}>
                <Text style={styles.textlimit}>
                    Limit Pinjam
                    <Text style={styles.nominal}>
                        Rp.XXX.XXX
                    </Text>
                </Text>
                <Text style={styles.textlimit}>
                    Sisa Limit
                    <Text style={styles.nominal}>
                        Rp.XXX.XXX
                    </Text>
                </Text>
            </View>
            <View style={styles.button}>
                <Button title="Pinjam Sekarang"></Button>
            </View>
            <View style={styles.menu}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {},
    text1: {},
    text2: {},
    limit: {},
    nominal: {},
    button: {},
    menu: {}
})