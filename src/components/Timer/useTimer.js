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

	useEffect(() => {
		if (time === 0) {
			clearTimer();
		}
	}, [time]);

	const startCountDown = () => {
		timer.current = setInterval(() => {
			setTime(state => state - 1);
		}, 1000);
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

	const restartTimer = () => {
		clearTimer();
		setTime(initialTime);
		startCountDown();
	};

	return { time, restartTimer, convertSecondsToTime };
};
export default useTimer;
