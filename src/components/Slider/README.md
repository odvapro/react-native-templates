# Slider

| IOS | Android |
| --- | ------- |
| <img src="./gif/ios.gif" alt="ios error toast" width="325"> | <img src="./gif/android.gif" alt="android error toast" width="325"> |

### Пример Вызова

```jsx
<Slider
  //массив ссылок изображений
  slides={['path', 'path']} // => Array (required)

  // активный слайд во время запуска
  currentSlide={1} // => Number (optional)

  // функция которая отработает при клике на слайд 
  onSlidePress={function} // => Function (optional)

  // объект стилей для контейнера
  containerStyle={objStyle} // => Object (optional)

  // объект стилей contentContainerStyle для ScrollView
  sliderStyle={objStyle} // => Object (optional)

  // объект стилей для контейнера dots-ов
  dotsContainerStyle={objStyle} // => Object (optional)
  
  // объект стилей для dots-ов
  dotsStyle={objStyle} // => Object (optional)

  // объект стилей для активного dots-а 
  currentDotsStyle={objStyle} // => Object (optional)
/>
```
