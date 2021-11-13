import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import Coin from './screens/Coin';

export default function App() {
  return (
    <>
    <StatusBar style="dark" />
    <Coin/>
    </>
  );
}

