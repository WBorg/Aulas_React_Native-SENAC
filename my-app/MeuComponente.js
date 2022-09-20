import React from 'react'
import {View, Text, StyleSheet  } from 'react-native'


export default function MeuComponente(){

return(
  
      <View style={styles.card}>
          <Text style={styles.cardTitle}>React Native</Text>
          <Text style={styles.cardSubTitle}>Criando aplicações oara Android e IOS</Text>
      </View>
  
  
)

}

const styles = StyleSheet.create({
  card:{
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 3,
    marginBottom: 12
  },
  cardTitle:{
    fontSize: 18,
    fontWeight: 'bold'
  },
  cardSubTitle:{
    color: '#333',
    fontSize: 14
  }

    
    
  
});

