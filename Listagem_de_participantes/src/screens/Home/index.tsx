import {Alert,Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import {useState} from 'react'
import {styles} from './style'
import {Participant} from '../components/Participantes'


export function Home(){

const [participantes, Setparticipantes] = useState<string[]>([])
const [participanteName, setParticipanteName] = useState('')

  


function handleParticipantAdd(){
  
  console.log(participantes)
  Setparticipantes(prevState => [...prevState, participanteName])
  setParticipanteName('')


}
function handleParticipantRemove(name: string){
  Alert.alert("Remover", `Remover o participante ${name}?`,[
    {
      text: 'Sim',
      onPress: () => Alert.alert("Deletado")
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
      <ScrollView showsVerticalScrollIndicator={false}>
         {
            participantes.map(participante => (
              <Participant key={participante} name={participante} onRemove={()=> handleParticipantRemove(participante)}/>
            ))
         }
      </ScrollView>
     
     
      
      
    </View>
  )
}