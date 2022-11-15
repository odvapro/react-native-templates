import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Accordion from './src/components/Accordion';

import style from './style';

const App = () => {
	return (
		<SafeAreaView style={{ paddingTop: 50, backgroundColor: '#fff' }}>
			<View style={style.wrapper}>
				<Accordion
					title={'Заголовок'}
					text={
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at atque consequatur, cumque dolorum ducimus expedita facere fugit labore, magnam modi nesciunt numquam odit perspiciatis provident repellendus reprehenderit saepe veritatis.'
					}
				/>
			</View>
		</SafeAreaView>
	);
};

export default App;
