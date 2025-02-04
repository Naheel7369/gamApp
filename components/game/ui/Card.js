import { StyleSheet,View,Dimensions } from "react-native";
import Colors from "../../../constants/color";
function Card({children}){
return  <View style={styles.card}>{children}

</View>
}



export default Card;
const deviceWidth=Dimensions.get('window').width
const styles=StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 16,
        marginTop:  deviceWidth< 380 ? 18 : 36,
        backgroundColor: Colors.primary700,
        borderRadius: 6,
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        textShadowRadius: 6,
        shadowOpacity: 0.25
    },




});