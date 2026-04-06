interface NumberInputProps {
	id: string
	label: string
	value: number
	min?: number
	max?: number
	onChange: (val: number) => void
}

const NumberInput = ({ label, value, min = 1, max = 99, onChange }: NumberInputProps) => {
	const handleIncr = () => {
		if (value < max) onChange(value + 1)
	}

	const handleDecr = () => {
		if (value > min) onChange(value - 1)
	}

	return (
		<div className="input-group">
			<label className="input-label">{label}</label>
			<div className="number-input-wrapper">
				<input
					type="number"
					value={value}
					min={min}
					max={max}
					onChange={(e) => onChange(Math.max(min, Math.min(max, parseInt(e.target.value) || min)))}
				/>
				<div className="spinners">
					<button onClick={handleIncr} className="spinner-btn" aria-label="Increment">
						<svg width="14" height="7">
							<path d="M1 6l6-4 6 4" stroke="#1E213F" strokeWidth="2" fill="none" opacity={0.25} />
						</svg>
					</button>
					<button onClick={handleDecr} className="spinner-btn" aria-label="Decrement">
						<svg width="14" height="7">
							<path d="M1 1l6 4 6-4" stroke="#1E213F" strokeWidth="2" fill="none" opacity={0.25} />
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}

export default NumberInput
