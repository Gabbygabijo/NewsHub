import { StyleSheet, useColorScheme } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useUser } from '@/context/user-contex';
import HomeScreen from '../(screens)/HomeScreen';
import Register from '../(screens)/Register';
import { useEffect } from 'react';
import getStoredData from '@/utilities/local-data';


export default function TabOneScreen() {
  const colorScheme = useColorScheme()
  const { user, setUser } = useUser()
  const handleLastLogin = async () => {
    const lastLogin = await getStoredData("user")
    if (lastLogin) {
      const data = JSON.parse(lastLogin)
      setUser(data)
    }
  }
  useEffect(() => {
    if (!user) {
      handleLastLogin()
    }
  })

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
