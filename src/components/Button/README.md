# Button

<div>
	<img src="./screenshots/iOS button.png" alt="iOS buttons screenshot" width="325">
	<img src="./screenshots/Android button.png" alt="Android buttons screenshot" width="325">
</div>

## Примеры

###  Вызов

```jsx

<Button
	// Цвет текста
	color={'#fff'}

	// Фоновый цвет кнопки
	bgColor={'green'}

	// Толщина границ
	borderWidth={2}

	// Цвет границ
	borderColor={'#000'}

	
>
	Кнопка
</Button>



return (
	<View
		style={{
			flex: 1,
			justifyContent: "space-around",
			alignItems: "center",
		}}
	>
		<Button>Стандартная кнопка</Button>
		<Button disabled={true}>Отключенная</Button>
		<Button color={"#333"} bgColor={"ivory"}>
			Покрашенная
		</Button>
		<Button bgColor={"#555"} width={120} height={80} borderWidth={5}>
			С размерами и границами
		</Button>
		<Button
			color={"black"}
			iconStyle={{ width: 30, height: 30 }}
			icon={clear}
			bgColor={"white"}
		>
			С иконкой
		</Button>
	</View>
);
```

### Компонент

```jsx
import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

export const Button = (props) => {
	const onPress = () => {
		const { onPress } = props;
		onPress && onPress();
	};

	const {
		style,
		disabled,
		icon,
		iconStyle,
		borderWidth,
	} = props;
	const _styles = styles({
		color,
		bgColor,
		borderColor,
		width,
		height,
		fontSize,
		borderWidth,
	});

	return (
		<TouchableOpacity
			style={[_styles.container, style]}
			disabled={disabled}
			onPress={onPress}
		>
			{icon && <Image style={[_styles.icon, iconStyle]} source={icon} />}
			<Text style={_styles.text}>{props.children}</Text>
		</TouchableOpacity>
	);
};
```

### Проптайпы

```jsx
Button.propTypes = {
	color: PropTypes.string,
	bgColor: PropTypes.string,
	borderColor: PropTypes.string,
	borderWidth: PropTypes.number,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	icon: PropTypes.any,
	iconStyle: PropTypes.object,
	disabled: PropTypes.bool,
	onPress: PropTypes.func,
	fontSize: PropTypes.number,
	style: PropTypes.any,
};

Button.defaultProps = {
	disabled: false,
};
```
