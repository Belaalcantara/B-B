import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#681111",
        width: '100vw',
        height: '100vh',
    },
    title: {
        fontSize: "25px",
    fontWeight: 'bold',
    color: 'white'
    },

    item: {
        width: '90vw',
        height: '18vh',
        marginTop: 100,
        marginLeft: 8,
        backgroundColor: '#fff',
        borderRadius: 20,

    },
    checkoutButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    checkoutText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    texto: {
        marginTop:-50,
        marginLeft: 150,
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

  textbnt: {
    alignItems: 'center',
    justifyContent:'center',
    color: 'red'
  }

    
});

export default styles;
