import { View, Text, Image } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import logo from '../assets/forA.png';
import { colors } from '../color/colors';

const SearchScreen = () => {
    return (
        <View style={styles.container1}>
            <View style={styles.container2}>
                <Image source={logo} style={{ width: 100, height: 100 }} />
                <Text style={styles.text}>검색 결과가 없어요</Text>
                <Text style={styles.text}>다른 키워드로 검색해보시겠어요?</Text>
            </View>
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container1: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.grey },
    container2: { justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 15, fontWeight: '700' },
});
