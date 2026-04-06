import { AnimatePresence } from 'framer-motion';
import { Settings as SettingsIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import './App.css';
import SettingsModal from './components/SettingsModal';
import TabItem from './components/TabItem';
import TimerCircle from './components/TimerCircle';
import type { Mode, Settings } from './types';
import { formatTime } from './utils';

function App() {
	const [mode, setMode] = useState<Mode>('pomodoro');
	const [isActive, setIsActive] = useState(false);
	const [showSettings, setShowSettings] = useState(false);

	const [settings, setSettings] = useState<Settings>({
		durations: {
			pomodoro: 25,
			short: 5,
			long: 15,
		},
		font: 'sans',
		color: 'red',
	});

	const [timeLeft, setTimeLeft] = useState(settings.durations[mode] * 60);

	const handleModeChange = (newMode: Mode) => {
		setMode(newMode);
		setTimeLeft(settings.durations[newMode] * 60);
		setIsActive(false);
	};

	useEffect(() => {
		if (!isActive) return;

		const interval = setInterval(() => {
			setTimeLeft((prev) => {
				if (prev <= 1) {
					setIsActive(false);
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, [isActive]);

	const toggleTimer = () => {
		if (timeLeft === 0) {
			setTimeLeft(settings.durations[mode] * 60);
		}
		setIsActive(!isActive);
	};

	const applySettings = (newSettings: Settings) => {
		setSettings(newSettings);
		setTimeLeft(newSettings.durations[mode] * 60);
		setIsActive(false);
		setShowSettings(false);
	};

	return (
		<main className={`app-container font-${settings.font} accent-${settings.color}`}>
			<h1 className='logo'>pomodoro</h1>

			<div className='tab-container'>
				<TabItem
					mode='pomodoro'
					activeMode={mode}
					onClick={handleModeChange}
					label='pomodoro'
				/>
				<TabItem
					mode='short'
					activeMode={mode}
					onClick={handleModeChange}
					label='short break'
				/>
				<TabItem
					mode='long'
					activeMode={mode}
					onClick={handleModeChange}
					label='long break'
				/>
			</div>

			<TimerCircle
				timeLeft={timeLeft}
				maxTime={settings.durations[mode] * 60}
				isActive={isActive}
				onToggle={toggleTimer}
				formattedTime={formatTime(timeLeft)}
			/>

			<button
				className='settings-btn'
				onClick={() => setShowSettings(true)}>
				<SettingsIcon
					size={28}
					strokeWidth={2.5}
				/>
			</button>

			<AnimatePresence>
				{showSettings && (
					<SettingsModal
						currentSettings={settings}
						onClose={() => setShowSettings(false)}
						onApply={applySettings}
					/>
				)}
			</AnimatePresence>
		</main>
	);
}

export default App;
