import React, { useRef } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import InputText from './src/components/InputText';

import style from './style';

const App = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView style={style.wrapper}>
				<InputText />
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
