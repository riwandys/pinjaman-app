import React, { useEffect } from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import color from '../constants/color';

const StartupScreen = props => {
    useEffect(() => {
        const tryLogin = async () => {
            const userData = await AsyncStorage.getItem('userData');
            if (!userData) {
                props.navigation.navigate('Auth');
                return;
            }
            const transformedData = JSON.parse(userData);
            const { role } = transformedData;

            if (role === 'user') {
                props.navigation.navigate('Auth');
                return;
            } else if (role === 'admin') {
                props.navigation.navigate('Admin');
                return;
            } else if (role === 'master admin') {
                props.navigation.navigate('MasterAdmin')
                return;
            }
            props.navigation.navigate('Shop');
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