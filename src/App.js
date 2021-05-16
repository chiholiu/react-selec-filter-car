import React from 'react';
import { AppGlobal } from './styles/GlobalStyle';
import { AppComponent } from "./components/AppComponent/AppComponent";

function App() {
	return (
		<AppGlobal className="App">
			<AppComponent />
		</AppGlobal>
	);
}

export default App;