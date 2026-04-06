export type Mode = 'pomodoro' | 'short' | 'long'
export type Font = 'sans' | 'serif' | 'mono'
export type Color = 'red' | 'teal' | 'pink'

export interface Settings {
	durations: Record<Mode, number>
	font: Font
	color: Color
}
