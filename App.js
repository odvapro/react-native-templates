import React, { useRef } from 'react';
import { Alert, SafeAreaView, ScrollView, Text } from 'react-native';
import Slider from './src/components/Slider';

import style from './style';

const App = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView style={style.wrapper}>
				<Slider
					//массив ссылок изображений
					slides={[
						'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701372504.jpg',
						'https://i.pinimg.com/originals/b5/10/1c/b5101ca3aced1afa053d71572a5bd8ce.jpg',
					]} // => required
					// активный слайд во время запуска
					currentSlide={0} // => optional
					// функция которая отработает при клике на слайд
					onSlidePress={
						// => optional
						() =>
							Alert.alert('Отработала функция при клике на слайд')
					}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
