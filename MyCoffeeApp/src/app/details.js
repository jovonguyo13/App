import { View, Text, StyleSheet, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router'; 

export default function DetailsScreen() {
  const { name, price, description } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* We add 'as string' to avoid TypeScript errors since useLocalSearchParams can return arrays */}
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
        
        <View style={styles.divider} />
        
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Go Back to Menu" 
          color="#4A3B32"
          onPress={() => router.back()} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F0E6', padding: 20 },
  card: { 
    backgroundColor: '#fff', 
    padding: 25, 
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 30
  },
  title: { fontSize: 26, fontWeight: 'bold', color: '#333' },
  price: { fontSize: 22, color: '#4A3B32', fontWeight: '600', marginTop: 10 },
  divider: { height: 1, backgroundColor: '#E0E0E0', marginVertical: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#555', marginBottom: 10 },
  description: { fontSize: 16, lineHeight: 24, color: '#666' },
  buttonContainer: { borderRadius: 8, overflow: 'hidden' }
});