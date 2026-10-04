import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const COFFEE_MENU = [
  { id: '1', name: 'Espresso', price: '$3.00', description: 'A concentrated form of coffee served in small, strong shots.' },
  { id: '2', name: 'Cappuccino', price: '$4.50', description: 'An espresso-based coffee drink prepared with steamed milk foam.' },
  { id: '3', name: 'Caramel Macchiato', price: '$5.00', description: 'Espresso with vanilla-flavored syrup, milk, and caramel drizzle.' },
  { id: '4', name: 'Cold Brew', price: '$4.00', description: 'Coffee brewed with cold water over a 12-hour period.' },
   { id: '5', name: 'Mocha', price: '$5.50', description: 'A chocolate-flavored variant of a cafe latte.' },
  { id: '6', name: 'Flat White', price: '$4.75', description: 'A coffee drink consisting of espresso with microfoam.' },
  { id: '7', name: 'Americano', price: '$3.50', description: 'Espresso diluted with hot water, giving it a similar strength to drip coffee.' },
];

export default function CatalogScreen() {
  const renderItem = ({ item }) => (
        <Link 
      href={{ 
        pathname: '/details', 
        params: { name: item.name, price: item.price, description: item.description } 
      }} 
      asChild
    >
      <TouchableOpacity style={styles.itemContainer}>
        <View>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
        </View>
        <Text style={styles.arrow}>{'>'}</Text>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={COFFEE_MENU}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listPadding}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F0E6' },
  listPadding: { padding: 15 },
  itemContainer: { 
    backgroundColor: '#fff', 
    padding: 20, 
    marginBottom: 15, 
    borderRadius: 10, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  itemPrice: { fontSize: 16, color: '#4A3B32', marginTop: 5 },
  arrow: { fontSize: 20, color: '#ccc', fontWeight: 'bold' }
});

