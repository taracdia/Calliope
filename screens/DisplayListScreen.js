import React from "react";
import {
	View,
	Text,
	FlatList,
	Image,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import ScreenChanger from "../components/ScreenChanger";
import songs from "../songs.json";

const DisplayList = () => {
	return (
		<View>
			<FlatList
				data={songs}
				keyExtractor={item => item.id.toString()}
				// ItemSeparatorComponent={() => Separator()}
				renderItem={({ item }) => (
					<View style={{ flexDirection: "row" }}>
						<Text>{item.title}</Text>
						<Text>{item.artist}</Text>
						{/* TODO: add other parts */}
					</View>
				)}
			/>
			<ScreenChanger />
		</View>
	);
};

export default DisplayList;
