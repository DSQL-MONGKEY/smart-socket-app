import { CustomNavBar } from '@/components/CustomNavBar';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { navItems } from '@/constants/Data';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  


  return (
    <Tabs
      initialRouteName="index"
      tabBar={(props) => <CustomNavBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          android: {
            position: 'absolute',
            bottom: 20,
            elevation: 0,
            backgroundColor: colorScheme === 'dark' ? '#1C1C1E' : '#ffffff',
            borderRadius: 16,
            height: 60,
          },
          default: {},
        }),
      }}
    >
      {navItems.map(({ name, label, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title: label,
            tabBarIcon: () => icon,
          }}
        />
      ))}
    </Tabs>
  );
}
