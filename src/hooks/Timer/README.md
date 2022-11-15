# Timer

| IOS | Android |
| --- | ------- |
| <img src="./screenshots/ios timer.png" alt="ios timer" width="325"> | <img src="./screenshots/android timer.png" alt="android timer" width="325"> |

## Примеры
 
### Вызов

```jsx

const { time, restartTimer, convertSecondsToTime } = useTimer(initialValue);
// initialValue, начальное значение таймера, если ничего не передать будет 10 секунд
// time, время которое возвращает хук
// restartTimer, функция по перезапуску таймера
// convertSecondsToTime, функция которая выводит результат в виде MM:SS

const { time, restartTimer, convertSecondsToTime } = useTimer(10);

return (
	<View style={{ flex: 1 }}>
		<Text style={styles.time}>{convertSecondsToTime(time)}</Text>
		<Text style={styles.time}>{time}</Text>
		<TouchableOpacity
			onPress={restartTimer}
			style={{ width: 150, height: 150, backgroundColor: 'red' }}
		/>
	</View>
);
