import { Text, View } from '@/components/Themed'
import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, useColorScheme } from 'react-native'
import AuthLayout from '../layouts/AuthLayout'
import { darkBlue, darkGray, height, lightBlue, lightGray, mainStyles } from '@/constants/styles'
import InputField from '@/components/InputField'
import ButtonAction from '@/components/ButtonAction'
import { router } from 'expo-router'
import { useUser } from '@/context/user-contex'
import { useSQLiteContext } from 'expo-sqlite'

export default function Login() {
  const db = useSQLiteContext()
  const colorScheme = useColorScheme()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passView, setPassView] = useState(true)
  const { setUser } = useUser()
  const handleLogin = async () => {
    if (username.length === 0 || password.length === 0) {
      Alert.alert('Attention', 'Please enter both username and password');
      return;
    }
    try {
      const user = await db.getFirstAsync('SELECT * FROM users WHERE username = ?', [username]);
      if (!user) {
        Alert.alert('Error', 'Username does not exist !');
        return;
      }
      const validUser = await db.getFirstAsync('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
      if (validUser) {
        Alert.alert('Success', 'Login successful');
        setUser({ username, password })
        router.replace('/')
      } else {
        Alert.alert('Error', 'Incorrect password');
      }
    } catch (error) {
      console.log('Error during login : ', error);
    }
  };

  const styles = StyleSheet.create({
    container: {
      height: height - 150
    },
    formContainer: {
      width: '90%',
      marginHorizontal: 'auto',
      gap: 18
    }
  })
  return (
    <AuthLayout>
      <View style={styles.container}>
        <View>
          <Text style={[mainStyles.topText, { textAlign: 'center' }]}>Login</Text>
        </View>
        <View style={styles.formContainer}>
          <InputField value={username} onChaneText={(text) => setUsername(text)} placeholder='Enter your Username' label='Username' />
          <InputField value={password} onChaneText={(text) => setPassword(text)} password placeholder='Enter your Password' label='Password' textEntry={passView} iconOnPress={() => setPassView(!passView)} />
          <View style={{ flexDirection: 'row' }}>
            <Text style={[{ color: colorScheme === 'dark' ? darkGray.gray200 : lightGray.gray200 }, mainStyles.topText400]}>Don't have an account? </Text>
            <Text style={[{ color: colorScheme === 'dark' ? darkBlue.blue100 : lightBlue.blue100 }, mainStyles.topText400]} onPress={() => router.push('/Register')}>Register</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <ButtonAction btnText='Login' BtnAction={() => { handleLogin() }} />
          </View>
        </View>
      </View>
    </AuthLayout>
  )
}
