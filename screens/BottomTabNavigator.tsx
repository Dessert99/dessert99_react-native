import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

//페이지
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            <BottomTab.Screen name="Home" component={HomeScreen} />
            <BottomTab.Screen name="Search" component={SearchScreen} />
        </BottomTab.Navigator>
    );
};

export default BottomTabNavigator;
