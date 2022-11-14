import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Checkbox } from '../../svg';
import styles from './style';

const CheckBox = ({
	title,
	checked = false,
	disabled = false,
	svhIcon,
	onPressChecked,
	onPressNotChecked,
	activeCheckedStyle,
	// disabledCheckedStyle,
	checkboxInnerStyle,
	checkboxStyle,
	titleStyle,
}) => {
	const [isChecked, setIsChecked] = useState(checked);

	const SVG = svhIcon ? svhIcon : Checkbox;

	const checkboxStatusStyles = isChecked
		? [styles.activeCheckedStyle, activeCheckedStyle]
		: [styles.disabledCheckedStyle, checkboxStyle];

	const border = isChecked ? styles.borderNone : {};

	const onCheckedPress = () => {
		setIsChecked(!isChecked);

		if (isChecked && onPressChecked) {
			onPressChecked();
		} else if (!isChecked && onPressNotChecked) {
			onPressNotChecked();
		}
	};

	return (
		<TouchableOpacity
			style={[styles.btn, checkboxInnerStyle, border]}
			activeOpacity={0.7}
			onPress={onCheckedPress}
			disabled={disabled}
		>
			{isChecked && (
				<SVG
					width={'100%'}
					height={'100%'}
					style={[styles.checkBox, checkboxStatusStyles]}
				/>
			)}
			<Text style={[styles.title, titleStyle]} onPress={onCheckedPress}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default CheckBox;
