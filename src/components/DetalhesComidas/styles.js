import { StyleSheet } from "react-native-web"

const style = StyleSheet.create({


  container: {
    backgroundColor: "#681111",
    width: "100vw",
    height: "100vh",
    marginLeft: 40,
    marginTop: 10
  },
  imageHeader: {
    width: "10vw",
    height: "5vh",

  },
  imagemCard : {
    width: "30vw",
    height: "10vh",
    borderRadius:10
  },
  cardapio: {
    width: "100vw",
    height: "15vh",
    marginBottom: 10,
    backgroundColor: "#D96704",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,

  },


  cardCardapio: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "90vw",
    height: "20vh",
    marginTop: 100,
    marginBottom: 30,
    marginLeft: 20,

    

  },

  restaurante: {
    fontSize: 40,
    marginTop: 20,
    color: "#FFFFFF",
    marginLeft: 10

  },
  subtitulo2: {
    fontSize: 25,
    color: "black",
    marginTop:5

  },
  subtitulo: {
    fontSize: 15,
    color: "black",
    marginLeft: 10,
    color: "#FFFFFF",
  },
  preco:{
    color:"#467302",
    marginTop:5,
    fontSize:20
  },
  infos:{
  gap:"9px",
 flexDirection:"row"

  },
  infos2:{
   marginRight:77,
   flexDirection:"column"
  
    },

  
  sobre:{
    marginTop:5,
    marginRight:100,
  }
})
export default style;


