# Button

<div>
	<img src="./screenshots/iOS button.png" alt="iOS buttons screenshot" width="325">
	<img src="./screenshots/Android button.png" alt="Android buttons screenshot" width="325">
</div>

## Примеры

###  Вызов

```jsx

<RadioGroup
	// Массив данных
	data={[el, el, el]} // => required
	//el это объект куда нужно записывать следующие параметры
	// el = {
	//		id: number, 		-> id элемента
	//		disabled: bool, 	-> элемент который будет не активен
	//		title: string, 		-> заголовок элемента
	//		description: string	-> описание элемента
	// }
	
	// Элемент который будет активен при запуске приложения
	currentOption={2} // => optional

	// Метод который отработает при клике на чекбокс
	onSelectOption={() => {}} // => optional
/>
