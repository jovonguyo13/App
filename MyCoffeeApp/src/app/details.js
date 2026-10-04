import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router'; 
import { COLORS } from './theme';

export default function DetailsScreen() {
  const { name, price, description } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
        
        <View style={styles.divider} />
        
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <TouchableOpacity 
        style={styles.buttonContainer} 
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>← Go Back to Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: 25 },
  card: { 
    backgroundColor: COLORS.white, 
    padding: 30, 
    borderRadius: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 40
  },
  title: { fontSize: 28, fontWeight: 'bold', color: COLORS.textDark },
  price: { fontSize: 24, color: COLORS.primary, fontWeight: '700', marginTop: 10 },
  divider: { height: 1, backgroundColor: COLORS.border, marginVertical: 25 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.textLight, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 },
  description: { fontSize: 17, lineHeight: 26, color: COLORS.textDark },
  buttonContainer: { backgroundColor: COLORS.primary, paddingVertical: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: COLORS.white, fontSize: 16, fontWeight: 'bold' }
});