import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },

    background: {
        height: '100vh',
        width: '100vw',
        flex: 1,
    },

    form: {
        backgroundColor: 'white',
        alignItems: 'center',
     
        marginBottom: 50,
        borderRadius: 20,
        paddingTop: 40,
        paddingBottom: 40,
        width: '90%',  
        maxWidth: 500, 

        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },

    inpt: {
        backgroundColor: '#d9d9d9',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        width: '20vw',
    },

    label: {
        color: 'gray',
        marginTop: 10,
        marginBottom: 5,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 19,
    },

    entryBtn: {
        backgroundColor: 'black',
        padding: 5,
        borderRadius: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        marginTop: 20,
        width: 170,
        marginLeft: 40
    },

    btn: {
        color: 'white',
        textTransform: 'uppercase',
        margin: 5,
    },

    nav: {
        margin: 5,
    },
    bluebtn: {
        color: '#4D81E7',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 5,
    },
    inpt: {
        width: 260,
        height: 40,
        marginBottom: 26,
        borderRadius: 15,
        backgroundColor: '#fff',
        shadowColor: 'rgba(99, 99, 99, 1)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },

    logged: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#681111',
        padding: 20,
    },

    img: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 70,
        marginBottom: 10,
        borderColor: 'white',
        borderWidth: 1,
    },

    functions: {
        margin: 10,
        padding: 20,
        width: '90%',
        alignItems: 'center',
    },

    card: {
        backgroundColor: 'white',
        width: '100%',
        padding: 10,
        borderRadius: 12,
    }
});

export default styles;
