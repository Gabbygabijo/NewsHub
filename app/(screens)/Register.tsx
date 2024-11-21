import { Text, View } from '@/components/Themed'
import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet } from 'react-native'
import AuthLayout from '../layouts/AuthLayout'
import { height, mainStyles } from '@/constants/styles'
import InputField from '@/components/InputField'
import ButtonAction from '@/components/ButtonAction'
import { registerUser } from '@/utilities/database'
import { router } from 'expo-router'

export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passView, setPassView] = useState(true)
  const handleRegister = () => { registerUser(username, password); Alert.alert('Success', 'Registration Successful', [ { text: 'OK', onPress: () => router.push('/') }, ]); };
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
          <Text style={[mainStyles.topText, {textAlign: 'center'}]}>Register Now</Text>
        </View>
        <View style={styles.formContainer}>
          <InputField value={username} onChaneText={(text) => setUsername(text)} placeholder='Enter your Username' label='Username' />
          <InputField value={password} onChaneText={(text) => setPassword(text)} password placeholder='Enter your Password' label='Password' textEntry={passView} iconOnPress={() => setPassView(!passView)} />
          <View style={{ marginTop: 10 }}>
            <ButtonAction btnText='Register' BtnAction={()=>{handleRegister}} />
          </View>
        </View>
      </View>
    </AuthLayout>
  )
}
