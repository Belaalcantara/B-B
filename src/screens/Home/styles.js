import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#C9D4FF",
    borderRadius: 5,
  },
  blocoperfil: {
    backgroundColor: "#314D06",
    margin: 8,
    marginTop: 10,
    borderRadius: 7,
    padding: 10,
  },
  fotoinfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textocinza: {
    color: '#fff',
    opacity: 0.5,
  },
  textonome: {
    color: '#fff',
    marginTop: 5,
  },
  imageperfil: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  boasvindas: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  recomendadas: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 17,
    marginLeft: 15,
  },
  categorias: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 17,
    marginLeft: 15,
    marginBottom: 10,
  },


  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  categorias1: {
    flex: 'row',
    alignItems: "center",
    marginLeft: 20, 
  },



  blocofome: {
    backgroundColor: "#F8F8F8",
    margin: 8,
    marginTop: 10,
    borderRadius: 7,
    padding: 30,
  },
  carinhas: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carinhaImage: {
    width: 35,
    height: 35,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infosperfil: {
    marginLeft: 5,
    marginTop: -5,
  },
  banner: {
    borderRadius: 10,
    marginLeft: 12,
    marginRight: 13,
    width: 370,
    height: 180,
    margin: 8,
    overflow: 'hidden',
  },
  textoemail: {
    color: '#fff',
    opacity: 0.5,
  },
  lojas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    padding: 10,
  },
  lojadiv: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  lojalogo: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  lojanome: {
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
},
nav: {
  width: '100%',
  height: 'auto'
}
});

export default styles;
