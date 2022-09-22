import {StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    
    backgroundColor: '#131016',
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  name:{
    color: "#FDFCFE",
    flex:1,
    marginLeft: 16
  },
  button:{
    width: 56,
    height: 56,
    backgroundColor: "red",
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    color: "#fff",
    fontSize: 24,
    
  },

})