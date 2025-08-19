function showSchedule(day) {
  document
    .querySelectorAll(".schedule")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelectorAll(".tab")
    .forEach((el) => el.classList.remove("active"));

  document.getElementById(day).classList.add("active");
  event.target.classList.add("active");
}
