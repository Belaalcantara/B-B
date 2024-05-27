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

    title: {
        marginTop: 5,
        fontSize: 15,
    },

    form: {
        marginLeft: 9,
        marginBottom: 30,
        marginTop: 100,
        width: 370,
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
        border: "3px outset #ccb4d9",
        borderRadius: "10px",
        backgroundColor: 'white',
        height: 480,

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
        margin: 5
    },

    content: {
        
    },
});

export default styles;