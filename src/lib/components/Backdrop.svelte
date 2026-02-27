<div class="backdrop-container">
	<div class="backdrop"></div>
	<div class="backdrop alt"></div>
</div>

<style>
	.backdrop-container {
		height: 100%;
		width: 100%;
		position: absolute;
		background-color: var(--surface);
		transition: background-color 400ms ease-in-out;
	}

	.backdrop {
		position: absolute;
		top: 10%;
		left: 0%;
		height: 85svw;
		width: 85svw;
		border-radius: 50%;
		z-index: 0;
		background-color: var(--primary);
		filter: blur(20svw);
		opacity: 0.5;
		transition: background-color 400ms ease-in-out;
	}

	.alt {
		top: 50%;
		left: 30%;
		height: 55svw;
		width: 55svw;
		background-color: var(--secondary);
		transition: background-color 1s ease-in-out;
	}
</style>
