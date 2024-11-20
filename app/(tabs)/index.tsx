import { Image, SafeAreaView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { height } from '@/constants/styles';


export default function TabOneScreen() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View>
        <Image style={styles.imgStyle} source={require('@/assets/images/transparent-logo.png')} />
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   height: height
  },
  imgStyle: {
    height: 50,
    width: '30%'
  }
});
