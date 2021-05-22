import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, FlatList, TouchableNativeFeedback } from 'react-native'
import UserDataItems from '../components/UserDataItems'
import AdminBottomTabs from '../components/AdminBottomTabs';
import color from '../constants/color';
import { useSelector, useDispatch } from 'react-redux';
import { getPendingTransactions } from '../redux/actions/admin';

export default function AdminHomeScreen(props) {
    const dispatch = useDispatch();
    const { name, role, token, email } = useSelector(state => state.auth);
    const { pendingUsers, confirmedUsers } = useSelector(state => state.admin.usersCount);
    const pendingTransactionList = useSelector(state => state.admin.pendingTransactions);
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    useEffect(() => {
        dispatch(getPendingTransactions(token));
    }, [dispatch]);

    const pressHandler = (item) => {
        if (item.type === 'registration') {
            props.navigation.navigate('UserDetail');
        } else if (item.type === 'payment') {
            props.navigation.navigate('PaymentDetail', {
                transactionID: item.data.transaction_id
            });
        }
    }


    const renderItem = ({ item, index }) => {
        return (
            <UserDataItems
                type={item.type}
                data={item.data}
                onPress={pressHandler.bind(this, item)}
            />
        );
    }

    const tabNavigate = (target) => {
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
                <View style={styles.highlightData}>
                    <Text style={styles.dataTitle}>Total Pengguna{'\n'}Menunggu Konfirmasi</Text>
                    <Text style={styles.dataAmount}>{pendingUsers}</Text>
                </View>
                <View style={styles.highlightData}>
                    <Text style={styles.dataTitle}>Total Pengguna{'\n'}Terkonfirmasi</Text>
                    <Text style={styles.dataAmount}>{confirmedUsers}</Text>
                </View>
            </View>
            <FlatList
                data={pendingTransactionList}
                renderItem={renderItem}
                keyExtractor={(item) => {
                    if (item.type === 'payment') {
                        return `${item.type}${item.data.nik}${item.data.payment_deadline}`
                    } else if (item.type === 'registration') {
                        return `${item.type}${item.data.nik}${item.data.registration_date}`
                    }

                }}
                contentContainerStyle={{ padding: 16 }}
            />
            <AdminBottomTabs navigateToAccount={tabNavigate.bind(this, 'Account')} navigateToHistory={tabNavigate.bind(this, 'AdminTransactionHistory')} />
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
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'space-between'
    },
    highlightData: {
        marginTop: -60,
        height: 149,
        width: '48%',
        borderRadius: 11,
        backgroundColor: 'white',
        elevation: 4,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    dataTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 4,
        textAlign: 'center'
    },
    dataAmount: {
        color: '#F7A75D',
        fontSize: 48,
        fontWeight: 'bold'
    },
    adminListContainer: {
        paddingHorizontal: 16
    },
    buttonContainer: {
        paddingHorizontal: 16,
        paddingBottom: 12
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
    }
});

