import React from 'react';
import { NativeTabs, Icon, Label, VectorIcon } from 'expo-router/unstable-native-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  return (
    <NativeTabs>
      {/* Home Tab */}
      <NativeTabs.Trigger name="index">
        <Icon
          sf="house.fill"
          androidSrc={<VectorIcon family={MaterialCommunityIcons} name="home" />}
        />
        <Label>Home</Label>
      </NativeTabs.Trigger>

      {/* About Tab */}
      <NativeTabs.Trigger name="about">
        <Icon
          sf="person.fill"
          androidSrc={<VectorIcon family={MaterialCommunityIcons} name="account" />}
        />
        <Label>About</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
