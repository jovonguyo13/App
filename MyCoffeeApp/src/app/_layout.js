import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#4A3B32' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Welcome' }} />
      <Stack.Screen name="catalog" options={{ title: 'Coffee Menu' }} />
      <Stack.Screen name="details" options={{ title: 'Item Details' }} />
    </Stack>
  );
}