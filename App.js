import React, { useRef } from 'react';
import { Alert, SafeAreaView, ScrollView, Text } from 'react-native';
import CheckBox from './src/components/CheckBox';
import Input from './src/components/Input';

import style from './style';

const App = () => {
	return (
		<SafeAreaView>
			<ScrollView style={style.wrapper}>
				<Input />
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
