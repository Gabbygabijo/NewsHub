import React from 'react'
import { Modal, Platform, StyleSheet, useColorScheme } from 'react-native'
import { Text, View } from '../Themed'
import { darkGray, height, lightGray, mainStyles } from '@/constants/styles'
import ButtonAction from '../ButtonAction'
import SlideUpView from '../SlideUpView'
import SuccessIcon from '@/assets/svgs/SuccessIcon'
import ErrorIcon from '@/assets/svgs/ErrorIcon'

export default function Messagemodal({ errorMessage, messageTitle, visibility, message, setVisibility }: {
  visibility: boolean
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>
  message?: string
  errorMessage?: boolean
  messageTitle: string
}) {
  const colorScheme = useColorScheme()
  const styles = StyleSheet.create({
    containerMain: {
      borderTopLeftRadius: 19,
      borderTopRightRadius: 19,
      height: '50%',
      backgroundColor: colorScheme === 'dark' ? darkGray.gray300 : lightGray.gray300
    },
    allView: {
      backgroundColor: colorScheme === 'dark' ? darkGray.gray300 : lightGray.gray300
    }
  })
  return (
    <Modal visible={visibility} transparent>
      <View style={{ backgroundColor: 'transparent', justifyContent: 'flex-end', height: height }}>
        <SlideUpView style={[styles.containerMain]}>
          <View style={[mainStyles.container, { marginTop: 25, justifyContent: 'space-between', height: Platform.select({android: '65%', ios: '80%'})}, styles.allView]}>
            <View style={[styles.allView, { alignItems: 'center' }]}>
              {errorMessage ?
                <ErrorIcon />
                :
                <SuccessIcon />
              }
            </View>
            <View style={[{ gap: 10 }, styles.allView]}>
              <Text style={[mainStyles.semiHeaderText, { textAlign: 'center' }]}>{messageTitle}</Text>
              <Text style={[mainStyles.sideText, { textAlign: 'center', color: colorScheme === 'dark' ? darkGray.gray100 : lightGray.gray100 }]}>{message}</Text>
            </View>
            <ButtonAction btnText='Continue' BtnAction={() => { setVisibility(false) }} />
          </View>
        </SlideUpView>
      </View>
    </Modal>
  )
}
