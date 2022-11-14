import React, { memo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { RadioBtnSvg } from '../../svg';
import { SvgXml } from 'react-native-svg';

const RadioGroup = ({
	data = [],
	currentOption = 0,
	onSelectOption,
	radioColor = '#EAEAEA',
	radioActiveColor = '#DE1212',
	radioStyle,
	containerStyle,
	radioContainerStyle,
	textContainerStyle,
	titleStyle,
	descriptionStyle,
}) => {
	const [currentOptionId, setCurrentOptionId] = useState(currentOption);

	const renderOption = (el, idx) => {
		const onSelect = () => {
			setCurrentOptionId(el.id);
			typeof onSelectOption === 'function' && onSelectOption(el.id, el);
		};

		const textContentStyle = !el?.svg
			? [styles.textContent, { marginLeft: 0 }]
			: styles.textContent;

		return (
			<TouchableOpacity
				style={[
					styles.btnWrapper,
					radioContainerStyle,
					idx > 0 && styles.marginTop,
					el.disabled && styles.disabled,
				]}
				key={`rBtn${el.id}${idx}`}
				activeOpacity={0.7}
				onPress={onSelect}
				disabled={el.disabled}
			>
				<RadioBtnSvg
					color={
						currentOptionId == el.id ? radioActiveColor : radioColor
					}
					style={[styles.radioSvg, radioStyle]}
				/>
				<View style={styles.content}>
					{!!el?.svg && <SvgXml style={styles.svg} xml={el?.svg} />}
					<View style={[textContentStyle, textContainerStyle]}>
						<Text style={[styles.title, titleStyle]}>
							{el.title}
						</Text>
						{!!el.description && (
							<Text
								style={[styles.description, descriptionStyle]}
							>
								{el.description}
							</Text>
						)}
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View style={[styles.container, containerStyle]}>
			{data.map(renderOption)}
		</View>
	);
};

export default memo(RadioGroup);
