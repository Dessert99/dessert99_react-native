import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, View } from 'react-native';
import { StyleSheet } from 'react-native';

//아이콘
import { AntDesign, Ionicons } from '@expo/vector-icons';

//이미지
import forALogo from '../assets/forALogo .png';

//페이지
import TodayScreen from '../screens/TodayScreen';
import PostScreen from '../screens/PostScreen';

//타입
import type { TodayStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<TodayStackParamList>();

const TodayStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TodayHome"
                component={TodayScreen}
                options={({ navigation }) => ({
                    headerTitle: '',
                    headerLeft: () => <Image source={forALogo} />,
                    headerRight: () => (
                        <View style={styles.container1}>
                            <AntDesign
                                name="search1"
                                style={styles.icon}
                                size={30}
                                color="black"
                                onPress={() => navigation.navigate('Search')}
                            />
                            <Ionicons
                                name="notifications-outline"
                                style={styles.icon}
                                size={30}
                                color="black"
                                onPress={() => navigation.navigate('Notification')}
                            />
                        </View>
                    ),
                })}
            />
            <Stack.Screen name="Post" component={PostScreen} options={{ title: '글 작성 페이지' }} />
        </Stack.Navigator>
    );
};

export default TodayStack;

//스타일 시트
const styles = StyleSheet.create({
    container1: {
        flexDirection: 'row',
        gap: 10,
    },
    icon: {
        cursor: 'pointer',
    },
});
