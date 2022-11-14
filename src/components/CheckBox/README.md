# CheckBox

| IOS | Android |
| --- | ------- |
| <img src="./gif/ios.gif" alt="ios error toast" width="325"> | <img src="./gif/android.gif" alt="android error toast" width="325"> |

### Пример Вызова

```jsx

<CheckBox
  // Заголовок чекбокса (string)
  title={'Заголовок'} // => optional

  // Состояние чекбокса (bool)
  checked={false} // => optional

  // чекбокс не активен и на него нельзя кликнуть
  disabled={false}

  // svg иконка (jsx)
  svhIcon={svg} // => optional

  // функция которая отработает при состоянии checked (function)
  onPressChecked={function} // => optional

  // функция которая отработает при состоянии not checked (function)
  onPressNotChecked={function} // => optional

  // объект стилей для заголовка (obj)
  titleStyle={objStyle} // => optional

  // объект стилей при состоянии checked (obj)
  activeCheckedStyle={objStyle} // => optional

  // объект стилей при состоянии checked (obj)
  activeCheckedStyle={objStyle } // => optional

  // объект стилей для обертки (obj)
  checkboxInnerStyle={objStyle} // => optional
/>
