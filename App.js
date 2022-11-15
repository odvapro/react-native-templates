import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Stepper from './src/components/Stepper';
import Toast from './src/components/Toast';

import style from './style';

const App = () => {
	return (
		<SafeAreaView style={{ paddingTop: 50 }}>
			<View style={style.wrapper}>
				<Toast />
			</View>
		</SafeAreaView>
	);
};

export default App;
