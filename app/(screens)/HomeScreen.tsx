import { Text, View } from '@/components/Themed'
import React, { useEffect, useState } from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import HomeLayout from '../layouts/HomeLayout'
import { apiGetData } from '@/apis/newsfetch'
import { mainStyles } from '@/constants/styles'
import StoryCard from '@/components/StoryCard'

export default function HomeScreen() {
  const [livedata, setLivedata] = useState<undefined | number[]>()
  const [currentFeed, setCurrentFeed] = useState()
  const getData = async () => {
    let data;
    data = await apiGetData()
    setLivedata(data.data.slice(0, 10))
    // console.log(data)
  }
  useEffect(() => {
    getData()
  }, [])
  // console.log(livedata)
  const colorScheme = useColorScheme()
  const styles = StyleSheet.create({})
  return (
    <HomeLayout>
      <View style={[mainStyles.container, {marginVertical: 15, gap: 25}]}>
        <View style={{gap: 20}}>
          <Text style={[mainStyles.semiHeaderText500]}>Top stories and happenings</Text>
          <Text style={[mainStyles.semiRegularText]}>Breathe, relax, and let's dive into the news together. A fascinating journey awaits, stay informed and inspired!</Text>
        </View>
        <View style={{gap: 20}}>
          {
            livedata?.map((item, i) => (
              <View key={i}>
                <StoryCard id={item} />
              </View>
            ))
          }
        </View>
      </View>
    </HomeLayout>
  )
}
