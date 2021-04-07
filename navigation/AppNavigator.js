import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PlayMusic from "../screens/PlayMusicScreen";
import DisplayList from "../screens/DisplayListScreen";

const Stack = createStackNavigator();

function MainStackNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="PlayMusic" component={PlayMusic} />
				<Stack.Screen name="DisplayList" component={DisplayList} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default MainStackNavigator;
