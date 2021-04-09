import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

import { Styles, Theme } from "../Styles";
import ScreenChanger from "../components/ScreenChanger";
import Player from "../components/Player";

const PlayMusic = () => {
	const theme = useSelector(state => state);
	const primary = Theme().primary;

	return (
		<View
			style={[
				{ alignSelf: "center", justifyContent: "center" },
				Styles.flex,
			]}
		>
			{/* <View style={[Styles.center, Styles.flex]}>
				<Image
					source={{
						uri: track.artwork,
					}}
					resizeMode="contain"
					style={[Styles.center, Styles.flex, Styles.albumImage]}
				/>
			</View>
			<View style={[Styles.center, Styles.flex]}>
				<Text style={Styles.bigBold}>{track.title}</Text>
				<Text style={Styles.artist}>by {songs[songNumber].artist}</Text>
				<Text style={Styles.artist}>
					from {songs[songNumber].album}
				</Text>
			</View> */}
			<Player />
			<ScreenChanger />
		</View>
	);
};

//TODO: display lyrics instead sometimes

export default PlayMusic;
