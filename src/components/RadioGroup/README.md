# RadioGroup

| IOS | Android |
| --- | ------- |
| <img src="./gif/ios.gif" alt="ios error toast" width="325"> | <img src="./gif/android.gif" alt="android error toast" width="325"> |


## Пример Вызов

```jsx

<RadioGroup
  // Массив данных 
  data={[el, el, el]} // => required (array)
  //el это объект куда нужно записывать следующие параметры
  // el = {
  //		id: number, 		-> id элемента (required)
  //		disabled: bool, 	-> элемент который будет не активен (optional)
  //		title: string, 		-> заголовок элемента (optional)
  //		description: string	-> описание элемента (optional)
  // }
  
  // Элемент который будет активен при запуске приложения
  currentOption={2} // => Number (optional)

  // Метод который отработает при клике на чекбокс
  onSelectOption={() => {}} // => Function (optional)

  // Цвет обводки у радио кнопки
  radioColor={'#EAEAEA'} // => String (optional)

  // Цвет обводки у радио кнопки в состоянии active
  radioActiveColor={'#DE1212'} // => String (optional)

  // Объект стилей для контейнера где находятся радио кнопки
  containerStyle={objStyle} // => Object (optional)

  // Объект стилей для контейнера радио кнопки
  radioContainerStyle={objStyle} // => Object (optional)

  // Объект стилей для svg иконки у радио кнопки
  radioStyle={objStyle} // => Object (optional)

  // Объект стилей для обертки текста
  textContainerStyle={objStyle} // => Object (optional)

  // Объект стилей для заголовка
  titleStyle={objStyle} // => Object (optional)

  // Объект стилей для описания
  descriptionStyle={objStyle} // => Object (optional)
/>
