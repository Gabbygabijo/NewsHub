import Logo from '@/assets/svgs/Logo'
import LogoutPopup from '@/components/LogoutPopup'
import SlideUpView from '@/components/SlideUpView'
import { Text, View } from '@/components/Themed'
import { darkGray, lightGray, mainStyles } from '@/constants/styles'
import { useUser } from '@/context/user-contex'
import { clearStoredData } from '@/utilities/local-data'
import { router } from 'expo-router'
import React, { useEffect, useRef, useState } from 'react'
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, useColorScheme } from 'react-native'

export default function HomeLayout({ children }: {
  children: React.ReactNode
}) {
  const colorScheme = useColorScheme()
  const { user, setUser } = useUser()
  const [logoutModal, setLogoutmodal] = useState(false)

  const scrollViewRef = useRef(null); 
  const scrollToTop = () => { 
    if (scrollViewRef.current) { 
      scrollViewRef.current.scrollTo({ y: 0, animated: true }); 
    } 
  };

  useEffect(()=>{
    scrollToTop()
  }, [children])
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
    },
    logoutModalContainer: {
      height: '15%',
      width: '65%',
      margin: 'auto',
      borderRadius: 12,
      justifyContent: 'center',
      // backgroundColor: colorScheme === 'dark' ? darkGray.gray300 : lightGray.gray300,
      alignItems: 'center',
    },
    allInModal: {
      // backgroundColor: colorScheme === 'dark' ? darkGray.gray300 : lightGray.gray300
    }
  })
  return (
    <SafeAreaView>
      <ScrollView ref={scrollViewRef} stickyHeaderHiddenOnScroll stickyHeaderIndices={[0]} nestedScrollEnabled>
        <View style={styles.borderLine}>
          <View style={[mainStyles.container, styles.topStyle]}>
            <Pressable onPress={()=>scrollToTop()} style={{ width: '30%' }}>
              <Logo height={50} width={50} />
            </Pressable>
            <Pressable onPress={()=>setLogoutmodal(!logoutModal)} style={{ flexDirection: 'row', justifyContent: 'space-between', width: 'auto' }}>
              <Text style={[mainStyles.semiRegularText]}>Hello {user?.username}</Text>
              <Image source={colorScheme === 'dark' ? require('@/assets/images/Profile.png') : require('@/assets/images/profileWhite.png')} style={styles.profileImg} />
              <LogoutPopup visibility={logoutModal}>
                <SlideUpView style={styles.logoutModalContainer}>
                  <View style={[{gap: 20},styles.allInModal]}>
                    <View style={[styles.allInModal]}>
                      <Text style={[mainStyles.semiHeaderText500, {textAlign: 'center'}]}>Logout?</Text>
                    </View>
                    <View style={[styles.allInModal, {flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginHorizontal: 'auto'}]}>
                      <Text onPress={()=>{setLogoutmodal(!logoutModal)}} style={[{textAlign: 'center', width: '40%'}]}>Exit</Text>
                      <Text onPress={()=>{
                        setUser(null)
                        clearStoredData('user')
                        router.replace('/')
                        setLogoutmodal(false)
                      }} style={[{textAlign: 'center', width: '40%'}]}>Ok</Text>
                    </View>
                  </View>
                </SlideUpView>
              </LogoutPopup>
            </Pressable>
          </View>
        </View>
        <View>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
