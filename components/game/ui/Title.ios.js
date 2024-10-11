 import { Text,StyleSheet,Platform } from "react-native";
 import Colors from "../../../constants/color";
import Fonts from "../../../constants/fonts";
 
 function Title({children}){
return  <Text style={styles.title}>{children}</Text>;
 }
 export default Title;
 const styles=StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:'1000', 
        color:'white',
        textAlign:'center',
        // borderWidth:Platform.OS==='android'? 2:0,
        // borderWidth:Platform.select({ios:0,android:2}),
        borderColor:'white',
        padding:12,
        fontFamily:Fonts.font1,
    
        Width:300,
    
    
    },


 });