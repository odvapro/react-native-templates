import React, { useRef } from 'react';
import { View, Animated } from 'react-native';
import styles from './style';

const ProgressiveImage = props => {
	const { thumbnailSource, source, style } = props;

	const thumbnailAnimated = useRef(new Animated.Value(0)).current;
	const imageAnimated = useRef(new Animated.Value(0)).current;

	const handleThumbnailLoad = () => {
		Animated.timing(thumbnailAnimated, {
			toValue: 1,
			useNativeDriver: true,
		}).start();
	};

	const onImageLoad = () => {
		Animated.timing(imageAnimated, {
			toValue: 1,
			useNativeDriver: true,
		}).start();
	};

	return (
		<View style={styles.container}>
			<Animated.Image
				{...props}
				source={thumbnailSource}
				style={[styles.img, style, { opacity: thumbnailAnimated }]}
				blurRadius={2}
				onLoad={handleThumbnailLoad}
			/>
			<Animated.Image
				{...props}
				source={source}
				style={[
					styles.img,
					styles.imageOverlay,
					{ opacity: imageAnimated },
					style,
				]}
				onLoad={onImageLoad}
			/>
		</View>
	);
};

export default ProgressiveImage;
