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

// URL -> open, else search
document.getElementById("search-form").addEventListener("submit", (e) => {
  e.preventDefault();

  let query = document.getElementById("search-input").value.trim();

  // check if input looks like a domain/url
  if (/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/.*)?$/i.test(query)) {
    if (!query.startsWith("http")) query = "https://" + query;
    location.href = query;
  } else {
    location.href = "https://duckduckgo.com/?q=" + encodeURIComponent(query);
  }
});
