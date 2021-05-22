import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView, TouchableNativeFeedback, Alert, Image, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import UserBottomTabs from '../components/UserBottomTabs';
import BlockButton from '../components/BlockButton';
import color from '../constants/color';
import { getUserLimit } from '../redux/actions/user';
import { currencyFormat } from '../constants/function'

export default function UserHomeScreen(props) {
    const { email, nik, token, name } = useSelector(state => state.auth);
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const dispatch = useDispatch();

    const { limit, limit_remaining } = useSelector(state => state.user.limit);

    useEffect(() => {
        dispatch(getUserLimit(nik, token));
    }, [dispatch])

    const loanButtonPressed = () => {
        if (limit_remaining === 0) {
            alert('Limit peminjaman anda 0. Anda tidak dapat melakukan pinjaman untuk saat ini.');
        } else {
            props.navigation.navigate('LoanApply');
        }
    }

    const openURL = async (url) => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }

    const bottomTabNavigate = (target) => {
        props.navigation.navigate(target);
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="rgba(0,0,0,0.1)" translucent />
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerText}>Halo</Text>
                    <Text style={styles.headerText}>{name}</Text>
                </View>
                <View>
                    <Text style={styles.headerText}>{`${day}/${month}/${year}`}</Text>
                </View>
            </View>
            <View style={styles.highlightDataContainer}>
                <View style={styles.highlightDataBox}>
                    <View style={{ ...styles.highlightData, borderRightWidth: 1, borderColor: color.primary }}>
                        <Text style={styles.dataTitle}>Limit Pinjaman :</Text>
                        <Text style={styles.dataAmount}>{currencyFormat(limit)}</Text>
                    </View>
                    <View style={styles.highlightData}>
                        <Text style={styles.dataTitle}>Sisa Limit :</Text>
                        <Text style={styles.dataAmount}>{currencyFormat(limit_remaining)}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <BlockButton text="Pinjam Sekarang" onPress={loanButtonPressed} />
            </View>
            <ScrollView>
                <View style={styles.viewContainer}>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Cara Pakai Aplikasi</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <TouchableNativeFeedback onPress={openURL.bind(this, 'https://www.youtube.com/watch?v=_v9FGeXq-xg')}>
                                <View style={styles.scrollItem}>
                                    <Image source={require('../assets/banner/cara_pinjam.png')} style={styles.image} />
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={openURL.bind(this, 'https://www.youtube.com/watch?v=15P89gaqJTw')}>
                                <View style={styles.scrollItem}>
                                    <Image source={require('../assets/banner/kenaikan_limit.png')} style={styles.image} />
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={openURL.bind(this, 'https://www.youtube.com/watch?v=4_Qgi6-8KMk')}>
                                <View style={styles.scrollItem}>
                                    <Image source={require('../assets/banner/cara_bayar.png')} style={styles.image} />
                                </View>
                            </TouchableNativeFeedback>
                        </ScrollView>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Tentang PinjaMAN</Text>
                        <TouchableNativeFeedback onPress={openURL.bind(this, 'https://www.youtube.com/watch?v=i__fthUw4l0')}>
                            <View style={styles.contentItem}>
                                <Image source={require('../assets/banner/promo.png')} style={styles.image} />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Informasi</Text>
                        <TouchableNativeFeedback onPress={openURL.bind(this, 'https://www.youtube.com/watch?v=rU0aKdq2oqg')}>
                            <View style={styles.contentItem}>
                                <Image source={require('../assets/banner/rekening.png')} style={styles.image} />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </ScrollView>
            <UserBottomTabs navigateToAccount={bottomTabNavigate.bind(this, 'Account')} navigateToTransaction={bottomTabNavigate.bind(this, 'TransactionList')} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: StatusBar.currentHeight + 141,
        width: '100%',
        backgroundColor: color.primary,
        paddingHorizontal: 16,
        paddingTop: StatusBar.currentHeight + 16,
        color: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        color: 'white',
        fontSize: 12
    },
    highlightDataContainer: {
        alignItems: 'center'
    },
    highlightDataBox: {
        flexDirection: 'row',
        width: '85%',
        backgroundColor: 'white',
        marginTop: -48,
        marginBottom: 16,
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 16,
        elevation: 4,
        borderWidth: 1,
        borderColor: color.primary
    },
    highlightData: {
        width: '50%',
        // height: 44,
        justifyContent: 'space-between',
        paddingHorizontal: 8
    },
    dataTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 4
    },
    dataAmount: {
        color: '#F7A75D',
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonContainer: {
        paddingHorizontal: 16,
        paddingBottom: 4
    },
    addButton: {
        width: '100%',
        height: 48,
        backgroundColor: color.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        overflow: 'hidden'
    },
    buttonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold'
    },
    viewContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    scrollItem: {
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: 12,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    contentItem: {
        backgroundColor: 'white',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#989898',
        overflow: 'hidden'
    },
    centerText: {
        textAlign: 'center'
    },
    image: {
        resizeMode: 'cover'
    },
    sectionContainer: {
        paddingVertical: 4
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 12
    }
});
