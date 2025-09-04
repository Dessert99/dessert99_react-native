import { Text, View, SafeAreaView, ScrollView, Image, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { TodayStackParamList } from '../types/navigation';

// 컬러
import { colors } from '../color/colors';

// 아이콘
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

//이미지
import writeIcon from '../assets/writeIcon.png';
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import forA from '../assets/forA.png';

//컴포넌트
import PostCard from '../components/PostCard';

//두 번째 제네릭은 “지금 이 컴포넌트가 등록된 라우트 이름이다.
type Props = NativeStackScreenProps<TodayStackParamList, 'TodayHome'>;

//더미 데이터
const category = ['실시간', '10대', '20대', '30대↑', '학부모'];
const dummy = category.flatMap((cat) =>
    Array.from({ length: 7 }, (_, i) => ({
        rank: i + 1,
        title: `${cat} 인기글 ${i + 1}`,
        views: 1200 - i * 37, // 대충 내림차순
        category: cat,
        likes: 230 - i * 11, // 대충 내림차순
        date: '09/05', // 표시용 문자열 (필요시 변경)
        img: forA, // 모든 카드 공통 이미지
    }))
);

const TodayScreen = ({ navigation }: Props) => {
    const [selected, setSelected] = useState('실시간');
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
                <View style={styles.categoryContainer}>
                    {category.map((c, idx) => {
                        return (
                            <Pressable
                                key={idx}
                                onPress={() => setSelected(c)}
                                style={[styles.categoryBtn, selected === c && styles.categoryActive]}
                            >
                                <Text style={[styles.categoryText, selected === c && styles.categoryTextActive]}>
                                    {c}
                                </Text>
                            </Pressable>
                        );
                    })}
                </View>
                <View style={styles.postContainer}>
                    <View style={styles.rankingContainer}>
                        <Pressable style={{ flexDirection: 'row' }}>
                            <Text style={styles.rankingText}>랭킹</Text>
                            <MaterialIcons name="autorenew" size={20} color="black" />
                        </Pressable>
                    </View>
                    <ScrollView style={styles.postListContainer} contentInsetAdjustmentBehavior="never">
                        {dummy
                            .filter((p) => p.category === selected)
                            .map((p) => (
                                <PostCard key={`${p.category}-${p.rank}`} {...p} />
                            ))}
                    </ScrollView>
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
    },
    categoryContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    postContainer: {
        flex: 7,
    },
    rankingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
    rankingText: {
        fontSize: 18,
    },
    postListContainer: {
        flex: 8,
        padding: 10,
    },

    categoryBtn: {
        width: 70,
        height: 30,
        borderRadius: 6000,
        backgroundColor: colors.grey,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryText: {
        fontSize: 15,
    },
    categoryActive: { backgroundColor: colors.white, borderColor: colors.primary100, borderWidth: 1.5 },
    categoryTextActive: { color: colors.primary100, fontWeight: '600' },
});
