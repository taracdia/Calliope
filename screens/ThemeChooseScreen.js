import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { TriangleColorPicker } from "react-native-color-picker";

import ScreenChanger from "../components/ScreenChanger";
import { CHANGE_PRIMARY } from "../redux/Theme";
import { Styles, Theme } from "../Styles";
import { useNavigation } from "@react-navigation/native";

const ThemeChoose = () => {
	const theme = Theme().theme;
	const navigation = useNavigation();
	return (
		<View style={{ flex: 1 }}>
			<TouchableOpacity
				onPress={() =>
					navigation.push("Color Picker", {
						action: CHANGE_PRIMARY,
						whatChanges: "primary",
					})
				}
			>
				<Text style={theme}>Primary</Text>
			</TouchableOpacity>
			{/* <TouchableOpacity onPress={() => changePrimary("red")}>
				<Text style={theme}>Background</Text>
			</TouchableOpacity> */}
			<ScreenChanger />
		</View>
	);
};

export default ThemeChoose;
