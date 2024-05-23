import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    background: {
        height: '100vh',
        width: '100vw',
        flex: 1
    },

    form: {
        backgroundColor:'white', 
        display:'flex',
        alignItems:'center',
        padding:15,
        borderRadius:8
    },

    label: {

    },

    entryBtn: {
        backgroundColor: 'black',
        padding: 5,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },

    nav: {
        margin:5
    }
});

export default styles;