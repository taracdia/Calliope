import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Styles, Theme } from "../Styles";

const ScreenChanger = () => {
	const navigation = useNavigation();
	const theme = Theme().theme;
	return (
		<View>
			<TouchableOpacity onPress={() => navigation.navigate("Player")}>
				<Text style={theme}>Play</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("List")}>
				<Text style={theme}>List</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("Theme")}>
				<Text style={theme}>Theme</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("About")}>
				<Text style={theme}>About</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ScreenChanger;
