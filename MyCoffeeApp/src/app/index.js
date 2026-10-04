import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'; 

export default function HomeScreen() {
  return (
    <View style={styles.container}>
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
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F0E6' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#4A3B32', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#7A6B5D', marginBottom: 30 },
  button: { backgroundColor: '#4A3B32', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 8 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});