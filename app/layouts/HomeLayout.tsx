import Logo from '@/assets/svgs/Logo'
import { Text, View } from '@/components/Themed'
import { darkGray, lightGray, mainStyles } from '@/constants/styles'
import { useUser } from '@/context/user-contex'
import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, useColorScheme } from 'react-native'

export default function HomeLayout({ children }: {
  children: React.ReactNode
}) {
  const colorScheme = useColorScheme()
  const { user } = useUser()
  const styles = StyleSheet.create({
    profileImg: {
      width: 36,
      height: 36,
      borderRadius: 50,
      marginVertical: 'auto',
      marginLeft: 5
    },
    topStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    borderLine: {
      borderBottomWidth: 1,
      borderBottomColor: colorScheme === 'dark' ? darkGray.gray300 : lightGray.gray300
    }
  })
  return (
    <SafeAreaView>
      <ScrollView stickyHeaderHiddenOnScroll stickyHeaderIndices={[0]}>
        <View style={styles.borderLine}>
          <View style={[mainStyles.container, styles.topStyle]}>
            <View style={{ width: '30%' }}>
              <Logo height={50} width={50} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 'auto' }}>
              <Text style={[mainStyles.semiRegularText]}>Hello {user?.username}</Text>
              <Image source={colorScheme === 'dark' ? require('@/assets/images/Profile.png') : require('@/assets/images/profileWhite.png')} style={styles.profileImg} />
            </View>
          </View>
        </View>
        <View>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
