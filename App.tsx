import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to React Native Web!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    // Use percentage-based width for responsiveness
    width: '100%',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    // Adjust font size based on screen size
    ...(Platform.OS === 'web' && {
      '@media (min-width: 600px)': {
        fontSize: 24,
      }
    }),
  },
});

export default App; 