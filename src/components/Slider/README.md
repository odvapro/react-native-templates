# Accordion

<div>
	<p>IOS</p>
	<img src="./gif/ios.gif" alt="ios error toast" width="325">
	<p>Android</p>
	<img src="./gif/android.gif" alt="android error toast" width="325">
</div>

###  Вызов

```jsx
<Slider
	//массив ссылок изображений
	slides={['path', 'path']}

	// активный слайд во время запуска
	currentSlide={1}

	// функция которая отработает при клике на слайд
	onSlidePress={
		() => Alert.alert('Отработала функция при клике на слайд')
	}

	// объект стилей для контейнера
	containerStyle={objStyle}

	// объект стилей contentContainerStyle для ScrollView
	sliderStyle={objStyle}

	// объект стилей для контейнера dots-ов
	dotsContainer={objStyle}
	
	// объект стилей для dots-ов
	dotsStyle={objStyle}

	// объект стилей для активного dots-а
	currentDotsStyle={objStyle}
/>
```
