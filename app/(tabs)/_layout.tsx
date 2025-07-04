import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { navItems } from '@/constants/Data';
import { useColorScheme } from '@/hooks/useColorScheme';

function TabBarIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <View className='flex'>
      {icon}
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          android: {
            position: 'absolute',
            bottom: 20,
            elevation: 0,
            backgroundColor: '#fff',
            borderRadius: 16,
            height: 60,
            tabBarLabelStyle: {
              fontSize: 12,
            },
          },
          default: {},
        }),
      }}

      >
        {navItems.map(({ name, label, icon, isActive }) => (
          <Tabs.Screen
            key={name}
            name={name}
            options={{
              title: label,
              tabBarIcon: () => (
                <TabBarIcon icon={icon} />
              ),
            }}
          />
        ))}
    </Tabs>
  );
}
