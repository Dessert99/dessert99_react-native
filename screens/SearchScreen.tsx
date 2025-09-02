import { View, Button, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

//타입
import type { RootStackParamList } from '../types/navigation';

type SearchNav = NativeStackNavigationProp<RootStackParamList, 'Search'>;

const SearchScreen = () => {
    const { navigate } = useNavigation<SearchNav>();

    return (
        <SafeAreaView>
            <View>
                <Button title="가게로 이동" onPress={() => navigate('Store')} />
            </View>
        </SafeAreaView>
    );
};

export default SearchScreen;
