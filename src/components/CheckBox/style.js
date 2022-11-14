import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	btn: {
		width: 50,
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 8,
	},
	borderNone: {
		borderWidth: 0,
		borderColor: 'transparent',
	},
	checkBox: {
		width: '100%',
		height: '100%',
		borderRadius: 7,
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
		borderWidth: 0,
		borderRadius: 5,
	},
	disabledCheckedStyle: {
		color: 'transparent',
	},
});
