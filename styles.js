import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: "#EDEDED",
	},
	imageContainer: {
		flex: 0.5,
		justifyContent: "center",
	},
	detailsContainer: {
		flex: 0.05,
		justifyContent: "center",
		alignItems: "center",
	},
	controlsContainer: {
		flex: 0.45,
		justifyContent: "flex-start",
	},
	albumImage: {
		width: 250,
		height: 250,
		alignSelf: "center",
	},
	progressBar: {
		height: 20,
		paddingBottom: 90,
	},
	songTitle: {
		fontSize: 16,
		fontWeight: "bold",
	},
	artist: {
		fontSize: 14,
	},
	buttonsContainer: {
		flex: 1,
	},
});

export default styles;
