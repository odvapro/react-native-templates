import React, { memo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { RadioBtnSvg } from '../../svg';
import { SvgXml } from 'react-native-svg';

const RadioGroup = ({
	data = [],
	currentOption = 0,
	onSelectOption,
	style,
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
				style={[styles.btnWrapper, idx > 0 && styles.marginTop]}
				key={`rBtn${el.id}${idx}`}
				activeOpacity={0.7}
				onPress={onSelect}
				disabled={el.disabled}
			>
				<RadioBtnSvg
					color={currentOptionId == el.id ? '#DE1212' : '#EAEAEA'}
					style={styles.radioSvg}
				/>
				<View style={styles.content}>
					{!!el?.svg && <SvgXml style={styles.svg} xml={el?.svg} />}
					<View style={textContentStyle}>
						<Text style={styles.title}>{el.title}</Text>
						{!!el.description && (
							<Text style={styles.description}>
								{el.description}
							</Text>
						)}
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View style={[styles.container, style]}>{data.map(renderOption)}</View>
	);
};

export default memo(RadioGroup);
