import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    justifyContent: "center",
    width: "90vw",
    height: "40vh",
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
    fontSize: 5,
    color: "black",
    marginTop: 5,
  },
  precoPrato: {
    color: "#65A700",
    marginTop: 5,
    fontSize: 20,
  },
  subInfo1: {
    fontSize: 18,
    flexDirection: "row",
    color: "#FFFFFF",
    marginLeft:"8px",
    marginBottom: 15, 
    marginTop: 5
  },
  nomePrato: {
    marginBottom: 3,
    fontSize: 20,
    margin: 8,
    fontWeight: "bold"
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
  },
  infosPrato1: {
    margin: 10,
    fontSize: 15
  },
  desc: {
    fontSize: 18, 
    margin: 10,
    fontWeight: "bold"
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default styles;