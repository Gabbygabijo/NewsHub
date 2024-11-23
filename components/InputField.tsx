import { StyleSheet, TextInput, useColorScheme } from 'react-native'
import React from 'react'
import { darkGray, lightGray, mainStyles } from '@/constants/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, View } from './Themed'

export default function InputField({ label, password = false, placeholder, onChaneText, value, textEntry, iconOnPress }: {
  placeholder: string
  label: string
  password?: boolean
  value: string
  onChaneText: ((text: string) => void)
  textEntry?: boolean
  iconOnPress?: () => void
}) {
  const colorScheme = useColorScheme()
  const styles = StyleSheet.create({
    container: {
      gap: 14
    },
    inputStyle: {
      borderBottomWidth: 1.5,
      borderBottomColor: colorScheme === 'dark' ? darkGray.gray200 : lightGray.gray200,
      paddingVertical: 7,
      color: colorScheme === 'dark' ? darkGray.gray0 : lightGray.gray0,
      fontSize: 18
    }
  })
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={mainStyles.semiRegularText}>{label}</Text>
        {password && <MaterialCommunityIcons name={textEntry ? 'eye' : 'eye-off'} size={24} color="#989898" onPress={iconOnPress} />}
      </View>
      <TextInput value={value} onChangeText={onChaneText} secureTextEntry={textEntry} placeholder={placeholder} style={styles.inputStyle} />
    </View>
  )
}
