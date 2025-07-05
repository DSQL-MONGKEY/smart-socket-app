import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { cloneElement, ReactElement, ReactNode } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
   FadeIn,
   FadeOut,
   LinearTransition,
} from "react-native-reanimated";


const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

type TabBarIconProps = {
   icon: ReactNode;
   label?: string;
   isFocused: boolean;
};


export function TabBarIcon({ icon, label, isFocused }: TabBarIconProps) {
   const iconColor = isFocused ? '#f9f9f9' : '#9ca3af';
   return (
      <View>
         {cloneElement(icon as ReactElement, { color: iconColor } as any)}
      </View>
   );
}

export const CustomNavBar: React.FC<BottomTabBarProps> = ({
   state,
   descriptors,
   navigation,
}) => {

   return (
      <View style={styles.container} className="bg-slate-200 dark:bg-zinc-800 gap-2">
         {state.routes.map((route, index) => {
         if (["_sitemap", "+not-found"].includes(route.name)) return null;

         const { options } = descriptors[route.key];
         const label =
            options.tabBarLabel !== undefined
               ? options.tabBarLabel
               : options.title !== undefined
               ? options.title
               : route.name;

         const isFocused = state.index === index;
         const icon = options.tabBarIcon?.({ focused: isFocused, color:'', size: 24});

         const onPress = () => {
            const event = navigation.emit({
               type: "tabPress",
               target: route.key,
               canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
               navigation.navigate(route.name, route.params);
            }
         };

         return (
            <AnimatedTouchableOpacity
               layout={LinearTransition.springify().mass(0.5)}
               key={route.key}
               onPress={onPress}
               style={[
               styles.tabItem,
               ]}
               className={` px-3 ${isFocused ? 'bg-orange-500 dark:bg-orange-600 text-white rounded-[100]' : 'bg-transparent dark:bg-gray-700 rounded-full'}`}
            >
               <TabBarIcon icon={icon} isFocused={isFocused} />
               {isFocused && (
               <Animated.Text
                  entering={FadeIn.duration(200)}
                  exiting={FadeOut.duration(200)}
                  style={styles.text}
                  className={`text-white dark:text-slate-100 font-semibold`}
               >
                  {label as string}
               </Animated.Text>
               )}
            </AnimatedTouchableOpacity>
         );
         })}
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      position: "absolute",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "90%",
      alignSelf: "center",
      bottom: 40,
      borderRadius: 40,
      paddingHorizontal: 12,
      paddingVertical: 15,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
   },
   tabItem: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: 40,
   },
   text: {
      marginLeft: 8,
   },
});

