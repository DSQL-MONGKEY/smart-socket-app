// components/ui/TabButton.tsx
import { useColorScheme } from '@/hooks/useColorScheme';
import React, { cloneElement, ReactElement, useEffect } from 'react';
import { AccessibilityState, GestureResponderEvent, Pressable, PressableProps, Text } from 'react-native';
import Animated, {
   Easing,
   useAnimatedStyle,
   useSharedValue,
   withTiming,
} from 'react-native-reanimated';

type Props = PressableProps & {
   icon: ReactElement;
   label: string;
   onPress?: (event: GestureResponderEvent) => void;
   onLongPress?: (event: GestureResponderEvent) => void | null;
   accessibilityState?: AccessibilityState;
};

export default function TabButton({ icon, label, onPress, onLongPress, accessibilityState }: Props) {
   const theme = useColorScheme();
   const focused = accessibilityState?.selected ?? false;

   const scale = useSharedValue(1);
   const width = useSharedValue(48); // default pill size
   const bgOpacity = useSharedValue(0);

   useEffect(() => {
      scale.value = withTiming(focused ? 1 : 1, {
         duration: 300,
         easing: Easing.out(Easing.exp),
      });
      width.value = withTiming(focused ? 110 : 48, {
         duration: 300,
         easing: Easing.out(Easing.exp),
      });
      bgOpacity.value = withTiming(focused ? 1 : 0.12, {
         duration: 300,
      });
   }, [focused, bgOpacity, scale, width]);

   const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
      width: width.value,
      backgroundColor: focused
         ? '#f97316' // orange-500
         : theme === 'dark'
         ? '#27272a'
         : 'rgba(255,255,255,0.85)',
      borderRadius: 999,
   }));

   const iconColor = focused ? '#fff' : '#9ca3af'; // white or gray-400
console.log('Focused:', accessibilityState?.selected);

   return (
      <Pressable 
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityState={accessibilityState} 
      className="items-center justify-center mx-1">
         <Animated.View
         style={animatedStyle}
         className="h-12 px-2 flex-row items-center justify-center space-x-2 shadow-md"
         >
         {cloneElement(icon, { color: iconColor, size: 20 } as any)}
         {focused || (
            <Text className="text-white text-sm font-semibold">{label}</Text>
         )}
         </Animated.View>
      </Pressable>
   );
}
