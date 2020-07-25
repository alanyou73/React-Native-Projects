import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";
const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        imageScore="Image Score - 9"
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        imageScore="Image Score - 7"
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore="Image Score - 4"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
