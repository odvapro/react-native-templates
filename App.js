import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Rating from './src/components/Rating';

import style from './style';

const App = () => {
	return (
		<SafeAreaView>
			<ScrollView style={style.wrapper}>
				<Rating />
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
