import { Image,View,StyleSheet, Text,Dimensions,useWindowDimensions,ScrollView} from "react-native";
import Title from "../components/game/ui/Title";
import Colors from "../constants/color";
import PrimaryButton from "../components/game/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber,onStartNewGame}){
const{width,height}=useWindowDimensions();

let imageSize=300;
if(width<380){
    imageSize=150;
}
if(height<400){
    imageSize=80;
}
const imageStyle={
    width:imageSize,
    height:imageSize,
    borderRadius:imageSize/2
}

    return(
        <ScrollView style={styles.screen}>
    <View style={styles.rootConatiner}>
      <Title>GAME OVER!</Title>
      <View style={[styles.imageConatiner,imageStyle  ]}>
      <Image source={require('../assets/images/game-over.jpg')}/>
    </View>
    <Text style={styles.summaryText}>
        Your phone needed<Text style={styles.highlight}>{roundsNumber}</Text>rounds to guess the numnber{''} 
        <Text style={styles.highlight}>{userNumber}</Text>. </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
     </View>
     </ScrollView>
    );
}


export default GameOverScreen;
// const deviceWidth=Dimensions.get('screen').width
const styles=StyleSheet.create({
    rootConatiner:{
     flex:1,
     padding:24,
     justifyContent:'center',
     alignItems:'center',
    },
imageConatiner:{
// width:deviceWidth <380 ? 150:250 ,
// height:deviceWidth<380 ? 150:250 ,
// borderRadius:deviceWidth <380 ? 75:150,
borderWidth:3,
borderColor:Colors.gradient1,
overflow:'hidden',
backgroundColor:'#0c0422',
margin:36,
},
screen:{
flex:1,
},
image:{
    width:'100%',
    height:'100%',
},
summaryText:{
fontFamily:'open-sans',
fontSize:24,
textAlign:'center',
marginBottom:24,
},
highlight:{
fontFamily:'open-sans-bold',
color:Colors.primary500,
},

});