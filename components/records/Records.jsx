import { FlatList, StyleSheet, View } from "react-native";
import RecordItem from "./RecordItem";

export default function Records({ stats, deleteStatHandler }) {
  return (
    <View style={styles.appContainer}>
      <View style={styles.recordsContainer}>
        <FlatList
          data={stats}
          renderItem={(itemData) => {
            return (
              <RecordItem
                id={itemData.item.id}
                rounds={itemData.item.guessRounds}
                number={itemData.item.userNumber}
                onDeleteItem={deleteStatHandler}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  recordsContainer: {
    flex: 5,
    marginTop: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
