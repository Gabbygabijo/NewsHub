import { Dimensions, StyleSheet } from "react-native"

export const { width, height } = Dimensions.get('screen')

export const mainStyles = StyleSheet.create({
    container: {
      width: '90%',
      marginHorizontal: 'auto',
    },
    topText: {
      marginHorizontal: 'auto',
      marginVertical: 30,
      fontSize: 18,
      fontWeight: 600,
    },
    topText500: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 24
    },
    topText400: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 24
    },
    profileImg: {
      width: 36,
      height: 36,
      borderRadius: 50
    },
    largeProfileImg: {
      width: 65,
      height: 65,
      borderRadius: 50
    },
    largeText: {
      fontSize: 28,
      lineHeight: 35,
      fontWeight: 500
    },
    regularText: {
      fontSize: 14,
      lineHeight: 22,
      fontWeight: 500,
      letterSpacing: 0.2,
    },
    regularText400: {
      fontSize: 14,
      lineHeight: 22,
      fontWeight: 400,
      letterSpacing: 0.2,
    },
    semiHeaderText: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: 600
    },
    semiHeaderText500: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: 500
    },
    sideText: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 23
    },
    semiRegularText: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 400,
      marginVertical: 'auto'
    },
    bgTransparent: {
      backgroundColor: 'transparent'
    },
    HugeBorderTopContainer: {
      paddingTop: 30,
      borderTopWidth: 9,
    },
  })

export const darkGray = {
    gray0: '#FFFFFF',
    gray50: '#F1F1F1',
    gray100: '#A2A2A2',
    gray200: '#656565',
    gray300: '#212121',
    gray400: '#0B0B0B'
}
export const lightGray = {
    gray0: '#0B0B0B',
    gray50: '#212121',
    gray100: '#545454',
    gray200: '#969696',
    gray300: '#F1F1F1',
    gray400: '#FFFFFF'
}

export const lightBlue = {
    blue100: '#3AA0C6'
}

export const darkBlue = {
    blue100: '#1A1A2E'
}