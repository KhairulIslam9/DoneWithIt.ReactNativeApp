import React from 'react';
import Constant from 'expo-constants'
import { SafeAreaView, StyleSheet } from 'react-native';

function Screen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constant.statusBarHeight
    }
})

export default Screen;