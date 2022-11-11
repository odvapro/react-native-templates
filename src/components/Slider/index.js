import React, { useState, useRef, memo } from 'react';
import {
	ScrollView,
	View,
	Image,
	TouchableOpacity,
	Pressable,
	Dimensions,
} from 'react-native';
import styles from './styles';

const screenWidth = Dimensions.get('window').width;

const Slider = ({
	slides = [],
	currentSlide = 0,
	onSlidePress,
	containerStyle,
	sliderStyle,
	dotsContainerStyle,
	dotsStyle,
	currentDotsStyle,
}) => {
	const sliderRef = useRef();
	const [activeSlide, setActiveSlide] = useState(currentSlide);

	const goToSlide = (idx, anim = true) => {
		sliderRef.current.scrollTo({
			x: idx * screenWidth,
			animated: anim,
		});
	};

	const changeActiveSlider = event => {
		const xPos = event.nativeEvent.contentOffset.x;
		setActiveSlide((Math.abs(xPos / screenWidth) + 1).toFixed(0) - 1);
	};

	const renderDots = (item, idx) => (
		<TouchableOpacity
			key={`dot${idx}`}
			activeOpacity={0.7}
			style={[
				styles.paginationItem,
				dotsStyle,
				+activeSlide === +idx && {
					...styles.paginationItemActive,
					...currentDotsStyle,
				},
			]}
			onPress={() => goToSlide(idx)}
		/>
	);

	const renderItem = (item, idx) => {
		const onPress = () => {
			if (typeof onSlidePress === 'function') {
				onSlidePress(idx);
			}
		};

		return (
			<Pressable
				style={{ ...styles.slide, width: screenWidth }}
				onPress={onPress}
				key={`slide${idx}`}
			>
				<Image
					source={{ uri: item }}
					style={styles.slideImg}
					resizeMode={'cover'}
				/>
			</Pressable>
		);
	};

	return (
		<View style={[styles.wrapper, containerStyle]}>
			<ScrollView
				ref={sliderRef}
				contentContainerStyle={sliderStyle}
				onLayout={() => goToSlide(activeSlide, false)}
				onScroll={event => changeActiveSlider(event)}
				scrollEventThrottle={5}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				snapToInterval={screenWidth}
				decelerationRate={'fast'}
				disableIntervalMomentum
			>
				{slides.map(renderItem)}
			</ScrollView>
			{slides.length > 1 && (
				<View style={[styles.paginationWrapper, dotsContainerStyle]}>
					{slides.map(renderDots)}
				</View>
			)}
		</View>
	);
};

export default memo(Slider);
