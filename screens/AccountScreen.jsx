import React from 'react-native'
import { View, Text, Button } from 'react-native'

export default function AccountScreen(){
    return (
        <View style={styles.header}>
            <Text>
            Akun
                <Button title="<"></Button>
            </Text>
            <View style={styles.profile}>
                <Text style={styles.name}>
                    Nama Pengguna
                </Text>
                <Text>
                    ID Pengguna
                </Text>
                <Separator />
                <Button title="Ajukan Kenaikan Limit"></Button>
            </View>
            <View style={styles.setting}>
                <Button title="Ganti Password"></Button>
                <Separator />
                <Button title="FAQ"></Button>
                <Separator />
                <Button title="Tentang Kami"></Button>
            </View>
            <Button title="Keluar"></Button>
            <View style={styles.menu}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {},
    profile: {},
    name: {},
    setting: {},
    menu: {},
})
