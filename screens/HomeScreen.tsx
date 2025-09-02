import { Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

//이미지
import forA from '../assets/forA.png';

// 타입
import type { RootStackParamList } from '../types/navigation';

type HomeNav = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Story = styled.TouchableOpacity`
    margin: 0 8px;
`;

const HomeScreen = () => {
    const navigation = useNavigation<HomeNav>();
    const handleMove = () => {
        navigation.navigate('Profile');
    };
    return (
        <SafeAreaView>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Story onPress={handleMove}>
                    <Image source={forA} style={{ width: 50, height: 50 }} />
                    <Text>포에이 연습 중 </Text>
                </Story>
                <Story>
                    <Image source={forA} style={{ width: 50, height: 50 }} />
                    <Text>포에이 연습 중 </Text>
                </Story>
                <Story>
                    <Image source={forA} style={{ width: 50, height: 50 }} />
                    <Text>포에이 연습 중 </Text>
                </Story>
                <Story>
                    <Image source={forA} style={{ width: 50, height: 50 }} />
                    <Text>포에이 연습 중 </Text>
                </Story>
                <Story>
                    <Image source={forA} style={{ width: 50, height: 50 }} />
                    <Text>포에이 연습 중 </Text>
                </Story>
                <Story>
                    <Image source={forA} style={{ width: 50, height: 50 }} />
                    <Text>포에이 연습 중 </Text>
                </Story>
                <Story>
                    <Image source={forA} style={{ width: 50, height: 50 }} />
                    <Text>포에이 연습 중 </Text>
                </Story>
                <Story>
                    <Image source={forA} style={{ width: 50, height: 50 }} />
                    <Text>포에이 연습 중 </Text>
                </Story>
                <Story>
                    <Image source={forA} style={{ width: 50, height: 50 }} />
                    <Text>포에이 연습 중 </Text>
                </Story>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
