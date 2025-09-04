import { View, Text, Image } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import logo from '../assets/forA.png';

const NotificationScreen = () => {
    return (
        <View style={styles.container1}>
            <View style={styles.container2}>
                <Image source={logo} style={{ width: 100, height: 100 }} />
                <Text style={styles.text}>아직 새로운 알림이 없어요</Text>
            </View>
        </View>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    container1: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    container2: { justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 15, fontWeight: '700' },
});
