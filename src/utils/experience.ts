const START_YEAR = 2013;
const START_MONTH = 8; // September
const FINTECH_START_YEAR = 2022;
const FINTECH_START_MONTH = 4; // May

export function getYearsSince(startYear = START_YEAR, startMonth = START_MONTH) {
	const today = new Date();
	let years = today.getFullYear() - startYear;
	const monthDiff = today.getMonth() - startMonth;

	if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < 1)) {
		years -= 1;
	}

	return years;
}

export function getMonthsSince(startYear = START_YEAR, startMonth = START_MONTH) {
	const today = new Date();
	const totalMonths = (today.getFullYear() - startYear) * 12 + (today.getMonth() - startMonth);
	return totalMonths >= 0 ? totalMonths : 0;
}

export function formatYearsExperience(years: number) {
	if (years <= 0) return 'kurang dari setahun';
	return `${years}+ tahun`;
}

export const TOTAL_EXPERIENCE_YEARS = Math.max(0, getYearsSince(START_YEAR, START_MONTH));
export const FINTECH_EXPERIENCE_YEARS = Math.max(
	0,
	getYearsSince(FINTECH_START_YEAR, FINTECH_START_MONTH),
);
