/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import ListItem from "./src/components/ListItem/ListItem";
import PlaceForm from "./src/components/PlaceForm/PlaceForm";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import { createStore } from "react-redux";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ScrollView
} from "react-native";
import beautifulImage from "./src/assets/beautiful-place.jpg";

export type Place = {
  key: number,
  name: string,
  image: any
};
export default class App extends Component<Props> {
  state = {
    places: [],
    selectedPlace: null
  };

  addPlaceHandler = text => {
    if (text.trim() !== "") {
      this.setState(prevState => {
        const newPlace: Place = {
          key: Math.random(),
          name: text,
          image: {
            uri:
              "https://farm5.staticflickr.com/4613/38806066895_40a35fb2ed_b.jpg"
          }
        };
        return {
          places: [...prevState.places, newPlace]
        };
      });
    }
  };
  removeItemHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(item => item.key !== key)
      };
    });
  };
  placeSelectedHandler = key => {
    this.setState(prevState => {
      return { selectedPlace: prevState.places.find(item => item.key === key) };
    });
  };
  closePlaceDetailModal = () => {
    this.setState({ selectedPlace: null });
  };
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          closeModal={this.closePlaceDetailModal}
          deletePlace={this.removeItemHandler}
        />
        <PlaceForm
          value={this.state.text}
          placeNameChangedHandler={this.placeNameChangedHandler}
          addPlaceHandler={this.addPlaceHandler}
        />
        <FlatList
          style={styles.list}
          data={this.state.places}
          renderItem={({ item }) => (
            <ListItem
              placeName={item.name}
              placeImage={item.image}
              onItemPressed={() => this.placeSelectedHandler(item.key)}
            />
          )}
          keyExtractor={item => `${item.key}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  list: {
    width: "100%"
  }
});
