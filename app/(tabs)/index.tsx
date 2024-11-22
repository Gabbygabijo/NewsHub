import { Image, SafeAreaView, ScrollView, StyleSheet, useColorScheme } from 'react-native';
import { Text, View } from '@/components/Themed';
import { darkGray, height, mainStyles } from '@/constants/styles';
import InputField from '@/components/InputField';
import { useUser } from '@/context/user-contex';
import HomeScreen from '../(screens)/HomeScreen';
import Register from '../(screens)/Register';


export default function TabOneScreen() {
  const colorScheme = useColorScheme()
  const { user } = useUser()
  
  const styles = StyleSheet.create({

  });
  return (
    <View>
      {user ?
        <HomeScreen />
        :
        <Register />
      }
    </View>
  );
}
