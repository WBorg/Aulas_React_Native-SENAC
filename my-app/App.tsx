import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import MeuComponente from './MeuComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
        <Text style={styles.title}>Meu App</Text>
      <ScrollView>
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
      </ScrollView>
      




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
  title:{
    color: '#fff',
    fontSize: 24,
    marginBottom: 24,
    paddingTop: 24
    
  }

    
    
  
});
