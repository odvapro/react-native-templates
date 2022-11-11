import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {},
	inputWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#EAEAEA',
		borderRadius: 4,
		paddingHorizontal: 4,
		minHeight: 40,
	},
	input: {
		height: '100%',
		fontSize: 11,
		lineHeight: 16,
		// paddingVertical: 0,
		paddingHorizontal: 8,
		color: 'red',
		flex: 1,
		paddingVertical: 12,
	},
	error: {
		borderColor: 'red',
	},
	errorText: {
		color: 'red',
		fontSize: 13,
		lineHeight: 14,
	},
});
