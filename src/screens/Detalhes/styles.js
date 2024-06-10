import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f5',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#681111', // cor vinho
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    margem: {
        marginBottom: 20,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff', // texto branco para contraste
        marginBottom: 10,
    },
    id: {
        fontSize: 18,
        color: '#ffd700', // amarelo ouro para contraste
        marginBottom: 10,
    },
    containerDetalhes: {
        marginBottom: 20,
    },
    detalhes: {
        fontSize: 16,
        color: '#fff', // texto branco para contraste
        marginBottom: 5,
    },
    containerTotal: {
        marginTop: 20,
    },
    horizontal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});