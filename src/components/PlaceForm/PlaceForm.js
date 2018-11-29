import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

class PlaceForm extends Component {
  placeInput = React.createRef();
  state = {
    text: ""
  };
  componentDidMount() {
    this.placeInput.current.focus();
  }
  placeNameChangedHandler = text => {
    this.setState({ text: text });
  };
  handleSubmitPlace = () => {
    this.props.addPlaceHandler(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <View style={styles.form}>
        <TextInput
          style={styles.placeInput}
          placeholder={"An awesome place"}
          value={this.state.text}
          onChangeText={this.placeNameChangedHandler}
          ref={this.placeInput}
        />
        <Button
          title={"Add place"}
          onPress={this.handleSubmitPlace}
          style={styles.placeButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5
  },
  placeInput: {
    width: "70%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    margin: 4
  },
  placeButton: {
    width: "30%",
    margin: 4
  }
});
export default PlaceForm;
