import { Text, View } from "react-native"
import styles from "./styles";

const Popup = ({ type }) => {
    return(
        <View style={styles.container}>
            <Text style={{color: 'white'}}>{type}</Text>
        </View>
    )
}

export default Popup;