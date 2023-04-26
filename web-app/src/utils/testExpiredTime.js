const testExpiredTime = (month, year) => {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  if (year < currentYear) return false;

  if (year === currentYear && month < currentMonth) return false;

  return true;
};

export default testExpiredTime;
