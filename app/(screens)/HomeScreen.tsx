import { Text, View } from '@/components/Themed';
import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import HomeLayout from '../layouts/HomeLayout';
import { apiGetData } from '@/apis/newsfetch';
import { darkGray, lightBlue, lightGray, mainStyles } from '@/constants/styles';
import StoryCard from '@/components/StoryCard';

export default function HomeScreen() {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [currentPage, setCurrentPage] = useState(1);
  const [livedata, setLivedata] = useState<number[]>([]);

  const getData = useCallback(async (number: number) => {
    try {
      const data = await apiGetData();
      const typedData = data as { data: number[] };
      setLivedata(typedData.data.slice((number - 1) * 5, number * 5)); // Fetch new data based on page number
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    getData(currentPage);
  }, [getData, currentPage]);

  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    paginationText: {
      color: colorScheme === 'dark' ? darkGray.gray200 : lightGray.gray200,
      fontSize: 16,
      marginVertical: 'auto',
      width: '10%',
      height: 30,
      textAlign: 'center',
    },
    activeColor: {
      color: lightBlue.blue100,
      fontSize: 28,
    },
    paginationContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

  return (
    <HomeLayout>
      <View style={[mainStyles.container, { marginVertical: 15, gap: 25 }]}>
        <View style={{ gap: 20 }}>
          <Text style={[mainStyles.semiHeaderText500]}>Top stories and happenings</Text>
          <Text style={[mainStyles.semiRegularText]}>Breathe, relax, and let's dive into the news together. A fascinating journey awaits, stay informed and inspired!</Text>
        </View>
        <View style={{ gap: 20 }}>
          {livedata.length > 0 ? (
            livedata.map((item, i) => (
              <View key={i}>
                <StoryCard id={item} />
              </View>
            ))
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
        <View style={styles.paginationContainer}>
          {pages.map((item, i) => (
            <Text
              onPress={() => {
                setCurrentPage(item);
              }}
              style={item === currentPage ? styles.activeColor : styles.paginationText}
              key={i}
            >
              {item}
            </Text>
          ))}
        </View>
      </View>
    </HomeLayout>
  );
}
