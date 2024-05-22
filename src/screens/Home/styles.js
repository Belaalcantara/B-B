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
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 17,
    marginLeft: 15,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },
  categorias1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    gap: 11,
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
    marginLeft: '5px',
    marginTop: '-20',
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
});

export default styles;