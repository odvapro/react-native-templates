import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Checkbox } from '../../svg';
import styles from './style';

const CheckBox = ({
	title,
	checked,
	activeCheckedStyle,
	disabledCheckedStyle,
	checkboxInnerStyle,
	checkboxStyle,
	onPress,
	containerStyle,
	svhIcon,
}) => {
	const [isChecked, setIsChecked] = useState(checked);

	const SVG = svhIcon ? svhIcon : Checkbox;

	const checkboxStatusStyles = isChecked
		? [styles.activeCheckedStyle, activeCheckedStyle]
		: [styles.disabledCheckedStyle, disabledCheckedStyle];

	const onCheckedPress = () => {
		setIsChecked(!isChecked);

		if (onPress) onPress();
	};

	return (
		<View style={{ ...styles.container, ...containerStyle }}>
			<TouchableOpacity
				style={[styles.btn, checkboxInnerStyle]}
				activeOpacity={0.7}
				onPress={onCheckedPress}
			>
				<SVG
					style={[
						styles.checkBox,
						checkboxStyle,
						checkboxStatusStyles,
					]}
				/>
				<Text style={styles.title} onPress={onPress}>
					{title}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default CheckBox;
