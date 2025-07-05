import { BadgeDollarSign, Unplug, Zap } from 'lucide-react-native';
import { Text, View } from "react-native";

export default function StatCard() {
   return (
      <>
         {/* Left Side */}
         <View className='flex-1 bg-slate-100 dark:bg-zinc-800 p-4 rounded-xl shadow'>
            <Text className='text-gray-500 dark:text-gray-400 text-md'>
               Cost KW/h
            </Text>
            <View className='flex-row items-center gap-1'>
               <BadgeDollarSign size={15} color={"#999"} />
               <Text className='text-sm text-gray-500 dark:text-gray-400'>
                  Currently energy cost
               </Text>
            </View>
            <Text className='text-2xl font-semibold mt-5 text-gray-700 dark:text-gray-300'>
               Rp.12,500
            </Text>
         </View>

         {/* Right Side */}
         <View className='justify-between gap-2'>
            <View className='w-48 bg-slate-100 dark:bg-zinc-800 p-4 rounded-xl shadow'>
               <Text className='text-sm text-gray-500 dark:text-gray-400'>
                  Power Consumption
               </Text>
               <View className='flex-row items-center gap-1 mt-1'>
                  <Zap size={15} color={"#999"} />
                  <Text className='text-sm text-gray-500 dark:text-gray-400'>
                  Voltage
                  </Text>
               </View>
               <Text className='text-2xl font-semibold mt-2 text-gray-700 dark:text-gray-300'>
                  0.00 V
               </Text>
            </View>
            <View className='w-48 bg-slate-100 dark:bg-zinc-800 p-4 rounded-xl shadow'>
               <Text className='text-sm text-gray-500 dark:text-gray-400'>
                  Current AC/DC
               </Text>
               <View className='flex-row items-center gap-1 mt-1'>
                  <Unplug size={15} color={"#999"} />
                  <Text className='text-sm text-gray-500 dark:text-gray-400'>
                  Amphere
                  </Text>
               </View>
               <Text className='text-2xl font-semibold mt-2 text-gray-700 dark:text-gray-300'>
                  0.00
               </Text>
            </View>
         </View>
      </>
   )
}