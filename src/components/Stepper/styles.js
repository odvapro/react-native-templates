import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: 96,
		height: 32,
		backgroundColor: '#F5F5F5',
		borderRadius: 4,
	},
	text: {
		color: '#BBBBBB',
		fontSize: 14,
		lineHeight: 20,
	},
	btn: {
		height: '100%',
		paddingHorizontal: 12,
		justifyContent: 'center',
	},
	icon: {
		color: '#BBBBBB',
	},
});
