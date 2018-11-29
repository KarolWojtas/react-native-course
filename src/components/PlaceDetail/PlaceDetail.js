import React from "react";
import { Modal, Image, Text, Button, StyleSheet, View } from "react-native";

const placeDetail = props => {
  let modalContent = null;
  let deletePlaceFun = () => null;
  if (props.selectedPlace) {
    deletePlaceFun = props.deletePlace.bind(this, props.selectedPlace.key);

    modalContent = (
      <>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </>
    );
  }
  return (
    <Modal
      visible={props.selectedPlace !== null}
      animationType={"slide"}
      onRequestClose={props.closeModal}
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View style={styles.actionContainer}>
          <Button
            title={"Delete"}
            color={"salmon"}
            onPress={() => {
              deletePlaceFun();
              props.closeModal();
            }}
          />
          <Button title={"Close"} onPress={props.closeModal} />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  actionContainer: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between"
  },
  placeImage: {
    margin: 1,
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});
export default placeDetail;
