import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Text, View } from '@/components/Themed'
import { darkGray, width } from '@/constants/styles'

export default function AuthLayout({ children }: {
  children: React.ReactNode
}) {
  const colorScheme = useColorScheme()
  const styles = StyleSheet.create({
    container: {
      width: '90%',
      marginHorizontal: 'auto',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'transparent',
      paddingTop: 5
    },
    imgStyle: {
      height: 50,
      width: '30%',
      backgroundColor: darkGray.gray0,
      borderRadius: 12,
    },
    topBackground: {
      width: width,
      height: 200
    }
  })
  return (
    <SafeAreaView>
      <ScrollView automaticallyAdjustKeyboardInsets>
        <ImageBackground style={styles.topBackground} source={require('@/assets/images/auth-top-image.jpg')}>
          <View style={styles.container}>
            <Image style={styles.imgStyle} source={require('@/assets/images/transparent-logo.png')} />
            <Text></Text>
          </View>
        </ImageBackground>
        <View>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
