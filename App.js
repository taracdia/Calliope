import React, { useEffect, useState } from "react";
import { Text, Button, View, Image } from "react-native";
import TrackPlayer, {
	TrackPlayerEvents,
	STATE_PLAYING,
} from "react-native-track-player";
import {
	useTrackPlayerProgress,
	useTrackPlayerEvents,
} from "react-native-track-player/lib/hooks";
import Slider from "@react-native-community/slider";
import styles from "./styles";

const songs = [
	{
		id: 0,
		url:
			"https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3",
		title: "Song 0",
		album: "Great Album",
		artist: "A Great Dude",
		artwork: "https://picsum.photos/300",
		type: "default",
	},
	{
		id: 1,
		url:
			"https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3",
		title: "Song 1",
		album: "Great Album",
		artist: "A Great Dude",
		artwork: "https://picsum.photos/300",
		type: "default",
	},
	{
		id: 2,
		url:
			"https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3",
		title: "Song 2",
		album: "Great Album",
		artist: "A Great Dude",
		artwork: "https://picsum.photos/300",
		type: "default",
	},
];

const trackPlayerInit = async () => {
	await TrackPlayer.setupPlayer();
	TrackPlayer.updateOptions({
		stopWithApp: true,
		capabilities: [
			TrackPlayer.CAPABILITY_PLAY,
			TrackPlayer.CAPABILITY_PAUSE,
			TrackPlayer.CAPABILITY_JUMP_FORWARD,
			TrackPlayer.CAPABILITY_JUMP_BACKWARD,
		],
	});
	await TrackPlayer.add(songs).catch(e => console.log(e.message));
	return true;
};

const App = () => {
	const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [sliderValue, setSliderValue] = useState(0);
	const [isSeeking, setIsSeeking] = useState(false);
	const { position, duration } = useTrackPlayerProgress(250);

	const [songNumber, setSongNumber] = useState(0);

	useEffect(() => {
		const startPlayer = async () => {
			let isInit = await trackPlayerInit();
			setIsTrackPlayerInit(isInit);
		};
		startPlayer();
	}, []);

	//this hook updates the value of the slider whenever the current position of the song changes
	useEffect(() => {
		if (!isSeeking && position && duration) {
			setSliderValue(position / duration);
		}
	}, [position, duration]);

	useTrackPlayerEvents([TrackPlayerEvents.PLAYBACK_STATE], event => {
		if (event.state === STATE_PLAYING) {
			setIsPlaying(true);
		} else {
			setIsPlaying(false);
		}
	});

	const onButtonPressed = () => {
		if (!isPlaying) {
			TrackPlayer.play();
			//setIsPlaying(true);
		} else {
			TrackPlayer.pause();
			//setIsPlaying(false);
		}
	};

	const slidingStarted = () => {
		setIsSeeking(true);
	};

	const slidingCompleted = async value => {
		await TrackPlayer.seekTo(value * duration);
		setSliderValue(value);
		setIsSeeking(false);
	};

	const nextButton = () => {
		const newSongNumber = songNumber + 1;
		if (songs.length > newSongNumber) {
			setSongNumber(newSongNumber);
		} else {
			setSongNumber(0);
		}
	};

	const prevButton = () => {
		if (songNumber === 0) {
			setSongNumber(songs.length - 1);
		} else {
			setSongNumber(songNumber - 1);
		}
	};

	return (
		<View style={styles.mainContainer}>
			<View style={styles.imageContainer}>
				<Image
					source={{
						uri: songs[songNumber].artwork,
					}}
					resizeMode="contain"
					style={styles.albumImage}
				/>
			</View>
			<View style={styles.detailsContainer}>
				<Text style={styles.songTitle}>{songs[songNumber].title}</Text>
				<Text style={styles.artist}>{songs[songNumber].artist}</Text>
			</View>
			<View style={styles.controlsContainer}>
				<Slider
					style={styles.progressBar}
					minimumValue={0}
					maximumValue={1}
					value={sliderValue}
					minimumTrackTintColor="#111000"
					maximumTrackTintColor="#000000"
					onSlidingStart={slidingStarted}
					onSlidingComplete={slidingCompleted}
					thumbTintColor="#000"
				/>
			</View>
			<View style={styles.buttonsContainer}>
				<Button title="prev" onPress={prevButton} />
				<Button
					title={isPlaying ? "Pause" : "Play"}
					onPress={onButtonPressed}
					style={styles.playButton}
					disabled={!isTrackPlayerInit}
					color="#000000"
				/>
				<Button title="next" onPress={nextButton} />
			</View>
		</View>
	);
};

export default App;
