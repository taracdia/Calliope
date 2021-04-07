import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ScreenChanger = () => {
	const navigation = useNavigation();

	return (
		<View>
			<TouchableOpacity onPress={() => navigation.navigate("PlayMusic")}>
				<Text>Play</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.navigate("DisplayList")}
			>
				<Text>List</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ScreenChanger;
