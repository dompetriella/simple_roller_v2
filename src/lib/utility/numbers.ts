export const clampValue = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

export const generateRandomInt = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

export const getArraySum = (array: number[]) => array.reduce((a, c) => a + c, 0);
