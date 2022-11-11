import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	wrapper: {
		backgroundColor: '#fff',
		justifyContent: 'center',
		padding: 0,
		margin: 0,
	},
	slide: {
		width: '100%',
		height: 252,
	},
	slideImg: {
		flex: 1,
		resizeMode: 'cover',
	},
	paginationWrapper: {
		width: '100%',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'absolute',
		bottom: 10,
	},
	paginationItem: {
		width: 10,
		height: 10,
		borderRadius: 5,
		marginHorizontal: 6,
		backgroundColor: '#fff4',
	},
	paginationItemActive: {
		backgroundColor: '#Ff8',
	},
});
