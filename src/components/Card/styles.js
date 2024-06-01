import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        height: 'auto',
        width: '100%'
    },
    
    unique: {
        backgroundColor: 'white',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10
    },

    content: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20
    }
});

export default styles;