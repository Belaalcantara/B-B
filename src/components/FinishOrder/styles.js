import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    modal: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        width: '100%',
        height: '70%',
        textAlign: 'center',
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    btnView: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%'
    },
    btn: {
        backgroundColor: '#f44336',
        color: '#fff',
        borderRadius: 5,
    }
});

export default styles;