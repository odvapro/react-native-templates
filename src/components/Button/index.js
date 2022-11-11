import React from 'react';
import { Text, Image, Pressable } from 'react-native';
import styles from './styles';

export const Button = ({
	onPressIn,
	onPressOut,
	onLongPress,
	onPress,
	styleBtn,
	styleText,
	text,
	disabled,
	icon,
	iconStyle,
}) => {
	return (
		<Pressable
			style={styles.container}
			disabled={disabled}
			onPress={onPress}
			onPressIn={onPressIn}
			onPressOut={onPressOut}
			onLongPress={onLongPress}
		>
			{icon && <Image style={[iconStyle]} source={icon} />}
			<Text style={[styles.text, styleText]}>{text}</Text>
		</Pressable>
	);
};
