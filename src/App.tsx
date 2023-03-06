import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Card from './components/Card';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card title="Eddard Stark" text="Ankara ayazı geliyor..." />
      <Card title="Arif Işık" text="Kaç yıldır burdasın Bob?" />
      <Card title="James Bond" text="My name is Bond, James Bond" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default App;
