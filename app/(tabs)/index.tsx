import { View } from '@/components/Themed';
import { useUser } from '@/context/user-contex';
import HomeScreen from '../(screens)/HomeScreen';
import Register from '../(screens)/Register';

export default function TabOneScreen() {
  const { user } = useUser();

  return (
    <View style={{ flex: 1 }}>
      {user ? <HomeScreen /> : <Register />}
    </View>
  );
}
