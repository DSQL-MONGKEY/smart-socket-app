
import StatCard, { StatCardProps } from '@/components/features/home/StatCard';
import { ThemedView } from '@/components/ThemedView';
import ScrollScreen from '@/components/ui/layout/ScrollScreen';
import { listenToPath } from '@/hooks/useRealtime';
import { useRouter } from 'expo-router';
import { Bell } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, useColorScheme } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const colorSchema = useColorScheme();

  const [realtimeData, setRealtimeData] = useState<StatCardProps | null>(null);

  useEffect(() => {
    const unsubscribe = listenToPath<StatCardProps>("/sensor", setRealtimeData);
    return () => unsubscribe(); // cleanup listener
  }, []);

  console.log(realtimeData)

  return (
    <ScrollScreen className='px-5'>
      <ThemedView 
        style={styles.container}
        className="flex-row justify-between items-center py-6"
      >
        <ThemedView className='gap-2'>
          <Text className='text-lg font-thin text-gray-500 dark:text-gray-400'>
            Welcome Back!
          </Text>
          <Text className='text-4xl text-gray-700 dark:text-gray-300 font-bold'>
            Mas Eddy
          </Text>
        </ThemedView>

        <TouchableOpacity 
          onPress={() => router.push('/notifications')}
          className='bg-slate-100 dark:bg-zinc-800 p-3 rounded-full items-center text-white justify-center shadow'>
            <Bell 
              size={25} 
              color={colorSchema === 'dark' ? '#F6F6F6' : '#E67514'} />
        </TouchableOpacity>
      </ThemedView>

      <ThemedView className='mt-6 gap-2'>
        <StatCard
          daya={realtimeData?.daya ?? 0}
          arus={realtimeData?.arus ?? 0}
          tegangan={realtimeData?.tegangan ?? 0}
          biaya={realtimeData?.biaya ?? 0}
        />
      </ThemedView>
    </ScrollScreen>
  );
}


const styles = StyleSheet.create({
  container:{
  },
});