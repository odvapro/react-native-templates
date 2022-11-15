import React from 'react';
import { Text, Image, Pressable, TouchableOpacity } from 'react-native';
import styles from './styles';

export const Button = ({
	onPress,
	styleBtn,
	styleText,
	text,
	disabled,
	icon,
	iconStyle,
	activeOpacity = 0.2,
	...props
}) => {
	return (
		<TouchableOpacity
			style={[styles.container, styleBtn]}
			disabled={disabled}
			onPress={onPress}
			activeOpacity={activeOpacity}
			{...props}
		>
			{icon && <Image style={[iconStyle]} source={icon} />}
			<Text style={[styles.text, styleText]}>{text}</Text>
		</TouchableOpacity>
	);
};
