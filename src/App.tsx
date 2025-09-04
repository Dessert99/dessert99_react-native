//탐색 트리를 관리하고 탐색 상태를 포함하는 구성 요소. 네비게이션 최상위에 감싸준다.
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native';

// 스택 네비게이터
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//바텀 네비게이터
import BottomTabNavigator from './navigation/BottomTabNavigator';

//페이지
import NotificationScreen from './screens/NotificationScreen';
import SearchScreen from './screens/SearchScreen';
import { colors } from './color/colors';

const RootStack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName="BottomTab"
                screenOptions={{ headerBackButtonDisplayMode: 'minimal' }}
            >
                <RootStack.Screen options={{ headerShown: false }} name="BottomTab" component={BottomTabNavigator} />
                <RootStack.Screen
                    name="Notification"
                    component={NotificationScreen}
                    options={() => ({
                        headerTitle: '알림',
                    })}
                />
                <RootStack.Screen
                    name="Search"
                    component={SearchScreen}
                    options={() => ({
                        contentStyle: { backgroundColor: '#fff' }, // 본문 배경도 흰색
                        headerTitle: '', // 텍스트 없애기
                        headerShadowVisible: false, //헤더 그림자 삭제
                        header: ({ navigation }) => (
                            <SafeAreaView>
                                <View
                                    style={{
                                        height: 56,
                                        backgroundColor: '#FFFFFF',
                                        paddingHorizontal: 12,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <View
                                        style={{
                                            flex: 1,
                                            height: 40,
                                            borderRadius: 50,
                                            borderWidth: 2,
                                            borderColor: '#2DB400', // ✅ 초록색 테두리
                                            backgroundColor: colors.white, // (선택) 연한 초록 배경
                                            paddingHorizontal: 12,
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <TextInput
                                            placeholder="검색어를 입력해주세요"
                                            placeholderTextColor="#9AA0A6"
                                            autoFocus
                                            returnKeyType="search"
                                            style={{ paddingVertical: 0, fontSize: 16 }}
                                        />
                                    </View>

                                    <Pressable
                                        onPress={navigation.goBack}
                                        style={{ paddingHorizontal: 8, marginLeft: 8 }}
                                    >
                                        <Text style={{ fontSize: 17, color: colors.primary100, fontWeight: '700' }}>
                                            취소
                                        </Text>
                                    </Pressable>
                                </View>
                            </SafeAreaView>
                        ),
                    })}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
