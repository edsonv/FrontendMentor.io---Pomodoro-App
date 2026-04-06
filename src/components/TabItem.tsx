import type { Mode } from '../types';

interface TabItemProps {
	mode: Mode;
	activeMode: Mode;
	onClick: (mode: Mode) => void;
	label: string;
}

const TabItem = ({ mode, activeMode, onClick, label }: TabItemProps) => (
	<button
		type='button'
		role='tab'
		aria-selected={activeMode === mode}
		className={`tab-btn ${activeMode === mode ? 'active' : ''}`}
		onClick={() => onClick(mode)}>
		{label}
	</button>
);

export default TabItem;
