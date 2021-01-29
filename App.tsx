import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CreateStore from "./src/store/store";

import Garage from "./src/screens/Garage/Garage";

import { Container, StatusBar } from "./src/styles";
import DetailsScreen from "./DetailsScreen";

const store = CreateStore();

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigator initialRouteName="Garage">
          <Screen name="Garage" component={Garage} />

          <Screen name="Details" component={DetailsScreen} />
        </Navigator>
      </Provider>
    </NavigationContainer>
  );
}
