import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, useColorScheme } from 'react-native'
import { Text, View } from './Themed'
import { darkGray, lightGray } from '@/constants/styles'
import { storyTypes } from '@/types/interface'
import { apiEachStory } from '@/apis/newsfetch'

export default function StoryCard({ id }: {
  id?: number
}) {
  const [obj, setObj] = useState<undefined | storyTypes>()
  const getFeeds = async () => {
    let data;
    data = await apiEachStory(id);
    setObj(data.data)
    // console.log(data.data)
  }
  useEffect(()=>{
    getFeeds()
  }, [])
  // console.log(obj?.descendants)
  const colorScheme = useColorScheme()
  const styles = StyleSheet.create({
    imgBackground: {
      height: 100,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    containerStyle: {
      borderRadius: 12,
      overflow: 'hidden'
    },
    topRightTextText: {
      textAlign: 'center',
      marginVertical: 'auto',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 15
    },
    topRightText: {
      backgroundColor: colorScheme === 'dark' ? darkGray.gray400 : lightGray.gray400,
      width: 100,
      height: 29,
      margin: 10,
      borderRadius: 50,
    },
    lowerCobtainer: {
      backgroundColor: colorScheme === 'dark' ? darkGray.gray300 : lightGray.gray300,
      gap: 20
    }
  })
  return (
    <View style={[styles.containerStyle]}>
      <ImageBackground style={[styles.imgBackground]} source={require('@/assets/images/main-image.png')}>
        <View style={styles.topRightText}>
          <Text style={styles.topRightTextText}>Live</Text>
        </View>
      </ImageBackground>
      <View>
        <Text>{obj?.title}</Text>
      </View>
    </View>
  )
}
