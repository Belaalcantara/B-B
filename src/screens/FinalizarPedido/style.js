import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  masterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:120
   
  },
  titulo:{
    marginBottom:30,
    color:"#681111",
    fontSize:25
  },

  container: {
    backgroundColor: "#FFFFFF",
    width: '100%',
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 90,
    height: 70,
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 10,
  },
  texto: {
    fontSize: 14,
    marginBottom: 10,
    color: "#333333",
  },
  subContainer: {
    marginBottom: 20,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  entryBtn: {
    backgroundColor: '#681111',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  entryBtnText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subContainerInfos:{
    backgroundColor:"#FFFF",
    borderRadius: 10,
    width:"100%",
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  }
});

export default styles;
