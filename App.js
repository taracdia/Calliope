import React from "react";
import MainStackNavigator from "./navigation/AppNavigator";
import { Provider as StoreProvider } from "react-redux";
import store from "./redux/store";

const App = () => {
	return (
		<StoreProvider store={store}>
			<MainStackNavigator />
		</StoreProvider>
	);
};

export default App;
