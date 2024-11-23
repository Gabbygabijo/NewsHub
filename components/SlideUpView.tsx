import { Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useThemeColor, ViewProps } from './Themed';
import { height } from '@/constants/styles';

export default function SlideUpView({ style, lightColor, darkColor, ...otherProps }: ViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const slideAnim = useRef(new Animated.Value(height)).current;
  useEffect(() => {
    Animated.timing(
      slideAnim,
      {
        toValue: 0,
        duration: 300, // 0.3 second
        useNativeDriver: true,
      }
    ).start();
  }, [slideAnim]);
  return (
    <Animated.View style={[{ backgroundColor, transform: [{ translateY: slideAnim }] }, style]} {...otherProps} />
  )
}

