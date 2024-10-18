import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScreenElectronics = () => {
    return (
        <View style={styles.container}>
            <Text>ScreenElectronics</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ScreenElectronics;
