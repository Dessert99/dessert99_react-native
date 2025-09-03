import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//페이지
import HospitalScreen from '../screens/HospitalScreen';

//타입
import type { HospitalStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<HospitalStackParamList>();

const HospitalStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HospitalHome" component={HospitalScreen} options={{ title: '병원페이지' }} />
        </Stack.Navigator>
    );
};

export default HospitalStack;
