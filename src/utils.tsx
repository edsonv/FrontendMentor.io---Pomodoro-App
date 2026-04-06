export const formatTime = (seconds: number) => {
	const mins = Math.floor(seconds / 60);
	const secs = seconds % 60;
	return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const toIsoDuration = (seconds: number): string => {
	const hrs = Math.floor(seconds / 3600);
	const mins = Math.floor((seconds % 3600) / 60);
	const secs = seconds % 60;
	// Build parts only when needed to keep string compact
	const parts = `${hrs ? `${hrs}H` : ''}${mins ? `${mins}M` : ''}${secs ? `${secs}S` : ''}`;
	return `PT${parts || '0S'}`;
};
