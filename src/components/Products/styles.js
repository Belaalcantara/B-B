import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#EFECEC"
  },
  
  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    justifyContent: "center",
    width: "90vw",
    height: "30vh",
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 20,
    
  },
  imgTopo: {
    width: "100vw",
    height: "20vh",
  },
  imagemCard: {
    width: "33vw",
    height: "17vh",
    borderRadius: 10,
    margin: 5
  },
  restaurante: {
    fontSize: 30,
    marginTop: 20,
    color: "white",
    marginLeft: 10,
  },
  infosPrato: {
    fontSize: 20,
    color: "black",
    marginTop: 5,
  },
  precoPrato: {
    color: "#65A700",
    marginTop: 20,
    fontSize: 25,
  },
  subInfo1: {
    fontSize: 18,
    flexDirection: "row",
    color: "black",
    marginLeft:"8px",
    marginBottom: 10, 
    marginTop: 5

  },
  nomePrato:{
    marginBottom: 3,
    fontSize: 35,
    marginLeft: 10,
  },
  cards: {
    flexDirection:"row",
    display:"flex",
  },
  margem: {
    borderRadius: 30, 
    backgroundColor: "#681111",
  }, 
  
  infos: {
    maxWidth: '50%',
    color:"pink"
  },
  infosPrato1: {
    margin: 10,
    fontSize: 15,
    color:"pink"
  },
  desc: {
    fontSize: 18, 
    margin: 10,
    fontWeight: "bold"
  }
});

export default styles;
