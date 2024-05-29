import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
            position: 'fixed',
            width: '100%',
            height: '100%',
            backgroundColor:'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
    },
    modal: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        width: '100%',
        height: '80%',
        textAlign: 'center',
    },
    header: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    btn: {
        backgroundColor: '#f44336',
        color: '#fff',
        borderRadius: 5,
    }
});

export default styles;