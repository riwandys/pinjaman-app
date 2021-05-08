import React from 'react'
import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView, TextInput } from 'react-native'
import Header from '../components/Header'

const AddNewAdminScreen = () => {
    return (
        <SafeAreaView>
            <Header title="Tambah Admin" />
            <ScrollView style={styles.scrollContainer}>
                <TextInput />
            </ScrollView>
        </SafeAreaView >
    )
}

export default AddNewAdminScreen

const styles = StyleSheet.create({})
