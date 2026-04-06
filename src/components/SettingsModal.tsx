import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import type { Color, Font, Mode, Settings } from '../types';
import NumberInput from './NumberInput';

interface SettingsModalProps {
	currentSettings: Settings;
	onClose: () => void;
	onApply: (s: Settings) => void;
}

const SettingsModal = ({ currentSettings, onClose, onApply }: SettingsModalProps) => {
	const [tempSettings, setTempSettings] = useState<Settings>({
		...currentSettings,
		// durations: { ...currentSettings.durations },
	});

	const handleDurationChange = (m: Mode, val: number) => {
		setTempSettings({
			...tempSettings,
			durations: { ...tempSettings.durations, [m]: val },
		});
	};

	const fonts: Font[] = ['sans', 'serif', 'mono'];
	const colors: Color[] = ['red', 'teal', 'pink'];

	return (
		<div className='modal-overlay'>
			<motion.div
				className={`modal-content font-${tempSettings.font} accent-${tempSettings.color}`}
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.8, opacity: 0 }}>
				<header className='modal-header'>
					<h2>Settings</h2>
					<button
						className='close-btn'
						onClick={onClose}>
						<X
							size={20}
							strokeWidth={3}
						/>
					</button>
				</header>

				<section className='settings-section'>
					<h3 className='section-title'>TIME (MINUTES)</h3>
					<div className='time-inputs'>
						{(['pomodoro', 'short', 'long'] as Mode[]).map((m) => (
							<NumberInput
								key={m}
								id={m}
								label={m === 'short' ? 'short break' : m === 'long' ? 'long break' : m}
								value={tempSettings.durations[m]}
								onChange={(val) => handleDurationChange(m, val)}
							/>
						))}
					</div>
				</section>

				<section className='settings-section row-section'>
					<h3 className='section-title'>FONT</h3>
					<div className='option-selectors'>
						{fonts.map((f) => (
							<button
								key={f}
								className={`font-select ${tempSettings.font === f ? 'active' : ''} font-${f}`}
								onClick={() => setTempSettings({ ...tempSettings, font: f })}>
								Aa
							</button>
						))}
					</div>
				</section>

				<section className='settings-section row-section border-none'>
					<h3 className='section-title'>COLOR</h3>
					<div className='option-selectors'>
						{colors.map((c) => (
							<button
								key={c}
								className={`color-select accent-${c} ${tempSettings.color === c ? 'active' : ''}`}
								onClick={() => setTempSettings({ ...tempSettings, color: c })}>
								{tempSettings.color === c && <span className='checkmark'>✓</span>}
							</button>
						))}
					</div>
				</section>

				<button
					className='apply-btn'
					onClick={() => onApply(tempSettings)}>
					Apply
				</button>
			</motion.div>
		</div>
	);
};

export default SettingsModal;
