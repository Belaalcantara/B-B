import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#fff',
      

    },

    formsContainer: {
        marginBottom: 20
    },

    image: {
        flex: 1,
        width: "100vw",
        height: "105vh"
    },

    wrapper: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',

    },

    inputField: {
        marginTop: 10,
        width: "88%",
        height: 70,
        flexDirection: 'row',
        marginLeft: 45,
        color: '#fff',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 12,
        borderBottomColor: "#fff",
        borderBottomWidth: 2,
        width: "63vw",
        justifyContent: "center",
        alignItems: "center",

    },
    inputIcon: {
        marginRight: 20,
    },
    registerBtn: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },

    registerBtnText: {
        color: '#fff',
        textTransform: 'uppercase',
        flexDirection: 'row',
        marginLeft: 90,
    },


    forms: {
        marginLeft:9 ,
        marginBottom: 30,
        marginTop:20,
        width: 380,
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
        border: "3px outset #ccb4d9",
    borderRadius:"10px"

    },
    texto2: {
        marginTop: 40,
        fontSize: 15,
        marginLeft: 25,

    },
    texto1: {
        marginTop: 20,
        marginLeft: 25,
        fontSize: 16,
        marginBottom: 10,
        textAlign: "center"
    },

    textoo1: {
        fontSize: 20,
        color: "#B499F0",
        marginTop: 7
    },
    textoo2: {

        marginTop: 7
    },
    texto3: {

        marginTop: 15,
      
    },

    button: {
        backgroundColor: '#B499F0',
        width: 80,
        height: 30,
        borderRadius: 20,
        marginLeft: 10,
        marginTop: 20,

    },
    
    textButton: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 3.5,
    },
    textButton2: {
       
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 3.5,
        fontSize:15,

    }

});



export default styles;