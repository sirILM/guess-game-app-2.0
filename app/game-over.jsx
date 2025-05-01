import { View, Image, Text, StyleSheet } from "react-native";
import { useGuess } from "../context/GuessContext";
import { useRouter } from "expo-router";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

export default function GameOver() {
  const { userNumber, guessRounds, startNewGameHandler, addRecordHandler } =
    useGuess();

  const router = useRouter();

  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://ahjanudiomayubxpquam.supabase.co/storage/v1/object/public/images//success.png",
          }}
        />
      </View>
      <Text style={styles.summaryText}>
        Computer needed <Text style={styles.highlight}>{guessRounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton
        onPress={() => {
          addRecordHandler();
          startNewGameHandler();
          router.navigate("/");
        }}
      >
        Start New Game
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
    color: Colors.accent600,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
