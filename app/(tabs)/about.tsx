import { Image, ImageBackground, StyleSheet, useColorScheme } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import HomeLayout from '../layouts/HomeLayout';
import { darkGray, height, lightGray, mainStyles, width } from '@/constants/styles';

export default function AboutScreen() {
  const colorScheme = useColorScheme()

  const styles = StyleSheet.create({
    container: {
      height: height
    },
    topBg: {
      height: 118,
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colorScheme === 'dark' ? darkGray.gray300 : lightGray.gray300
    },
    largeProfileImg: {
      width: 80,
      height: 80,
      borderRadius: 50,
      marginTop: -20,
      borderWidth: 5,
      borderColor: colorScheme === 'dark' ? darkGray.gray400 : lightGray.gray400
    },
  });
  return (
    <HomeLayout>
      <View style={styles.container}>
        <ImageBackground source={require('@/assets/images/backgroundCode.png')} style={[styles.topBg]}>
          <Text style={[mainStyles.largeText, {color: lightGray.gray300}]}>Mobile Developer</Text>
        </ImageBackground>
        <View style={mainStyles.container}>
          <View>
            <Image source={require('@/assets/images/my-image.jpg')} style={styles.largeProfileImg} />
          </View>
          <View style={{marginVertical: 10, gap: 5}}>
            <Text style={mainStyles.semiHeaderText500}>Fasedemi Gabriel Ayomide</Text>
            <Text style={mainStyles.regularText400}>gabrielfashedemi@gmail.com</Text>
          </View>
        </View>
      </View>
    </HomeLayout>
  );
}

