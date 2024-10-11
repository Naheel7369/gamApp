import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/color';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState (true);
  const [guessRounds,setGuessRounds]=useState(0);

  function PickedNumberHandler(PickedNumber) {
    setUserNumber(PickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  function startNewGameHandler(){
setUserNumber(null);
setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={PickedNumberHandler} />
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber}  onGameOver={gameOverHandler}/>
  }
  if(gameIsOver && userNumber){
    screen=<GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
  }
  
  return (

    <LinearGradient colors={[Colors.gradient1, Colors.gradient2, Colors.gradient3]} style={styles.rootScreen}>
      <StatusBar backgroundColor={'#3b021f'} />
      <ImageBackground source={require('./assets/images/dice2.jpg')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        {/* <StartGameScreen /> */}
      </ImageBackground>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }

});