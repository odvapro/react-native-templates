import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Stepper from './src/components/Stepper';

import style from './style';

const App = () => {
	return (
		<SafeAreaView>
			<ScrollView style={style.wrapper}>
				<Stepper
					onDecrement={() => console.log('d')}
					onIncrement={() => console.log('v')}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
