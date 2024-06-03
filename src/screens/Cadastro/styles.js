import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '100%',
        minHeight: '100%'
    },

    background: {
        height: '100vh',
        width: '100vw',
        flex: 1
    },

    form: {
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        margin: '50px',
        marginBottom: 20,
        borderRadius: 20,
        paddingTop: '40px',
        paddingBottom: '40px',

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
        },

    label: {
            color: 'gray',
            marginTop: 10,
        },
        title: {
            marginLeft: '83px',
            fontSize: '30px',
            fontWeight: 'bold',
            marginBottom: '19px',
        },

        entryBtn: {
            backgroundColor: 'black',
            padding: 5,
            borderRadius: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5,
            marginTop: 20,
        },

        btn: {
            color: 'white',
            textTransform: 'uppercase',
            margin: '5px',
        },

        nav: {
            margin: 5,
        },
        bluebtn: {
            color: '#4D81E7',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            marginTop: '5px',
        },
        inpt: {
            width: 200,
            height: 40,
            marginBottom: '26px',
            borderRadius: 15,
            backgroundColor: '#fff',
            shadowColor: 'rgba(99, 99, 99, 1)',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 4,
        },

        logged: {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#681111',
            height: '100%',
            width: '100%',
            padding: 20
        },

        img: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },

        profileImage: {
            width: 120,
            height: 120,
            borderRadius: 70,
            marginBottom: 10,
            borderColor: 'white',
            borderWidth: 1
        },

        functions: {
            margin: 10,
            padding: 20,
            width: '90%',
            display: 'flex',
            alignItems: 'center'
        },

        card: {
            backgroundColor: 'white',
            width: '100%',
            padding: 10,
            borderRadius: 12
        }
    });

export default styles;