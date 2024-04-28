export const formatDateTimeToString = (date: Date): string => {
  const dateValue = new Date(date);

  if (!dateValue) return "";

  dateValue.setHours(dateValue.getHours() + 2);

  const day = String(dateValue.getDate()).padStart(2, "0");
  const month = String(dateValue.getMonth() + 1).padStart(2, "0");
  const year = String(dateValue.getFullYear());
  const hours = String(dateValue.getHours()).padStart(2, "0");
  const minutes = String(dateValue.getMinutes()).padStart(2, "0");
  const seconds = String(dateValue.getSeconds()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
};
