// app/_layout.js
import { Stack } from 'expo-router';
import { COLORS } from './theme'; // Import theme

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.white,
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Welcome' }} />
      <Stack.Screen name="catalog" options={{ title: 'Coffee Menu' }} />
      <Stack.Screen name="details" options={{ title: 'Item Details' }} />
    </Stack>
  );
}