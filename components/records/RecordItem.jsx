import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import Colors from "../../constants/colors";

export default function RecordItem(props) {
  return (
    <ScrollView>
      <View style={styles.recordItem}>
        <Pressable
          android_ripple={{ color: "#210644" }}
          onPress={props.onDeleteItem.bind(this, props.id)}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Text style={styles.recordText}>
            Computer needed {props.rounds} rounds to guess {props.number}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  recordItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  pressedItem: {
    opacity: 0.5,
  },
  recordText: {
    fontFamily: "open-sans",
    color: Colors.accent600,
  },
});
