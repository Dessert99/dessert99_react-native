//탐색 트리를 관리하고 탐색 상태를 포함하는 구성 요소. 네비게이션 최상위에 감싸준다.
import { NavigationContainer } from '@react-navigation/native';

// 스택 네비게이터
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//바텀 네비게이터
import BottomTabNavigator from './navigation/BottomTabNavigator';

//페이지

const RootStack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="BottomTab">
                <RootStack.Screen options={{ headerShown: false }} name="BottomTab" component={BottomTabNavigator} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
