import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#FFFFFF"
  },
  
  
    cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "90vw",
    height: "40vh",
    marginTop: 100,
    marginBottom: 30,
    marginLeft: 20,
    
  },
  imgTopo: {
    width: "100vw",
    height: "25vh",
    borderRadius: "10px",
  },
  imagemCard: {
    width: "33vw",
    height: "17vh",
    borderRadius: 10,
    borderRadius: '0px 0px 81px 0px',
    border: '4px solid #ffda87'
  },
  cardapio: {
    width: "100vw",
    height: "15vh",
    marginBottom: 10,
    backgroundColor: "#D96704",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  restaurante: {
    fontSize: 35,
    marginTop: 20,
    color: "red",
    marginLeft: 10,
  },
  infosPrato: {
    fontSize: 25,
    color: "black",
    marginTop: 5,
  },
  subtitulo: {
    fontSize: 15,
    marginLeft: 10,
    color: "#FFFFFF",
  },
  preco: {
    color: "#65A700",
    marginTop: 5,
    fontSize: 20,
  },
  subInfo1: {
    fontSize: "20px",
    flexDirection: "row",
    color: "#FFFFFF",
    marginLeft:"8px"

  },
  nomePrato:{
    marginBottom: 3,
    fontSize: 20,
    color: "red"
  },
  cards: {
    flexDirection:"row",
    display:"flex",
  }
});

export default styles;
