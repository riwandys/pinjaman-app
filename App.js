import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasterAdminHomeScreen from './screens/MasterAdminHomeScreen';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return (
    <MasterAdminHomeScreen />
    // <LoginScreen />
  );
}

