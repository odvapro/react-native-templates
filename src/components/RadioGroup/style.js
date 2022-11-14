import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		alignSelf: 'flex-start',
		justifyContent: 'space-between',
	},
	btnWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 4,
		paddingVertical: 12,
		paddingHorizontal: 5,
	},
	radioSvg: {
		marginRight: 10,
	},
	marginTop: {
		marginTop: 12,
	},
	disabled: {
		opacity: 0.5,
	},
	content: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	textContent: {
		marginLeft: 26,
	},
	title: {
		fontSize: 14,
		color: '#0B0B0B',
	},
	description: {
		fontSize: 10,
		color: '#939393',
	},
	svg: {
		color: '#000',
	},
});
