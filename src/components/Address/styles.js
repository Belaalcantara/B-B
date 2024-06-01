const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    inpt: {
        width: '100%',
        height: 40,
        marginBottom: '20px',
        borderRadius: 15,
        backgroundColor: '#fff',
        shadowColor: 'rgba(99, 99, 99, 1)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },

    address: {
        display: 'flex',
        alignItems: 'center'
    },

    info: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    inputField: {
        width: '50%'
    },

    label: {
        fontSize: 17
    },

    btn: {
        backgroundColor: '#681111',
        width: '80%',
        padding: 15,
        borderRadius: 12
    }
});

export default styles;