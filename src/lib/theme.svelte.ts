import { browser } from '$app/environment';

export const DARK_MODE_KEY = 'll:dark-mode';
export const DARK_MODE_DEFAULT = 1;

function setMode(mode: number) {
	document.documentElement.classList.toggle('dark', mode === 1);
	document.body.classList.toggle('dark', mode === 1);
	document.dispatchEvent(new CustomEvent('onModeChange', { detail: mode }));
}

export const theme = $state({
		mode: DARK_MODE_DEFAULT,
		init() {
			if (!browser) return;
			this.mode = Number(localStorage.getItem(DARK_MODE_KEY) ?? DARK_MODE_DEFAULT);
			setMode(this.mode);
		},
		toggle() {
			this.mode ^= 1;
			if (!browser) return;
			localStorage.setItem(DARK_MODE_KEY, String(this.mode));
			setMode(this.mode);
		},
		isDark() {
			return Number(this.mode) === 1;
		}
	})
;