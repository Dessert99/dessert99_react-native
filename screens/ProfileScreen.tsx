import { View, Text, Button, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

//타입
import type { RootStackParamList } from '../types/navigation';

type ProfileNav = NativeStackNavigationProp<RootStackParamList, 'Profile'>;

const ProfileScreen = () => {
    const navigation = useNavigation<ProfileNav>();

    return (
        <SafeAreaView>
            <View>
                <Button title="가게로 이동" onPress={() => navigation.navigate('Store')} />
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
