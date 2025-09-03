import { Button, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { TodayStackParamList } from '../types/navigation';

//이미지
import writeIcon from '../assets/writeIcon.png';
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';

//두 번째 제네릭은 “지금 이 컴포넌트가 등록된 라우트 이름이다.
type Props = NativeStackScreenProps<TodayStackParamList, 'TodayHome'>;

const TodayScreen = ({ navigation }: Props) => {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.mainContainer1}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled>
                    <Image source={slide1} />
                    <Image source={slide2} />
                    <Image source={slide3} />
                </ScrollView>
            </View>
            <View style={styles.mainContainer2}>
                <View style={styles.categoryContainer}></View>
                <View style={styles.postContainer}>
                    <View style={styles.rankingContainer}></View>
                    <View style={styles.postListContainer}></View>
                </View>
            </View>
            {/* <Button title="글쓰기" onPress={() => navigation.navigate('Post', { userName: '재준' })} /> */}
        </SafeAreaView>
    );
};

export default TodayScreen;

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white',
        gap: 5,
    },
    mainContainer1: {
        flex: 2,
    },
    mainContainer2: {
        flex: 3,
        borderWidth: 1,
    },
    categoryContainer: {
        flex: 1,
        borderWidth: 1,
    },
    postContainer: {
        flex: 6,
        borderWidth: 1,
    },
    rankingContainer: {
        flex: 1,
        borderWidth: 1,
    },
    postListContainer: {
        flex: 6,
        borderWidth: 1,
    },
    scrollView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
