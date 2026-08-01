let reviewCount = localStorage.getItem("reviewCount");

reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;

localStorage.setItem("reviewCount", reviewCount);

document.getElementById("counterMessage").textContent =
  `Total reviews submitted: ${reviewCount}`;

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;