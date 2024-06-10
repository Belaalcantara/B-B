import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFECEC",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    justifyContent: "center",
    width: "90vw",
    height: "37vh",
    marginTop: 34,
    marginBottom: 30,
  },
  imagemCard: {
    width: "35vw",
    height: "15vh",
    borderRadius: 20,
    marginTop: 6,
  },
  nomePrato: {
    marginTop: 30,
    fontSize: 22,
    marginLeft: 13,
  },
  precoPrato: {
    color: "#65A700",
    marginTop: 5,
    marginLeft: 10,
    fontSize: 25,
  },
  infos: {
    flexDirection: "row",
    display: "flex",
    marginTop: 10,
  },
  infosPrato: {
    marginLeft: 10,
  },
  desc: {
    fontSize: 16,
    margin: 10,
    fontWeight: "bold",
  },
});

export default styles;
