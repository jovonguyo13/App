import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'; 
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from './theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="cafe" size={80} color={COLORS.primary} style={{ marginBottom: 20 }} />
      
      <Text style={styles.title}>Daily Brew Coffee</Text>
      <Text style={styles.subtitle}>Your favorite local roastery.</Text>
      
      <Link href="/catalog" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Browse Menu</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.background },
  title: { fontSize: 32, fontWeight: 'bold', color: COLORS.primary, marginBottom: 10 },
  subtitle: { fontSize: 16, color: COLORS.textLight, marginBottom: 40 },
  button: { backgroundColor: COLORS.primary, paddingVertical: 15, paddingHorizontal: 40, borderRadius: 25 },
  buttonText: { color: COLORS.white, fontSize: 18, fontWeight: 'bold' }
});