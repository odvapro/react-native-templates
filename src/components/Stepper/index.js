import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { Minus, Plus } from '../../svg';

const Stepper = ({
	onDecrement,
	onIncrement,
	stepper = 2,
	containerStyle,
	btnMinusStyle,
	btnPlusStyle,
}) => {
	const [currentStepper, setCurrentStepper] = useState(stepper);

	useEffect(() => {
		setCurrentStepper(stepper);
	}, [stepper]);

	const decrement = () => {
		const cCount = currentStepper - 1;
		setCurrentStepper(cCount);
		onDecrement();
	};
	const increment = () => {
		const cCount = currentStepper + 1;
		setCurrentStepper(cCount);
		onIncrement();
	};

	return (
		<View style={{ ...styles.container, ...containerStyle }}>
			<TouchableOpacity
				style={[styles.btn, btnMinusStyle]}
				activeOpacity={0.6}
				onPress={currentStepper > 1 ? decrement : null}
			>
				<Minus style={styles.icon} />
			</TouchableOpacity>

			<Text style={styles.text}>{`${currentStepper}`}</Text>

			<TouchableOpacity
				style={[styles.btn, btnPlusStyle]}
				activeOpacity={0.6}
				onPress={increment}
			>
				<Plus style={styles.icon} />
			</TouchableOpacity>
		</View>
	);
};

export default Stepper;
