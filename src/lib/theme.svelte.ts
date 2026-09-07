import { browser } from '$app/environment';

export const DARK_MODE_KEY = 'll:dark-mode';
export const DARK_MODE_DEFAULT = 1;

export const theme = $state({
		mode: DARK_MODE_DEFAULT,
		init() {
			if (!browser) return;
			this.mode = Number(localStorage.getItem(DARK_MODE_KEY) ?? DARK_MODE_DEFAULT);
			document.documentElement.classList.toggle('dark', this.mode === 1);
			document.dispatchEvent(new CustomEvent('onModeChange', { detail: this.mode }));

		},
		toggle() {
			this.mode ^= 1;
			if (!browser) return;
			localStorage.setItem(DARK_MODE_KEY, String(this.mode));
			document.documentElement.classList.toggle('dark', this.mode === 1);
			document.dispatchEvent(new CustomEvent('onModeChange', { detail: this.mode }));
		},
		isDark() {
			return Number(this.mode) === 1;
		}
	})
;