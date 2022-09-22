import {StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24 
  },
  eventName:{
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
  },
  eventDate:{
    color: "#6B6B6B",
    fontSize: 18
  },
  input:{
    color: '#fff',
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 4,
    fontSize: 14,
    paddingLeft: 16,
    lineHeight: 20,
    flex: 1,
    marginRight: 7
  },
  button:{
    width: 56,
    height: 56,
    backgroundColor: "#31CF67",
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    color: "#fff",
    fontSize: 24,
    
  },
  form:{
    width: '100%',
    flexDirection: 'row',
    marginTop: 34,
    

  }

    
});