import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView, TouchableNativeFeedback } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import UserBottomTabs from '../components/UserBottomTabs';
import BlockButton from '../components/BlockButton';
import color from '../constants/color';
import { getUserLimit } from '../redux/actions/user';
import { currencyFormat } from '../constants/function'

export default function UserHomeScreen(props) {
    const { email, nik } = useSelector(state => state.auth);
    const auth = useSelector(state => state.auth);
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const dispatch = useDispatch();

    const { limit, limit_remaining } = useSelector(state => state.user.limit);

    useEffect(() => {
        dispatch(getUserLimit(nik));
    }, [dispatch])

    const loanButtonPressed = () => {
        props.navigation.navigate('LoanApply');
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
                    <Text style={styles.headerText}>{email}</Text>
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
                    <ScrollView horizontal style={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
                        <TouchableNativeFeedback>
                            <View style={styles.scrollItem}>
                                <Text style={styles.centerText}>Cara Meminjam Dana</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                            <View style={styles.scrollItem}>
                                <Text style={styles.centerText}>Ajukan Kenaikan Limit</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                            <View style={styles.scrollItem}>
                                <Text style={styles.centerText}>Cara Membayar Pinjaman</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </ScrollView>
                    <TouchableNativeFeedback>
                        <View style={styles.contentItem}>
                            <Text style={styles.centerText}>Cara Membayar Pinjaman</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <View style={styles.contentItem}>
                            <Text style={styles.centerText}>Widget</Text>
                        </View>
                    </TouchableNativeFeedback>
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
        paddingHorizontal: 16
    },
    scrollContainer: {
        paddingHorizontal: 8,
        marginBottom: 12
    },
    scrollItem: {
        height: 150,
        width: 130,
        padding: 16,
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 4,
        marginRight: 8,
        marginLeft: 4
    },
    contentItem: {
        height: 200,
        backgroundColor: 'white',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#989898',
        marginBottom: 12
    },
    centerText: {
        textAlign: 'center'
    }
});
