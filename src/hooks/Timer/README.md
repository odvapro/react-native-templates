# Timer

<div>
<p>IOS</p>
	<img src="./screenshots/ios timer.png" alt="ios timer" width="325">
<p>Android</p>
	<img src="./screenshots/android timer.png" alt="android timer" width="325">
</div>

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
```

### Хук

```jsx

import { useEffect, useRef, useState } from 'react';

const useTimer = (initialTime = 10) => {
	const [time, setTime] = useState(initialTime);
	const timer = useRef(null);
	useEffect(() => {
		startCountDown();
		return () => {
			clearInterval(timer?.current);
		};
	}, []);

	const startCountDown = () => {
		timer.current = setInterval(() => {
			setTime(state => state - 1);
		}, 1000);
	};
	useEffect(() => {
		if (time === 0) {
			clearTimer();
		}
	}, [time]);

	const restartTimer = () => {
		clearTimer();
		setTime(initialTime);
		startCountDown();
	};

	const convertSecondsToTime = seconds => {
		const time = new Date(0);
		time.setSeconds(+seconds);

		return time.toISOString().substring(14, 19);
	};

	const clearTimer = () => {
		clearInterval(timer?.current);
		setTime(0);
	};

	return { time, restartTimer, convertSecondsToTime };
};
export default useTimer;


```

