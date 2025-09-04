import { View, Text, Image, Pressable } from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import { StyleSheet } from 'react-native';
//아이콘
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

// 파라미터 타입
type PostCardProps = {
    rank: number;
    title: string;
    views: number;
    category: string;
    likes: number;
    date: string;
    img: ImageSourcePropType;
};

const PostCard = ({ rank, title, views, img, likes, category, date }: PostCardProps) => {
    return (
        <Pressable style={[styles.card]}>
            <View style={styles.left}>
                <Text style={styles.rankText}>{rank}</Text>
                <View style={styles.info}>
                    <Text style={styles.titleText}>{title}</Text>
                    <View style={styles.box1}>
                        <View style={styles.box2}>
                            <FontAwesome5 name="bars" size={15} color="black" />
                            <Text style={styles.categoryText}>{category}</Text>
                        </View>
                        <View style={styles.box2}>
                            <AntDesign name="eyeo" size={15} color="black" />
                            <Text style={styles.categoryText}>{views}</Text>
                        </View>
                        <View style={styles.box2}>
                            <AntDesign name="like2" size={15} color="black" />
                            <Text style={styles.categoryText}>{likes}</Text>
                        </View>
                    </View>
                    <Text>{date}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Image source={img} style={{ width: 60, height: 60 }} />
            </View>
        </Pressable>
    );
};

export default PostCard;

const styles = StyleSheet.create({
    card: { borderWidth: 1, borderRadius: 10, padding: 10, flexDirection: 'row' },
    left: { flexDirection: 'row', flex: 3, gap: 10 },
    right: { borderWidth: 1, flex: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
    info: { gap: 5 },
    box1: { flexDirection: 'row', gap: 10 },
    box2: { flexDirection: 'row', gap: 3 },
    rankText: { fontSize: 20 },
    titleText: { fontSize: 20, fontWeight: '600' },
    categoryText: { fontSize: 15 },
    dateText: {},
});
