import React from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import Accordion from './src/components/Accordion';
import ProgressiveImage from './src/components/ProgressiveImage';

import style from './style';

const App = () => {
	return (
		<SafeAreaView style={{ paddingTop: 50, backgroundColor: '#fff' }}>
			<View style={style.wrapper}>
				<ProgressiveImage
					thumbnailSource={
						'https://img.freepik.com/premium-photo/3d-illustration-of-a-glass-sphere-with-many-faces-crystals-scatter-on-a-black-background-cyber-ball-sphere_116124-6402.jpg'
					}
					source={
						'https://img.freepik.com/premium-photo/3d-illustration-of-a-glass-sphere-with-many-faces-crystals-scatter-on-a-black-background-cyber-ball-sphere_116124-6402.jpg?w=2000'
					}
				/>
				{/* <Image
					source={{
						uri: 'https://img.freepik.com/premium-photo/3d-illustration-of-a-glass-sphere-with-many-faces-crystals-scatter-on-a-black-background-cyber-ball-sphere_116124-6402.jpg',
					}}
					style={{ width: '100%', height: 300 }}
				/> */}
			</View>
		</SafeAreaView>
	);
};

export default App;
