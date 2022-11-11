import React, { memo } from 'react';
import { View, TextInput, Text, Platform } from 'react-native';
import styles from './style';

const InputText = ({
	value,
	placeholder = 'Введите текст',
	onChange,
	textInputStyle,
	inputWrapperStyle,
	style,
	error,
	Preppend,
	Append,
	multiline = false,
	editable = true,
	numberOfLines = 1,
	onFocus,
	keyboardType = 'default', // default | email-address | numeric | url | phone-pad
	textAlignVertical = 'center', // auto | top | bottom | center
	onLayout,
	noErrorText,
	maxLength,
	searchInput,
	placeholderTextColor = '#000',
}) => {
	const currentInputHeight = 48;

	const containerStyle = { ...styles.container, ...style };
	const inputStyle = {
		...styles.input,
		...textInputStyle,
		...searchInput,
		...Platform.select({
			ios: { height: currentInputHeight },
			android: { height: currentInputHeight },
		}),
	};
	const inputWrapper = error
		? [styles.inputWrapper, styles.error, inputWrapperStyle]
		: [styles.inputWrapper, inputWrapperStyle];

	return (
		<View style={containerStyle} onLayout={onLayout}>
			<View style={inputWrapper}>
				{!!Preppend && <Preppend />}
				<TextInput
					placeholder={placeholder}
					value={value}
					onChangeText={onChange}
					style={inputStyle}
					placeholderTextColor={placeholderTextColor}
					multiline={multiline}
					numberOfLines={numberOfLines}
					// enablesReturnKeyAutomatically
					onFocus={onFocus}
					keyboardType={keyboardType}
					textAlignVertical={textAlignVertical}
					editable={editable}
					maxLength={maxLength}
				/>
				{!!Append && <Append />}
			</View>
			{!!error && !noErrorText && (
				<View style={{ marginTop: !!error ? 9 : 0 }}>
					<Text style={styles.errorText}>{error}</Text>
				</View>
			)}
		</View>
	);
};

export default memo(InputText);
