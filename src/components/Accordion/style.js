import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		overflow: 'hidden',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		fontSize: 16,
		lineHeight: 36,
		color: '#000',
	},
	arrow: {
		position: 'absolute',
		right: 0,
	},
	arrowSvg: {
		color: '#000',
	},
	content: {},
	contentText: {
		paddingVertical: 12,
		fontSize: 13,
		lineHeight: 20,
		color: '#000',
	},
});

export default styles;
