//네비게이터
import { NavigationContainer } from '@react-navigation/native';

// 스택 네비게이터
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//바텀 네비게이터
import BottomTabNavigator from './screens/BottomTabNavigator';
//페이지
import SearchScreen from './screens/SearchScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import StoreScreen from './screens/StoreScreen';

//타입
import type { RootStackParamList } from './types/navigation';

// 스택 네비게이터 제레닉 연결
// const RootStack = createNativeStackNavigator<RootStackParamList>({
//     initialRouteName: 'Home',
//     screenOptions: {
//         headerStyle: { backgroundColor: 'yellow' },
//     },
//     screens: {
//         Home: HomeScreen,
//         Profile: ProfileScreen,
//         Search: SearchScreen,
//         Store: StoreScreen,
//     },
// });

const RootStack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="BottomTab">
                <RootStack.Screen options={{ headerShown: false }} name="BottomTab" component={BottomTabNavigator} />
                <RootStack.Screen name="Home" component={HomeScreen} />
                <RootStack.Screen name="Profile" component={ProfileScreen} />
                <RootStack.Screen name="Search" component={SearchScreen} />
                <RootStack.Screen name="Store" component={StoreScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
