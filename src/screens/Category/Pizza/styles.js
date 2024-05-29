import { StyleSheet } from "react-native"

const styles = StyleSheet.create({


  container: {
    backgroundColor: "#712525",
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
    margin: 20,
  },

  titulo: {
    fontSize: "16px",
    fontWeight: 'bold',
    width: '90%',
  },

  card: {
    display: 'flex',
    flexDirection: 'row',
    width: '90vw',
    height: '15vh',
    marginTop: 100,
    marginLeft: 25,
    backgroundColor: '#fff',
    borderRadius: 20,
  }

})

export default styles;