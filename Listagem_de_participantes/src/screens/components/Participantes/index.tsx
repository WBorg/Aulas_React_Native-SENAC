import {Text, View, TouchableOpacity} from 'react-native'
import {styles} from './styles'

type Props ={
  name: String
}

export  function Participantes({name}: Props){
  return(
    <View style={styles.container}>
        <Text style={styles.name}>
          Nome do Participante
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
              -
          </Text>

        </TouchableOpacity>
    </View>
  )
}