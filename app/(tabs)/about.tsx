import { Image, ImageBackground, StyleSheet, useColorScheme } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import HomeLayout from '../layouts/HomeLayout';
import { darkGray, height, lightGray, mainStyles, width } from '@/constants/styles';
import { ExternalLink } from '@/components/ExternalLink';
import { Feather, Ionicons, SimpleLineIcons } from '@expo/vector-icons';

export default function AboutScreen() {
  const colorScheme = useColorScheme()

  const styles = StyleSheet.create({
    container: {
      // height: height
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
          <Text style={[mainStyles.largeText, { color: lightGray.gray300 }]}>Mobile Developer</Text>
        </ImageBackground>
        <View style={mainStyles.container}>
          <View>
            <Image source={require('@/assets/images/my-image.jpg')} style={styles.largeProfileImg} />
          </View>
          <View style={{ marginVertical: 10, gap: 5 }}>
            <Text style={mainStyles.semiHeaderText500}>Fasedemi Gabriel Ayomide</Text>
            <ExternalLink href='http://gabrielfashedemi@gmail.com'>
              <Text style={[mainStyles.regularText400, { color: colorScheme === 'dark' ? darkGray.gray100 : lightGray.gray100 }]}>gabrielfashedemi@gmail.com</Text>
            </ExternalLink>
          </View>
          <View>
            <Text style={mainStyles.semiRegularText}>{'I am a Nigerian, this is my bio'}</Text>
            <View style={{ flexDirection: 'row', gap: 15, marginTop: 12 }}>
              <View style={{ flexDirection: 'row', gap: 5 }}>
                <SimpleLineIcons name="phone" size={13} color={colorScheme === 'dark' ? darkGray.gray100 : lightGray.gray100} style={{ marginVertical: 'auto' }} />
                <Text style={[mainStyles.regularText400, { color: colorScheme === 'dark' ? darkGray.gray100 : lightGray.gray100 }]}>{'+2349162677129'}</Text>
              </View>
              <View style={{ flexDirection: 'row', gap: 5 }}>
                <Feather name="calendar" size={13} color={colorScheme === 'dark' ? darkGray.gray100 : lightGray.gray100} style={{ marginVertical: 'auto' }} />
                <Text style={[mainStyles.regularText400, { color: colorScheme === 'dark' ? darkGray.gray100 : lightGray.gray100 }]}>{'Born March 28, 2000'}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', gap: 15, marginTop: 12 }}>
              {/* Location and Gender */}
              <View style={{ flexDirection: 'row', gap: 5 }}>
                <Ionicons name="location-outline" size={13} color={colorScheme === 'dark' ? darkGray.gray100 : lightGray.gray100} style={{ marginVertical: 'auto' }} />
                <Text style={[mainStyles.regularText400, { color: colorScheme === 'dark' ? darkGray.gray100 : lightGray.gray100 }]}>{'Lagos, Nigeria'}</Text>
              </View>
              <View style={{ flexDirection: 'row', gap: 5 }}>
                <Ionicons name="male" size={13} color={colorScheme === 'dark' ? darkGray.gray100 : lightGray.gray100} style={{ marginVertical: 'auto' }} />
                <Text style={[mainStyles.regularText400, { color: colorScheme === 'dark' ? darkGray.gray100 : lightGray.gray100 }]}>{'Male'}</Text>
              </View>
              <View style={{ flexDirection: 'row', gap: 5 }}>
                {/* <Ionicons name="person-add-outline" size={13} color={colorScheme === 'dark' ? darkGray.gray100 : lightGray.gray100} style={{ marginVertical: 'auto' }} /> */}
                {/* <Text style={[mainStyles.regularText400, { color: colorScheme === 'dark' ? darkGray.gray100 : lightGray.gray100 }]}>Joined {'June 2020'}</Text> */}
              </View>
            </View>

          </View>
          <View style={{marginVertical: 15, gap: 15}}>
            <Text style={mainStyles.semiHeaderText500}>Why you need me</Text>
            <View style={{gap: 10}}>
              <Text style={mainStyles.sideText}>Enhancing Organizational Growth with My React Native Expertise</Text>
              <Text style={[mainStyles.regularText, {color: colorScheme === 'dark' ? darkGray.gray100 : lightGray.gray100}]}>With three years of hands-on experience in the tech industry, specifically in developing mobile applications using React Native, I am well-equipped to drive substantial improvements within an organization. My journey through various projects has equipped me with a deep understanding of mobile application development, user experience design, and performance optimization. Here’s how I can contribute to the growth and success of your organization</Text>
            </View>
            <View style={{gap: 10}}>
              <Text style={mainStyles.sideText}>Expertise in Cross-Platform Development</Text>
              <Text style={[mainStyles.regularText, {color: colorScheme === 'dark' ? darkGray.gray100 : lightGray.gray100}]}>React Native’s ability to create cross-platform applications with a single codebase has been at the core of my development strategy. I have successfully developed and deployed multiple high-performing apps for both iOS and Android platforms, ensuring a seamless and consistent user experience across devices. This expertise can significantly reduce development time and costs, enabling faster time-to-market for new features and applications.</Text>
            </View>
            <View style={{gap: 10}}>
              <Text style={mainStyles.sideText}>Focus on User-Centric Design</Text>
              <Text style={[mainStyles.regularText, {color: colorScheme === 'dark' ? darkGray.gray100 : lightGray.gray100}]}>Understanding user needs and preferences is crucial for the success of any application. Throughout my career, I have prioritized user-centric design, conducting thorough research and usability testing to create intuitive and engaging interfaces. By leveraging my skills in user experience (UX) design, I can enhance the overall satisfaction and retention rates of your application's users.</Text>
            </View>
            <View style={{gap: 10}}>
              <Text style={mainStyles.sideText}>Performance Optimization</Text>
              <Text style={[mainStyles.regularText, {color: colorScheme === 'dark' ? darkGray.gray100 : lightGray.gray100}]}>Performance is a key factor in user satisfaction. I have extensive experience in optimizing React Native applications to ensure smooth and responsive performance. From code-splitting and lazy loading to reducing memory usage and improving load times, I have implemented various optimization techniques that enhance the application's efficiency and user experience.</Text>
            </View>
            <View style={{gap: 10}}>
              <Text style={mainStyles.sideText}>Collaboration and Agile Practices</Text>
              <Text style={[mainStyles.regularText, {color: colorScheme === 'dark' ? darkGray.gray100 : lightGray.gray100}]}>Working in diverse teams has honed my collaboration and communication skills. I am well-versed in Agile methodologies, facilitating effective teamwork and iterative development. By promoting a culture of collaboration and continuous improvement, I can help foster a dynamic and productive environment, driving innovation and achieving organizational goals.</Text>
            </View><View style={{gap: 10}}>
              <Text style={mainStyles.sideText}>Adaptability and Continuous Learning</Text>
              <Text style={[mainStyles.regularText, {color: colorScheme === 'dark' ? darkGray.gray100 : lightGray.gray100}]}>The tech world is ever-evolving, and staying updated with the latest trends and technologies is essential. I am committed to continuous learning and professional development, ensuring that I bring the most current and effective solutions to the table. My proactive approach to learning and adaptability allows me to tackle new challenges and technologies with ease.</Text>
            </View><View style={{gap: 10}}>
              <Text style={mainStyles.sideText}>Real-World Impact</Text>
              <Text style={[mainStyles.regularText, {color: colorScheme === 'dark' ? darkGray.gray100 : lightGray.gray100}]}>In my previous roles, I have successfully led the development of applications that have streamlined operations, improved customer engagement, and generated significant revenue growth. I bring this real-world impact and a proven track record of success to your organization, ready to apply my skills and knowledge to drive measurable improvements.</Text>
            </View>
          </View>
          <View style={{ marginVertical: 20 }}>
            <ExternalLink href='https://github.com/Gabbygabijo/NewsHub' style={{ paddingVertical: 10 }}>
              <Text style={[mainStyles.semiHeaderText500, {textDecorationLine: 'underline'}]}>Here is a link to this app source code</Text>
            </ExternalLink>
            <ExternalLink href='https://www.linkedin.com/in/gabriel-fashedemi-1195a2258/' style={{ paddingVertical: 10 }}>
              <Text style={[mainStyles.semiHeaderText500, {textDecorationLine: 'underline'}]}>LinkedIn profile</Text>
            </ExternalLink>
            <ExternalLink href='https://drive.google.com/file/d/1RaM3XmtxWdYLChPH9qmAWwwPsc88xxOy/view?usp=sharing' style={{ paddingVertical: 10 }}>
              <Text style={[mainStyles.semiHeaderText500, {textDecorationLine: 'underline'}]}>My resume</Text>
            </ExternalLink>
          </View>
        </View>
      </View>
    </HomeLayout>
  );
}

