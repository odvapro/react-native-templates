import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
	container: {
		zIndex: 2,
	},
	wrapper: {
		width: '100%',
		height: 100,
		position: 'absolute',
		top: 0,
		alignItems: 'center',
		paddingHorizontal: 12,
	},
	content(type) {
		let backgroundColor;
		switch (type) {
			case 'success':
				backgroundColor = '#000B';
				break;
			case 'error':
				backgroundColor = '#000B';
				break;
			default:
				backgroundColor = '#fff';
		}

		return {
			padding: 12,
			paddingRight: 0,
			flexDirection: 'row',
			backgroundColor,
			alignItems: 'center',
			borderRadius: 6,
			...Platform.select({
				ios: {
					shadowColor: '#000',
					shadowOpacity: 0.5,
					shadowRadius: 5,
				},
				android: {
					elevation: 5,
				},
			}),
		};
	},
	message(type) {
		const color = ['success', 'error'].includes(type) ? '#fff' : '#000';

		return {
			flex: 1,
			fontSize: 13,
			lineHeight: 16,
			color,
			marginLeft: 18,
		};
	},
	close: {
		paddingLeft: 18,
		paddingRight: 12,
		height: '100%',
		justifyContent: 'center',
	},
	closeSvg(type) {
		const color = ['success', 'error'].includes(type) ? '#fff' : '#303030';

		return {
			color,
		};
	},
});
