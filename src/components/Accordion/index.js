import React, { useState, useRef, memo, useEffect } from 'react';
import {
	View,
	Text,
	Animated,
	Pressable,
	LayoutAnimation,
	Platform,
	UIManager,
} from 'react-native';
import styles from './style';
import { SelectArrowSvg } from '../../svg';

if (
	Platform.OS === 'android' &&
	UIManager.setLayoutAnimationEnabledExperimental
) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Accordion = ({ title = '', text = '', isOpen, style = {} }) => {
	const [isShow, setIsShow] = useState(false);
	const rotateAnim = useRef(new Animated.Value(0)).current;

	const toggleContent = () => {
		LayoutAnimation.configureNext({
			duration: 300,
			create: { type: 'easeInEaseOut', property: 'opacity' },

			delete: { type: 'easeInEaseOut', property: 'opacity' },
		});
		setIsShow(old => !old);
	};

	useEffect(() => {
		Animated.timing(rotateAnim, {
			toValue: !isShow ? 0 : 1,
			duration: !isShow ? 200 : 300,
			useNativeDriver: true,
		}).start();
	}, [isShow]);

	const rotateValue = rotateAnim.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '180deg'],
	});

	return (
		<View style={[styles.container, style]}>
			<Pressable style={styles.header} onPress={toggleContent}>
				<Text style={styles.title}>{title}</Text>
				<Animated.View
					style={[
						styles.arrow,
						{
							transform: [{ rotate: rotateValue }],
						},
					]}
				>
					<SelectArrowSvg style={styles.arrowSvg} />
				</Animated.View>
			</Pressable>

			{isShow && (
				<Animated.View style={[styles.content]}>
					<Text style={styles.contentText}>{text}</Text>
				</Animated.View>
			)}
		</View>
	);
};

export default memo(Accordion);
