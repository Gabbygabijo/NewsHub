import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, useColorScheme } from 'react-native'
import { Text, View } from './Themed'
import { darkGray, lightBlue, lightGray, mainStyles, width } from '@/constants/styles'
import { storyTypes } from '@/types/interface'
import { apiEachStory } from '@/apis/newsfetch'
import { ExternalLink } from './ExternalLink'

export default function StoryCard({ id }: {
  id?: number
}) {
  const [obj, setObj] = useState<undefined | storyTypes>()
  const [loading, setLoading] = useState(false)
  const getFeeds = async () => {
    setLoading(true)
    let data: { data: storyTypes };
    data = await apiEachStory(id) as { data: storyTypes };
    setObj(data.data)
    setLoading(false)

    // console.log(data.data)
  }
  useEffect(() => {
    getFeeds()
  }, [id])
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
      overflow: 'hidden',
      backgroundColor: colorScheme === 'dark' ? darkGray.gray300 : lightGray.gray300,
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
    },
    allView: {
      backgroundColor: colorScheme === 'dark' ? darkGray.gray300 : lightGray.gray300,
    }
  })
  return (
    <View>
      {(obj === undefined || loading) ?
        <View>
          <View style={[styles.containerStyle, { height: 250, flexDirection: 'row', justifyContent: 'flex-end' }]}>
            <View style={[styles.topRightText]} />
          </View>
        </View>
        :
        <View style={[styles.containerStyle]}>
          <ImageBackground style={[styles.imgBackground]} source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg'}}>
            <View style={styles.topRightText}>
              <Text style={styles.topRightTextText}>{obj?.type.toLocaleUpperCase()}</Text>
            </View>
          </ImageBackground>
          <View style={[styles.allView, mainStyles.container, { marginVertical: 15, gap: 10 }]}>
            <Text style={[mainStyles.topText500]}>{obj?.title}</Text>
            {
              obj?.text
              &&
              <Text numberOfLines={3} style={[mainStyles.regularText400]}>
                {obj?.text}
              </Text>
            }
            <ExternalLink href={obj?.url ? obj?.url : 'https://gabijo-portfolio.netlify.app/'}>
              <Text style={[mainStyles.regularText, { color: lightBlue.blue100 }]}>Read more</Text>
            </ExternalLink>
            <Text style={{ color: colorScheme === 'dark' ? darkGray.gray100 : lightGray.gray100 }}>By {obj?.by}</Text>
          </View>
        </View>
      }
    </View>
  )
}
