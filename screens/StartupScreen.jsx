import React, { useEffect } from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import color from '../constants/color';
import { useDispatch } from 'react-redux';
import { authenticate } from '../redux/actions/auth';

const StartupScreen = props => {
    const dispatch = useDispatch();
    useEffect(() => {
        const tryLogin = async () => {
            try {
                const userData = await AsyncStorage.getItem('userData');
                if (!userData) {
                    props.navigation.navigate('Auth');
                    return;
                }
                const transformedData = JSON.parse(userData);
                const { email, nik, role } = transformedData;
                dispatch(authenticate(email, nik, role));
                if (role === 'User' || role === 'user') {
                    props.navigation.navigate('User');
                    return;
                } else if (role === 'Admin' || role === 'admin') {
                    props.navigation.navigate('Admin');
                    return;
                } else if (role === 'Master Admin' || role === 'master admin') {
                    props.navigation.navigate('MasterAdmin')
                    return;
                }
                props.navigation.navigate('Auth');
            } catch (error) {
                console.log(error);
            }
        };

        tryLogin();
    });

    return (
        <View style={styles.screen}>
            <ActivityIndicator size="large" color={color.primary} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default StartupScreen;