import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//스택
import HospitalStack from './HospitalStack';
import DrugStack from './DrugStack';
import TodayStack from './TodayStack';
import MyStack from './MyStack';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator initialRouteName="오늘" screenOptions={{ headerShown: false }}>
            <BottomTab.Screen name="병원" component={HospitalStack} />
            <BottomTab.Screen name="약" component={DrugStack} />
            <BottomTab.Screen name="오늘" component={TodayStack} />
            <BottomTab.Screen name="My" component={MyStack} />
        </BottomTab.Navigator>
    );
};

export default BottomTabNavigator;
