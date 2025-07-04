import { useThemeColor } from "@/hooks/useThemeColor";
import { SafeAreaView, ScrollView, ScrollViewProps, StyleProp, ViewStyle } from "react-native";

type ScrollScreenProps = ScrollViewProps & {
  lightColor?: string;
  darkColor?: string;
  className?: string;
  style?: StyleProp<ViewStyle>;
};

export default function ScrollScreen({ 
   children, 
   style, 
   lightColor, 
   darkColor,
   className = "",
   ...props }: ScrollScreenProps) {
   const backgroundColor = useThemeColor({light: lightColor, dark: darkColor}, 'background');
   
   return (
      <SafeAreaView style={{ flex: 1, backgroundColor }}>
         <ScrollView 
            style={[{ backgroundColor }, style]}
            contentContainerStyle={{ paddingBottom: 40 , paddingTop: 32 }}
            showsVerticalScrollIndicator={false}
            {...props}
            className={`flex-1 ${className}`}
         >
            {children}
         </ScrollView>
      </SafeAreaView>
   )
}