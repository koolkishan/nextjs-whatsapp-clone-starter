export const calculateTime = (inputDateStr) => {
  // Assuming the input date string is in UTC format
  const inputDate = new Date(inputDateStr);

  // Get current date
  const currentDate = new Date();

  // Set up date formats
  const timeFormat = { hour: "numeric", minute: "numeric" };
  const dateFormat = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  // Check if it's today, tomorrow, or more than one day ago
  if (
    inputDate.getUTCDate() === currentDate.getUTCDate() &&
    inputDate.getUTCMonth() === currentDate.getUTCMonth() &&
    inputDate.getUTCFullYear() === currentDate.getUTCFullYear()
  ) {
    // Today: Convert to AM/PM format
    const ampmTime = inputDate.toLocaleTimeString("en-US", timeFormat);
    return ampmTime;
  } else if (
    inputDate.getUTCDate() === currentDate.getUTCDate() - 1 &&
    inputDate.getUTCMonth() === currentDate.getUTCMonth() &&
    inputDate.getUTCFullYear() === currentDate.getUTCFullYear()
  ) {
    // Tomorrow: Show "Yesterday"

    return "Yesterday";
  } else if (
    Math.floor((currentDate - inputDate) / (1000 * 60 * 60 * 24)) > 1 &&
    Math.floor((currentDate - inputDate) / (1000 * 60 * 60 * 24)) <= 7
  ) {
    const timeDifference = Math.floor(
      (currentDate - inputDate) / (1000 * 60 * 60 * 24)
    );

    const targetDate = new Date();
    targetDate.setDate(currentDate.getDate() - timeDifference);

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const targetDay = daysOfWeek[targetDate.getDay()];

    return targetDay;
  } else {
    // More than 7 days ago: Show date in DD/MM/YYYY format
    const formattedDate = inputDate.toLocaleDateString("en-GB", dateFormat);
    return formattedDate;
  }
};
