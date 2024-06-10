
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({


  container: {
    backgroundColor: "pink",
    width: '100vw',
    height: '100vh',
  },


  img: {
    width: 90,
    height: 90,
    borderRadius: "20px",
    marginTop: "15px",
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
  },

  texto: {
    fontSize: "12px",
    padding: "5px",
    maxWidth: '50%'
  },

  infos: {
   marginTop:15,
   display: 'flex',
   flexDirection: 'row',
  },

  titulo: {
    fontSize: "25px",
    fontWeight: 'bold',

    marginLeft:20,
    marginTop:40

   },

  card: {

    width: '90vw',
    height: '18vh',
    marginTop: 100,
    marginLeft: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
  },

  btn: {
    display: 'flex',
    alignItems: 'center'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },

})

export default styles;