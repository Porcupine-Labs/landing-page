// Optional interactive filter/highlight helper for Porcupine Labs research finding table
document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll(".pl-data-table tbody tr");
  rows.forEach((row) => {
    row.addEventListener("click", () => {
      rows.forEach((r) => r.classList.remove("is-selected"));
      row.classList.add("is-selected");
    });
  });
});
