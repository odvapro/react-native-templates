# Button

<div>
  <img src="./screenshots/iOS button.png" alt="iOS buttons screenshot" width="325">
  <img src="./screenshots/Android button.png" alt="Android buttons screenshot" width="325">
</div>

## Примеры

###  Вызов

Компонент *Button* поддерживает все основные параметры TouchableOpacity
```jsx
<Button
  // Текст кнопки
  text={'Hello'} // => String (optional)

  // Определяет, какой должна быть непрозрачность обернутого вида при активном касании. Значение по умолчанию равно 0.2.
  activeOpacity={0.2} // => Number (optional)
  
  // Функция которая будет вызываться при клике на кнопку
  onPress={() => {}} // => Function (optional)

  // Сделать кнопку не кликабельной, по умолчанию false
  disabled={false} // => Boolean (optional)

  // Путь к иконке
  icon={'path'} // => String (optional)

  // Объект стилей для иконки
  iconStyle={objStyle} // => Object (optional)

  // Объект стилей для кнопки
  styleBtn={objStyle} // => Object (optional)
  
  // Объект стилей для текста
  styleText={objStyle} // => Object (optional)
/>

```
