import { Activity, BadgeDollarSign, Unplug, Zap } from 'lucide-react-native';
import { Text, View } from "react-native";

export interface StatCardProps {
   arus: number;
   biaya: number;
   daya: number;
   tegangan: number;
}

export default function StatCard({ arus, biaya, daya, tegangan }: StatCardProps) {
   return (
      <>
         <View className='flex-row gap-2'>
            {/* Left Side */}
            <View className='flex-1 bg-slate-100 dark:bg-zinc-800 p-4 rounded-xl shadow'>
               <Text className='text-gray-500 dark:text-gray-400 text-md'>
                  Watt
               </Text>
               <View className='flex-row items-center gap-1'>
                  <Activity size={15} color={"#999"} />
                  <Text className='text-sm text-gray-500 dark:text-gray-400'>
                     Currently power in use
                  </Text>
               </View>
               <Text className='text-2xl font-semibold mt-5 text-gray-700 dark:text-gray-300'>
                  {daya} Watt
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
                     {tegangan} V
                  </Text>
               </View>
               <View className='w-48 bg-slate-100 dark:bg-zinc-800 p-4 rounded-xl shadow'>
                  <Text className='text-sm text-gray-500 dark:text-gray-400'>
                     Current in use
                  </Text>
                  <View className='flex-row items-center gap-1 mt-1'>
                     <Unplug size={15} color={"#999"} />
                     <Text className='text-sm text-gray-500 dark:text-gray-400'>
                     Amphere
                     </Text>
                  </View>
                  <Text className='text-2xl font-semibold mt-2 text-gray-700 dark:text-gray-300'>
                     {arus} A
                  </Text>
               </View>
            </View>
         </View>

         {/* bottom stat */}
         <View className='flex-1 bg-slate-100 dark:bg-zinc-800 p-4 rounded-xl shadow'>
            <Text className='text-gray-500 dark:text-gray-400 text-md'>
               Cost
            </Text>
            <View className='flex-row items-center gap-1'>
               <BadgeDollarSign size={15} color={"#999"} />
               <Text className='text-sm text-gray-500 dark:text-gray-400'>
                  Cost of energy consumed
               </Text>
            </View>
            <Text className='text-2xl font-semibold mt-5 text-gray-700 dark:text-gray-300'>
               Rp. {biaya}
            </Text>
         </View>
      </>
   )
}