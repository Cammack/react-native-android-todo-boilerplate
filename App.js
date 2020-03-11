import React, { Component } from "react";
import { View, Text, Stylesheet } from "react-native";
import Header from "./header";
import Footer from "./footer"

class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <View>
        <Text>Hello</Text>
        </View>
        <Footer />
      </View>
    );
  }
}
export default App;
