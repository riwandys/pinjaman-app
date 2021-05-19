import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
import Header from '../components/Header';
import BackIcon from '../assets/back_icon.svg';
import StickButton from '../components/StickButton';

const KTPPreviewScreen = (props) => {
    const photo = props.navigation.getParam('ktpPhoto');

    const backIconPressed = () => {
        props.navigation.goBack();
    }

    const buttonPressHandler = () => {
        props.navigation.navigate('KTPSelfiePreview', {
            name: props.navigation.getParam('name'),
            nik: props.navigation.getParam('nik'),
            phone: props.navigation.getParam('phone'),
            email: props.navigation.getParam('email'),
            parentName: props.navigation.getParam('parentName'),
            education: props.navigation.getParam('education'),
            marriageStatus: props.navigation.getParam('marriageStatus'),
            address: props.navigation.getParam('address'),
            ktpPhoto: photo,
            ktpSelfie: props.navigation.getParam('ktpSelfie'),
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Foto KTP" leftIcon={BackIcon} onLeftIconPressed={backIconPressed} />
            <ScrollView>
                <View style={styles.accountSection}>
                    <Image style={styles.image} source={{ uri: photo.uri }} />
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <StickButton text="Konfirmasi" onPress={buttonPressHandler} />
            </View>
        </SafeAreaView >
    )
}

export default KTPPreviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    accountSection: {
        height: 0.75 * Dimensions.get('window').width,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
