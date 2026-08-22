export interface AnimateConfig {
	selector: string;
	gridSize?: number;
	gridColor?: string;
	particleCount?: number;
	particleSpeedMin?: number;
	particleSpeedMax?: number;
	particleColors?: string[];
	trailLength?: number;
	backgroundColor?: string;
	rippleDuration?: number;
	rippleMaxRadius?: number;
}

export function animate(_config: AnimateConfig) {

	const canvas = document.querySelector(_config.selector) as HTMLCanvasElement;
	const ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

// Configuration object
	const config = {
		gridSize: _config?.gridSize ?? 40,
		gridColor: _config?.gridColor ?? '#334155',
		particleCount: _config?.particleCount ?? 50,
		particleSpeedMin: _config?.particleSpeedMin ?? 0.5,
		particleSpeedMax: _config?.particleSpeedMax ?? 5,
		particleColors: _config?.particleColors ?? [ '#ffffff', '#64748b', '#94a3b8' ],
		trailLength: _config?.trailLength ?? 100,
		backgroundColor: _config?.backgroundColor ?? '#0f172a',
		rippleDuration: _config?.rippleDuration ?? 2000,
		rippleMaxRadius: _config?.rippleMaxRadius ?? 200
	};

// Grid tracking system
	const occupiedLines = {
		horizontal: new Set(),
		vertical: new Set()
	};

// For random hacking characters
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;\':,./<>?';

	function createGrid() {
		ctx.fillStyle = config.backgroundColor;
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
		gradient.addColorStop(0, config.gridColor);
		gradient.addColorStop(1, config.gridColor + '00');
		ctx.strokeStyle = gradient;

		for (let y = 0; y < canvas.height; y += config.gridSize) {
			ctx.beginPath();
			ctx.moveTo(0, y);
			ctx.lineTo(canvas.width, y);
			ctx.stroke();
		}

		for (let x = 0; x < canvas.width; x += config.gridSize) {
			ctx.beginPath();
			ctx.moveTo(x, 0);
			ctx.lineTo(x, canvas.height);
			ctx.stroke();
		}
	}

	class Particle {
		constructor() {
			this.color = config.particleColors[Math.floor(Math.random() * config.particleColors.length)];
			this.speed = Math.random() * (config.particleSpeedMax - config.particleSpeedMin) + config.particleSpeedMin;
			this.reset();
		}

		update() {
			this.trail.push({ x: this.x, y: this.y });
			if (this.trail.length > config.trailLength) this.trail.shift();

			if (this.active) {
				if (this.direction === 'horizontal') {
					this.x += this.speed;
					if (this.x > canvas.width) {
						this.active = false;
						occupiedLines.horizontal.delete(this.y);
					}
				} else {
					this.y += this.speed;
					if (this.y > canvas.height) {
						this.active = false;
						occupiedLines.vertical.delete(this.x);
					}
				}
			} else {
				const allTrailPointsOffScreen = this.trail.every(point =>
					(this.direction === 'horizontal' && point.x > canvas.width) ||
					(this.direction === 'vertical' && point.y > canvas.height)
				);

				if (allTrailPointsOffScreen) {
					this.reset();
				}
			}
		}

		draw() {
			for (let i = 0; i < this.trail.length; i++) {
				const point = this.trail[i];
				const alpha = (i / this.trail.length);
				ctx.fillStyle = this.color.replace('1)', `${alpha})`);
				ctx.beginPath();
				ctx.arc(point.x, point.y, 0.4, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		findAvailableLine() {
			const maxAttempts = 100;
			let attempts = 0;

			while (attempts < maxAttempts) {
				if (Math.random() > 0.5) {
					// Try horizontal
					const y = Math.round(Math.random() * canvas.height / config.gridSize) * config.gridSize;
					if (!occupiedLines.horizontal.has(y)) {
						this.direction = 'horizontal';
						this.x = 0;
						this.y = y;
						occupiedLines.horizontal.add(y);
						return true;
					}
				} else {
					// Try vertical
					const x = Math.round(Math.random() * canvas.width / config.gridSize) * config.gridSize;
					if (!occupiedLines.vertical.has(x)) {
						this.direction = 'vertical';
						this.x = x;
						this.y = 0;
						occupiedLines.vertical.add(x);
						return true;
					}
				}
				attempts++;
			}
			return false;
		}

		reset() {
			if (this.findAvailableLine()) {
				this.trail = [];
				this.active = true;
				this.speed = Math.random() * (config.particleSpeedMax - config.particleSpeedMin) + config.particleSpeedMin;
			} else {
				this.active = false;
				this.trail = [];
			}
		}
	}

	const particles = Array(config.particleCount).fill().map(() => new Particle());

// Ripple effect handler
	let ripples = [];

	class Ripple {
		constructor(x, y) {
			this.x = x;
			this.y = y;
			this.radius = 0;
			this.maxRadius = config.rippleMaxRadius;
			this.startTime = Date.now();
		}

		update() {
			const elapsed = Date.now() - this.startTime;
			this.radius = (elapsed / config.rippleDuration) * this.maxRadius;
		}

		draw() {
			const alpha = 1 - (this.radius / this.maxRadius);
			ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
			ctx.beginPath();
			// ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
			ctx.stroke();

			// Draw random characters along the ripple
			if (Math.random() < 4.3) { // Random chance to place a symbol
				ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
				ctx.font = '16px "PlusJarkataSans", sans-serif';
				const characters = [ 'Javascript', 'Typescript', 'Go', 'Rust', 'React', 'Angular' ];
				const char = characters[Math.floor(Math.random() * characters.length)];
				ctx.fillText(char, this.x + (Math.random() - 0.5) * this.radius * 2, this.y + (Math.random() - 0.5) * this.radius * 2);
			}
		}

		isComplete() {
			return this.radius >= this.maxRadius;
		}
	}

	function animate() {
		createGrid();

		particles.forEach(particle => {
			particle.update();
			particle.draw();
		});

		// Update and draw ripples
		ripples = ripples.filter(ripple => !ripple.isComplete()); // Remove completed ripples
		ripples.forEach(ripple => {
			ripple.update();
			ripple.draw();
		});

		requestAnimationFrame(animate);
	}

// Handle window resize
	window.addEventListener('resize', () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		// Clear occupied lines
		occupiedLines.horizontal.clear();
		occupiedLines.vertical.clear();

		// Reset all particles
		particles.forEach(particle => particle.reset());
	});

// Add ripple on click
	canvas.addEventListener('click', (event) => {
		const x = event.clientX;
		const y = event.clientY;
		ripples.push(new Ripple(x, y));
	});


	animate();
}

