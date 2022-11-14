# InputText

| IOS | Android |
| --- | ------- |
| <img src="./gif/ios.gif" alt="ios error toast" width="325"> | <img src="./gif/android.gif" alt="android error toast" width="325"> |

## Пример Вызова

В компонент в качестве доп. параметров можно передавать все стандартные параметры которые поддерживает **TextInput** в react-native
```jsx

<InputText
  // Текст который будет по умолчания при запуске приложения
  value={'Hello World'} // => optional (string)

  // Если false текст недоступен для редактирования. Значение по умолчанию равно true.
  editable={true} // => optional (bool)

  // Строка, которая будет отображаться перед вводом текста
  placeholder={'Введите текст'} // => optional (string)

  // Цвет placeholder текста
  placeholderTextColor={'#000'} // => optional (string)

  // Функция которая будет вызываться при вводе текста
  onChange={function} // => optional (function)

  // Функция которая будет вызываться при фокусе поля ввода
  onFocus={function} // => optional (function)

  // Функция которая будет вызываться при потере фокуса с поля ввода
  onBlur={function} // => optional (function)

  // Текст ошибки
  error={'Ошибка'} // => => optional (string)

  // Объект стилей для текста ошибки
  errorStyle={objStyle} // => optional (obj)

  // Текст для доп. информации
  prompt={'Доп информация'} // => => optional (string)

  // Объект стилей для доп. информации
  promptStyle={objStyle} // => optional (obj)

  // Svg иконка
  RightIcon={SVG} // => optional (jsx)

  // Объект стилей для svg иконки
  styleRightIcon={objStyle} // => optional (obj)

  // Объект стилей блока обертки
  inputWrapperStyle={objStyle} // => optional (obj)
  
  // Объект стилей поля ввода
  inputStyle={objStyle} // => optional (obj)
/>
