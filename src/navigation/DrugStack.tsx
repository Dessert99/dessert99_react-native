import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//페이지
import DrugScreen from '../screens/DrugScreen';

//타입
import type { DrugStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<DrugStackParamList>();

const DrugStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="DrugHome" component={DrugScreen} options={{ title: '약 페이지' }} />
        </Stack.Navigator>
    );
};

export default DrugStack;
