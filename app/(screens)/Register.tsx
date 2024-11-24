import { Text, View } from '@/components/Themed'
import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, useColorScheme } from 'react-native'
import AuthLayout from '../layouts/AuthLayout'
import { darkBlue, darkGray, height, lightBlue, lightGray, mainStyles } from '@/constants/styles'
import InputField from '@/components/InputField'
import ButtonAction from '@/components/ButtonAction'
import { router } from 'expo-router'
import { useSQLiteContext } from 'expo-sqlite'
import { storeData } from '@/utilities/local-data'
import Messagemodal from '@/components/modals/Messagemodal'

export default function Register() {
  const db = useSQLiteContext()
  const colorScheme = useColorScheme()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passView, setPassView] = useState(true)

  const [message, setMessage] = useState('')
  const [messageTitle, setMessageTitle] = useState('')
  const [modal, setModal] = useState(false)
  const [err, setErr] = useState(false)

  const access = {
    username: username,
    password: password
  }

  const handleRegister = async () => {
    if (username.length === 0 || password.length === 0) {
      setModal(true);
      setMessage('Please enter both username and password');
      setMessageTitle('Attention');
      setErr(true)
      return;
    }
    try {
      const existingUser = await db.getFirstAsync('SELECT * FROM users WHERE username = ?', [username]);
      if (existingUser) {
        setModal(true)
        setMessage('Username already exists.')
        setMessageTitle('Error')
        setErr(true)
        return;
      }
      await db.runAsync('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
      setModal(true)
      setMessage('Registration successful!')
      setMessageTitle('Success')
      setErr(false)
      storeData("user", JSON.stringify(access))
      router.push('/')
    } catch (error) {
      console.log('Error during registration : ', error);
      setModal(true)
      setMessage(`${error}`)
      setMessageTitle('Error during registration')
      setErr(true)
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
          <Text style={[mainStyles.topText, { textAlign: 'center' }]}>Register Now</Text>
        </View>
        <View style={styles.formContainer}>
          <InputField value={username} onChaneText={(text) => setUsername(text)} placeholder='Enter your Username' label='Username' />
          <InputField value={password} onChaneText={(text) => setPassword(text)} password placeholder='Enter your Password' label='Password' textEntry={passView} iconOnPress={() => setPassView(!passView)} />
          <View style={{ flexDirection: 'row' }}>
            <Text style={[{ color: colorScheme === 'dark' ? darkGray.gray200 : lightGray.gray200 }, mainStyles.topText400]}>Already have an account? </Text>
            <Text style={[{ color: lightBlue.blue100 }, mainStyles.topText400]} onPress={() => router.push('/Login')}>Login</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <ButtonAction btnText='Register' BtnAction={() => { handleRegister() }} />
          </View>
        </View>
        <Messagemodal visibility={modal} setVisibility={setModal} messageTitle={messageTitle} message={message} errorMessage={err} />

      </View>
    </AuthLayout>
  )
}
