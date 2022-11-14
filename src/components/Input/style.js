import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	inputWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#E0E2E2',
		borderRadius: 10,
		paddingHorizontal: 12,
		minHeight: 56,
	},
	input: {
		flex: 1,
		fontSize: 16,
		color: '#000',
		paddingVertical: 16, // 16 (по одному от lineHeight)
	},
	disabled: {
		backgroundColor: '#f1f3f3',
	},
	disabledInput: {
		color: '#fff',
	},
	error: {
		borderColor: 'red',
	},
	focus: {
		borderColor: '#0f0542',
	},
	errorText: {
		marginTop: 12,
		color: 'tomato',
		fontSize: 14,
		lineHeight: 20,
		letterSpacing: 0.04,
		paddingHorizontal: 12,
	},
	promptText: {
		marginTop: 12,
		color: '#000',
		fontSize: 12,
		lineHeight: 16,
		letterSpacing: 0.04,
		paddingHorizontal: 12,
	},
});
