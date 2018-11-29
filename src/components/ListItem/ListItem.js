import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image
} from "react-native";

const ListItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image
        style={styles.placeImage}
        source={props.placeImage}
        resizeMode="contain"
      />
      <Text> {props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    margin: 5
  },
  placeImage: {
    marginRight: 8,
    height: 50,
    width: 50
  }
});
export default ListItem;
