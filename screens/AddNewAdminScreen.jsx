import React from 'react'
import { Text, View, Button, TextInput } from 'react-native'

export default function AddNewAdminScreen(){
    return (
        <View>
            <View style={styles.header}>
                <Text>
                    Tambah Admin
                    <Button title="<"></Button>
                </Text>
            </View>
            <View style={styles.container}>
                <TextInput style={styles.input}>
                    <Text>Email</Text>
                </TextInput>
                <TextInput style={styles.input}>
                    <Text>Password</Text>
                </TextInput>
            </View>
            <View styles={styles.footer}>
                <Button title="Tambah"></Button>
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
