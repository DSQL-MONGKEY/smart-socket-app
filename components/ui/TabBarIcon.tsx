import { cloneElement, ReactElement } from "react";
import { Text, View } from "react-native";

type TabBarIconProps = {
   icon: ReactElement;
   label: string;
   focused: boolean;
};

export function TabBarIcon({ icon, label, focused }: TabBarIconProps) {
   const iconColor = focused ? '#f97316' : '#9ca3af';
   return (
      <View className="items-center justify-center">
         <View className="mb-1">{cloneElement(icon, { color: iconColor } as any)}</View>
         {focused && (
         <Text className="text-xs text-black dark:text-white font-semibold">
            {label}
         </Text>
         )}
      </View>
   );
}
