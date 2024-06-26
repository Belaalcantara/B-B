import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#681111',
        height: '100%',
        padding: 20
    },
    title: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 30
    },
    orders: {
        height:'100%',
        display: 'flex',
        alignItems: 'center',
        width: '95%'
    },
    loggon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: 'auto',
        borderRadius: 8,
        padding: 15,
        margin: 25
    },
    info: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        margin: 10
    },
    nav: {
        backgroundColor: '#681111',
        width: '60%',
        borderRadius:15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12
    },
    address: {
        backgroundColor: 'white',
        margin: 20,
        padding: 15,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'black'
    }
});

export default styles;