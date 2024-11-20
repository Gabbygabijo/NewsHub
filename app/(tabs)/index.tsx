import { Image, SafeAreaView, ScrollView, StyleSheet, useColorScheme } from 'react-native';
import { Text, View } from '@/components/Themed';
import { darkGray, height, mainStyles } from '@/constants/styles';
import AuthLayout from '../layouts/AuthLayout';


export default function TabOneScreen() {
  const colorScheme = useColorScheme()

  const styles = StyleSheet.create({
    container: {
      height: height
    },

  });
  return (
    <AuthLayout>
      <ScrollView stickyHeaderHiddenOnScroll stickyHeaderIndices={[0]} style={styles.container}>
        <View>
          <Text style={mainStyles.topText}>Register Now</Text>
        </View>
        <View>
          <Text>Welcome</Text>
        </View>
      </ScrollView>
    </AuthLayout>
  );
}
