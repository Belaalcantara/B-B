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
        color: 'white',
      
    },

    item: {
        width: '90vw',
        height: '18vh',
        marginTop: 200,
        marginLeft: 8,
        backgroundColor: '#fff',
        borderRadius: 20,

    },
    checkoutButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginTop: 180,
        marginBottom: 20,
    },
    checkoutText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    texto: {
        marginTop: 30,
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

    texto1: {
        fontSize: "12px",
        padding: "5px",
        maxWidth: '50%'
    },

    infos: {
        display: 'flex',
        flexDirection: 'row',
        color: 'green',
        marginLeft: 90,
        marginTop: 20
    },

    titulo: {
        fontSize: "15px",
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 9,
        marginTop: 20
    },

    card: {

        width: '90vw',
        height: '18vh',
        marginTop: 270,
        marginLeft: 20,
        backgroundColor: "#fff",
        borderRadius: 15,
    },

    container2: {
        backgroundColor: "#681111",
        width: '100vw',
        height: '100vh',
      },
    

});

export default styles;