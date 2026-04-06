interface TimerCircleProps {
	timeLeft: number
	maxTime: number
	isActive: boolean
	onToggle: () => void
	formattedTime: string
}

const TimerCircle = ({ timeLeft, maxTime, isActive, onToggle, formattedTime }: TimerCircleProps) => {
	const progress = (timeLeft / maxTime) * 100
	const radius = 160
	const circumference = 2 * Math.PI * radius
	const dashOffset = circumference * (1 - progress / 100)

	return (
		<div className="timer-wrapper">
			<div className="timer-outer-circle">
				<svg className="timer-svg" width="340" height="340" viewBox="0 0 340 340">
					<circle
						className="timer-progress-bg"
						cx="170"
						cy="170"
						r={radius}
						fill="transparent"
						stroke="transparent"
						strokeWidth="10"
					/>
					<circle
						className="timer-progress"
						cx="170"
						cy="170"
						r={radius}
						strokeDasharray={circumference}
						strokeDashoffset={dashOffset}
						strokeLinecap="round"
					/>
				</svg>
				<div className="timer-inner-content">
					<h2 className="timer-display">{formattedTime}</h2>
					<button className="timer-toggle" onClick={onToggle}>
						{isActive ? 'PAUSE' : timeLeft === 0 ? 'RESTART' : 'START'}
					</button>
				</div>
			</div>
		</div>
	)
}

export default TimerCircle
