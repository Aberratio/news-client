export const formatDateToString = (date: Date): string => {
  const dateValue = new Date(date);

  if (!dateValue) return "";

  const day = String(dateValue.getDate()).padStart(2, "0");
  const month = String(dateValue.getMonth() + 1).padStart(2, "0");
  const year = String(dateValue.getFullYear());

  return `${day}.${month}.${year}`;
};
