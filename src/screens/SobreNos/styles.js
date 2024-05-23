import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#681111"
  },
  minitexto: {
    fontSize: 25,
    color:"white",
    margin: 10
  },
  title1: {
    fontSize: 25,
    color: "#D96704"
  },
  texto: {
    backgroundColor: "white",
    borderRadius: 15,
    margin: 15
  },
  valores: {
    fontSize: 20,
    color: "black",
    margin: 4,
    padding: 8,
    textAlign: "center"
  },
  titulo: {
    fontSize: 24,
    color: "#D96704",
    textAlign: "center",
    margin: 8
  },
  quemsomos: {
    backgroundColor:"white",
    width: 428,
    height: 65
  },
  text: {
    fontSize: 25,
    color: "#D20000",
    textAlign: "center",
    margin: 10
  },

  viewnome: {
    textAlign: "center",
    marginBottom: 10,
    marginLeft: 110
  },
  name: {
    fontSize: 23,
    color: "#D96704"
  },
  icons:{
   flexDirection: "row",
   gap: 5, 
   marginLeft:155 
  }, 
  equipe: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 15,
    width: 380,
  },
  textdesc: {
    textAlign:"center", 
    fontSize: 19, 
    margin: 15
  }
});
export default styles;
