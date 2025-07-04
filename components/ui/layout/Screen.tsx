import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleProp, ViewProps, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenProps = ViewProps & {
   lightColor?: string;
   darkColor?: string;
   clasName?: string;
   style?: StyleProp<ViewStyle>;
}

export default function Screen({ 
   children,
   lightColor,
   darkColor,
   style,
   className = "", 
   ...props }: ScreenProps) {

   const backgroundColor = useThemeColor({
      light: lightColor,
      dark: darkColor
   }, 'background');

   return (
      <SafeAreaView 
         style={[{ backgroundColor }, style]}
         className={`flex-1 ${className}`}
         {...props}
      >
         {children}
      </SafeAreaView>
   );
}
