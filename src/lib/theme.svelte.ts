// export const DARK_MODE_KEY = 'll:dark-mode';
// export const DARK_MODE_DEFAULT = 1;
// export const mode = $state({
// 	mode: localStorage.getItem(DARK_MODE_KEY) || DARK_MODE_DEFAULT,
// 	toggle() {
// 		this.mode ^= 1;
// 		localStorage.setItem(DARK_MODE_KEY, this.mode as string);
// 		document.dispatchEvent(new CustomEvent('onDarkMode', { detail: mode }));
// 	},
// 	isDark() {
// 		return parseInt(this.mode as string, 10) === 1;
// 	}
// });

import { browser } from '$app/environment';

export const DARK_MODE_KEY = 'll:dark-mode';
export const DARK_MODE_DEFAULT = 1;

// Safely get the initial value during SSR
const initialMode = browser
	? (localStorage.getItem(DARK_MODE_KEY) ?? DARK_MODE_DEFAULT)
	: DARK_MODE_DEFAULT;

export const theme = $state({
	mode: Number(initialMode),
	toggle() {
		this.mode ^= 1;
		if (browser) {
			localStorage.setItem(DARK_MODE_KEY, String(this.mode));
			document.dispatchEvent(new CustomEvent('onDarkMode', { detail: this.mode }));
		}
	},
	isDark() {
		return Number(this.mode) === 1;
	}
});