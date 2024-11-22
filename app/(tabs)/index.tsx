import { Image, SafeAreaView, ScrollView, StyleSheet, useColorScheme } from 'react-native';
import { Text, View } from '@/components/Themed';
import { darkGray, height, mainStyles } from '@/constants/styles';
import AuthLayout from '../layouts/AuthLayout';
import InputField from '@/components/InputField';
import Register from '../(screens)/Register';
import { useUser } from '@/context/user-contex';
import HomeScreen from '../(screens)/HomeScreen';


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
