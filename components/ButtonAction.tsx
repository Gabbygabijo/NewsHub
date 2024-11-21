import { Pressable, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Text, View } from './Themed'
import { darkBlue, darkGray, lightBlue, lightGray, mainStyles } from '@/constants/styles'

export default function ButtonAction({BtnAction, btnText='ButtonAction'}:{
  btnText: string
  BtnAction: ()=> void
}) {
  const colorScheme = useColorScheme()
  const styles = StyleSheet.create({
    container: {
      borderRadius: 50,
      backgroundColor: colorScheme === 'dark' ? darkBlue.blue100 : lightBlue.blue100,
      paddingVertical: 10
    },
    textStyle: {
      textAlign: 'center',
      color: colorScheme === 'dark' ? darkGray.gray100 :  lightGray.gray100
    }
  })
  return (
    <Pressable style={styles.container} onPress={BtnAction}>
      <Text style={[styles.textStyle, mainStyles.sideText]}>{btnText}</Text>
    </Pressable>
  )
}
