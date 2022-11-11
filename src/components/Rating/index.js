import React, { useState, memo } from 'react';
import { View, Pressable } from 'react-native';
import styles from './style';
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';

const Rating = ({
	rating = 0,
	readonly = false,
	starsCount = 5,
	starSize = { width: '26', height: '24' },
	fillColor = '#DE1212',
	color = '#C9C9C9',
	style,
	onRatingChange,
}) => {
	const stars = new Array(starsCount).fill(null);
	const [curRating, setCurRating] = useState(rating);

	const onStarPress = newRating => {
		setCurRating(newRating);
		onRatingChange && onRatingChange(newRating);
	};

	const renderStar = (_, idx) => {
		const intStars = Math.trunc(curRating);
		const realSars = (curRating % 1).toFixed(2) * 100;
		const offsetVal =
			intStars >= idx + 1
				? '100%'
				: intStars + (realSars ? 1 : 0) < idx + 1
				? '0%'
				: `${realSars}%`;
		return (
			<Pressable
				key={`star${idx}`}
				onPress={() => onStarPress(idx + 1)}
				style={styles.starWrapper}
				disabled={readonly}
			>
				<Svg
					width={starSize.width}
					height={starSize.height}
					viewBox='0 0 26 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<Defs>
						<LinearGradient
							id={'grad'}
							x1={'0%'}
							y1={'50%'}
							x2={'100%'}
							y2={'50%'}
						>
							<Stop
								offset={offsetVal}
								stopColor={fillColor}
								stopOpacity={'1'}
							/>
							<Stop
								offset={offsetVal}
								stopColor={color}
								stopOpacity={'1'}
							/>
						</LinearGradient>
					</Defs>
					<Path
						d={
							'M12.5245 0.463524C12.6741 0.00286901 13.3259 0.00286984 13.4755 0.463525L16.0309 8.32827C16.0979 8.53428 16.2899 8.67376 16.5065 8.67376H24.776C25.2603 8.67376 25.4617 9.29357 25.0698 9.57827L18.3797 14.439C18.2044 14.5663 18.1311 14.792 18.1981 14.998L20.7535 22.8627C20.9031 23.3234 20.3759 23.7064 19.984 23.4217L13.2939 18.5611C13.1186 18.4337 12.8814 18.4337 12.7061 18.5611L6.01595 23.4217C5.6241 23.7064 5.09686 23.3234 5.24653 22.8627L7.80194 14.998C7.86888 14.792 7.79555 14.5663 7.62031 14.439L0.930157 9.57827C0.5383 9.29357 0.739688 8.67376 1.22405 8.67376H9.49353C9.71015 8.67376 9.90212 8.53428 9.96906 8.32827L12.5245 0.463524Z'
						}
						fill={'url(#grad)'}
					/>
				</Svg>
			</Pressable>
		);
	};

	return (
		<View style={{ ...styles.wrapper, ...style }}>
			{stars.map(renderStar)}
		</View>
	);
};

export default memo(Rating);
