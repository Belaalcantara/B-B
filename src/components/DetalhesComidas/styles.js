import { StyleSheet} from "react-native-web"

const style = StyleSheet.create({
    container:{
     flex: 1,
     backgroundColor: "#681111",
     justifyContent: "center",
     alignItems: "center"
    },

    cardapio:{
        width: "100vw",
        height: "70vh",
        borderRadius: "20px",
        marginBottom:50,
    },


    imagemHeader:{
     width: "100vw",
     height: "50vh",
     borderRadius: "10px",
    },

    imagemCard:{
        width: "55vw",
        height: "30vh",
        borderRadius: "30px",
        marginLeft:20,
        marginTop:"15px"
       },
   
       sobre:{
     fontSize: "18px",
     padding: "5px",
     marginBottom: "15px",
     marginLeft: "4px",
    },
   
     preco:{
       fontSize: "15px",
       padding: "5px",
       marginTop: "10px",
       color: "#8f6277",
       textAlign: "center",
     },

     cardCardapio:{
        backgroundColor:"#fffff",
        alignItems:"center",
        justifyContent:"center",
        width:"90vw",
        height:"70vh",
        marginTop:30,
        marginBottom:30,

     }
   
   })
   export default style;
   
   
