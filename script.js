// Display current time and date
const now = new Date();
const timeElement = document.getElementById("current-time");

timeElement.textContent = now.toLocaleString("en-US", {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});
