import {Alert,Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native'
import {useState} from 'react'
import {styles} from './style'
import {Participant} from '../components/Participantes'


export function Home(){

const [participantes, setParticipantes] = useState<string[]>([])
const [participanteName, setParticipanteName] = useState('')

  


function handleParticipantAdd(){
  
  console.log(participantes)
  setParticipantes(prevState => [...prevState, participanteName])
  setParticipanteName('')


}
function handleParticipantRemove(name: string){
  Alert.alert("Remover", `Remover o participante ${name}?`,[
    {
      text: 'Sim',
      onPress: () => setParticipantes(prevState => prevState.filter(item => item !== name))
    },
    {
      text: 'Não',
      style: 'cancel'
    },
  ])
}


  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder = 'nome do participante'
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipanteName}
          value={participanteName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
          
      {participantes.length != 0 && <Text style={styles.TitleList}>Participantes</Text> }
      <FlatList

        data={participantes}
        keyExtractor={item=>item}
        ListEmptyComponent={()=>(
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
        renderItem={({item})=>(
          <Participant
            key={item}
            name={item}
            onRemove={()=> handleParticipantRemove(item)}
          
          />
        )}
        showsVerticalScrollIndicator={false}
        
        
      />
      
      
      
      
      
      
      
    
    
    
    
      
     
      
      
    </View>
  )
}