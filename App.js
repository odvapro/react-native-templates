import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

import styles from './style';

const App = () => {
	return (
		<SafeAreaView style={styles.wrapper}>
			<Text style={styles.text}>O2</Text>
			<Text style={styles.text}>React-Native</Text>
			<Text style={styles.text}>Templates</Text>
		</SafeAreaView>
	);
};

export default App;
