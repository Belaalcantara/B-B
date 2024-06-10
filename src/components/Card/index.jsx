import { Image, View, Text } from "react-native";
import styles from './styles'

const Card = ({ data }) => {

    const array = data.order_date.split(' ');
    const date = array[0].split('-').join('/');
    const hour = array[1];

    return (
        <View style={styles.container} key={data.order_id}>
            <View style={styles.unique}>
                <Image style={{borderRadius: 45, width: 60, height: 60, margin: 20}} source={require('../../../assets/bk.jpg')}/>
                <View style={styles.content}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>{data.restaurant_name}</Text>
                    <Text style={{fontSize: 20}}>Data: {date}</Text>
                    <Text style={{fontSize: 20}}>Hora: {hour}</Text>
                    <Text style={{fontSize: 20}}>Custo: {data.total_price}</Text>
                </View>
            </View>
        </View>
    )
}

export default Card;