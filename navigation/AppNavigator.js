import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PlayMusic from "../screens/PlayMusicScreen";
import DisplayList from "../screens/DisplayListScreen";
import ThemeChoose from "../screens/ThemeChooseScreen";
import About from "../screens/AboutScreen";
import ColorPicker from "../screens/ColorPickerScreen";

const Stack = createStackNavigator();

function MainStackNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Player" component={PlayMusic} />
				<Stack.Screen name="List" component={DisplayList} />
				<Stack.Screen name="Theme" component={ThemeChoose} />
				<Stack.Screen name="About" component={About} />
				<Stack.Screen name="Color Picker" component={ColorPicker} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default MainStackNavigator;
