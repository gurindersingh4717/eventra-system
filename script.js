function login() {
  if (user.value === "admin" && pass.value === "admin") {
    location.href = "dashboard.html";
  } else alert("Invalid login");
}

function logout() {
  location.href = "index.html";
}

function goCreate() {
  location.href = "create.html";
}

function back() {
  location.href = "dashboard.html";
}

// LOAD EVENTS
function loadEvents() {
  let events = JSON.parse(localStorage.getItem("events")) || [];
  let container = document.getElementById("eventList");

  if (!container) return;

  container.innerHTML = "";

  let today = new Date();
  let upcoming = 0;

  events.forEach(e => {
    let div = document.createElement("div");
    div.className = "event";

    let date = new Date(e.date);
    let status = date >= today ? "Upcoming" : "Completed";

    if (status === "Upcoming") upcoming++;

    div.innerHTML = `
      <h3>${e.name}</h3>
      <p>${e.date}</p>
      <p>${e.location}</p>
      <p>${status}</p>
    `;

    container.appendChild(div);
  });

  document.getElementById("totalEvents").innerText = events.length;
  document.getElementById("upcoming").innerText = upcoming;
}

// ADD EVENT
function addEvent() {
  let events = JSON.parse(localStorage.getItem("events")) || [];

  events.push({
    name: name.value,
    date: date.value,
    location: location.value
  });

  localStorage.setItem("events", JSON.stringify(events));
  alert("Event Added!");
}

// AUTO LOAD
window.onload = loadEvents;