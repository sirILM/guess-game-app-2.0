import { useEffect, useState } from "react";
import { TextInput, View, StyleSheet, Alert, Button } from "react-native";
import { useGuess } from "../context/GuessContext";
import { useRouter } from "expo-router";
import { signOut } from "../services/apiAuth";
import { getRecords } from "../services/apiRecords";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Records from "../components/records/Records";

export default function StartGame() {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { pickedNumberHandler, records, deleteRecordHandler, setRecords } =
    useGuess();

  const router = useRouter();

  useEffect(() => {
    getRecords().then((data) => {
      console.log(data);

      setRecords(data);
    });
  }, [setRecords]);

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Enter a number between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    pickedNumberHandler(chosenNumber);
    router.navigate("/game");
  }

  return (
    <View style={styles.rootContainer}>
      <Title>GUESS MY NUMBER</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
      <Records records={records} deleteRecordHandler={deleteRecordHandler} />
      <View style={{ marginBottom: "50" }}>
        <Button title="Sign Out" onPress={() => signOut()} color="#85939E" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 55,
    width: 55,
    fontSize: 32,
    borderBottomColor: Colors.accent600,
    borderBottomWidth: 2,
    color: Colors.accent600,
    marginVertical: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
