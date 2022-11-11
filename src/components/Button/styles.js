import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#000',
		borderColor: '#000',
		borderWidth: 0,
		width: 200,
		height: 56,
		borderRadius: 28,
	},

	text: {
		color: '#fff',
		fontSize: 16,
	},
	icon: {
		marginRight: 10,
		alignSelf: 'center',
	},
});
