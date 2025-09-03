import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

//페이지
import MyScreen from '../screens/MyScreen';

//타입
import { MyStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<MyStackParamList>();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MyHome" component={MyScreen} options={{ title: '내 페이지' }} />
        </Stack.Navigator>
    );
};

export default MyStack;
