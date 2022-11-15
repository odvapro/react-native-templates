# Accordion

| IOS | Android |
| --- | ------- |
| <img src="./gif/ios.gif" alt="ios error toast" width="325"> | <img src="./gif/android.gif" alt="android error toast" width="325"> |

### Пример Вызова

```jsx

<Accordion
  // Заголовок
  title={'Заголовок'} // => String (required)

  // Описание
  text={'Hello World'} // => String (required)

  // По умолчанию false, раскрывает сразу Accordion если передать true
  isOpen={false} // =>  Boolean (optional)

  // Объект стилей для контейнера спойлера
  style={{}} // => Object (optional)
/>
