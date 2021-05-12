import React from 'react'
import { Text, View, Button } from 'react-native'

export default function SettingScreen(){
    return(
        <View>
            <View style={styles.header}>
                <Text>
                    Pengaturan
                    <Button title="<"></Button>
                </Text>
            </View>
            <View style={styles.container}>
                <View style={styles.profile}>
                    <Text style={styles.name}>Nama Pengguna</Text>
                    <Text>ID Pengguna</Text>
                </View>
                <View style={styles.contents}>
                    <Button title="Nomor Ponsel"></Button>
                    <Button title="Email"></Button>
                    <Button title="Rekening Bank"></Button>
                    <Separator />
                    <Button title="Ganti PIN"></Button>
                </View>
            </View>
            <View style={styles.menu}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {},
    container: {},
    profile: {},
    name: {},
    menu: {}
})