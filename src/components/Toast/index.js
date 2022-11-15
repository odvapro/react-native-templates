import React, {
	useEffect,
	useState,
	useRef,
	forwardRef,
	useImperativeHandle,
	memo,
} from 'react';
import {
	InfoCircleSvg,
	SuccessCircleSvg,
	ErrorCircleSvg,
	CloseBoldWhiteSvg,
} from '../../svg';
import { View, Animated, Text, Pressable } from 'react-native';
import styles from './style';

const Toast = forwardRef(
	({ animDuration = 300, style, hideIcon, hideDelay = 2000 }, ref) => {
		const [toastProps, setToastProps] = useState({
			message: 'Success',
			type: 'success',
			delay: hideDelay,
			isVisible: false,
		});
		const [toastHeight, setToastHeight] = useState(48);
		const animValue = useRef(new Animated.Value(0)).current;

		const Icon = ({ width, height }) => {
			switch (toastProps.type) {
				case 'success':
					return <SuccessCircleSvg width={width} height={height} />;
				case 'error':
					return <ErrorCircleSvg width={width} height={height} />;
				case 'info':
					return <InfoCircleSvg width={width} height={height} />;
				default:
					return <InfoCircleSvg width={width} height={height} />;
			}
		};

		useEffect(() => {
			toastProps.isVisible ? runAnim(1) : runAnim(0);
		}, [toastProps]);

		const close = () => {
			setToastProps(prev => ({ ...prev, isVisible: false }));
		};

		const runAnim = (value = 1) => {
			Animated.timing(animValue, {
				toValue: value,
				duration: animDuration,
				useNativeDriver: true,
			}).start();

			if (value === 1) {
				setTimeout(close, toastProps.delay);
			}
		};

		useImperativeHandle(ref, () => ({
			showToast(message = 'Success', type = 'success', delay = 2000) {
				setToastProps({
					message,
					type,
					delay,
					isVisible: true,
				});
			},
		}));

		const translateY = animValue.interpolate({
			inputRange: [0, 1],
			outputRange: [-(toastHeight + 4), 8],
		});

		const onLayout = e => {
			setToastHeight(e.nativeEvent.layout.height);
		};

		return (
			<View style={styles.container}>
				<Animated.View
					style={[
						styles.wrapper,
						{
							transform: [{ translateY }],
						},
					]}
					onLayout={onLayout}
				>
					<View style={styles.content(toastProps.type)}>
						{!hideIcon && <Icon width={24} height={24} />}
						<Text style={styles.message(toastProps.type)}>
							{toastProps.message}
						</Text>
						<Pressable onPress={close} style={styles.close}>
							<CloseBoldWhiteSvg
								style={styles.closeSvg(toastProps.type)}
							/>
						</Pressable>
					</View>
				</Animated.View>
			</View>
		);
	},
);

export default memo(Toast);
