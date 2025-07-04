
import StatCard from '@/components/features/home/StatCard';
import { ThemedView } from '@/components/ThemedView';
import ScrollScreen from '@/components/ui/layout/ScrollScreen';
import { useRouter } from 'expo-router';
import { Bell } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

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
              Eddy
            </Text>
          </ThemedView>

          <TouchableOpacity 
            onPress={() => router.push('/notifications')}
            className='bg-slate-100 dark:bg-zinc-800 p-3 rounded-full items-center justify-center shadow'>
              <Bell size={25} color={"#000"} />
          </TouchableOpacity>
        </ThemedView>

        <ThemedView className='flex-row mt-6 gap-2'>
          <StatCard />
        </ThemedView>
    </ScrollScreen>
  );
}


const styles = StyleSheet.create({
  container:{
  },
});