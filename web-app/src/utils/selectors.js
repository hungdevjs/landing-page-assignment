export const monthOptions = [
  { label: '01 - Jan', value: 1 },
  { label: '02 - Feb', value: 2 },
  { label: '03 - Mar', value: 3 },
  { label: '04 - Apr', value: 4 },
  { label: '05 - May', value: 5 },
  { label: '06 - Jun', value: 6 },
  { label: '07 - Jul', value: 7 },
  { label: '08 - Aug', value: 8 },
  { label: '09 - Sep', value: 9 },
  { label: '10 - Oct', value: 10 },
  { label: '11 - Nov', value: 11 },
  { label: '12 - Dec', value: 12 },
];

const currentYear = new Date().getFullYear();
export const yearOptions = Array.from({ length: 10 }, (_, index) => ({
  label: `${index + currentYear}`,
  value: index + currentYear,
}));
