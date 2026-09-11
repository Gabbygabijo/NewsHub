import React from 'react';
import { NativeTabs, Icon, Label, VectorIcon } from 'expo-router/unstable-native-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useUser } from '@/context/user-contex';
import { Slot } from 'expo-router';

export default function TabLayout() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return null;
  }

  // Only authenticated users should have access to the tabBar
  if (!user) {
    return <Slot />;
  }

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
