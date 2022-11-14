import React, { memo, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style';

const Input = ({
	value,
	placeholder = 'Введите текст',
	placeholderTextColor = '#000',
	editable,
	inputWrapperStyle,
	errorStyle,
	inputStyle,
	promptStyle,
	error,
	prompt,
	RightIcon,
	styleRightIcon,
	onChange = () => {},
	onFocus = () => {},
	onBlur = () => {},
	...props
}) => {
	const [isFocus, setIsFocus] = useState(false);

	const inputWrapper = error
		? [styles.inputWrapper, styles.error, inputWrapperStyle]
		: isFocus
		? [styles.inputWrapper, styles.focus, inputWrapperStyle]
		: !editable
		? [styles.inputWrapper, styles.disabled, inputWrapperStyle]
		: [styles.inputWrapper, inputWrapperStyle];

	const input = !editable
		? [styles.input, styles.disabledInput, inputStyle]
		: [styles.input, inputStyle];

	const onInputFocus = () => {
		setIsFocus(true);
		onFocus();
	};

	const onInputBlur = () => {
		setIsFocus(false);
		onBlur();
	};

	return (
		<>
			<View style={inputWrapper}>
				<TextInput
					placeholder={placeholder}
					placeholderTextColor={placeholderTextColor}
					value={value}
					style={input}
					autoCorrect={false}
					contextMenuHidden={true}
					onChange={onChange}
					onFocus={onInputFocus}
					onBlur={onInputBlur}
					editable={editable}
					{...props}
				/>
				{RightIcon && (
					<RightIcon
						width={24}
						height={24}
						style={[styles.rightIcon, styleRightIcon]}
					/>
				)}
			</View>
			{!!error && (
				<Text style={[styles.errorText, errorStyle]}>{error}</Text>
			)}
			{!!prompt && (
				<Text style={[styles.promptText, promptStyle]}>{prompt}</Text>
			)}
		</>
	);
};

export default memo(Input);
