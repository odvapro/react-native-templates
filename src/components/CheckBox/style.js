import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {},
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	btn: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	checkBox: {
		border: 'red',
		borderWidth: 1,
		borderRadius: 5,
	},
	title: {
		marginLeft: 8,
		color: '#1D1F22',
		fontSize: 14,
		flex: 1,
	},
	error: {
		color: '#D94F3D',
		marginTop: 9,
	},
	activeCheckedStyle: {
		color: '#000',
	},
	disabledCheckedStyle: {
		color: 'transparent',
	},
});
