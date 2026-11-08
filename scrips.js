function tampil(id) {
  const target = document.getElementById(id);
  if (!target) return;

  document.querySelectorAll(".ket-skil").forEach((el) => {
    el.classList.add("hidden");
  });

  target.classList.remove("hidden");
}
document.addEventListener("click", function (e) {
  const skillButton = e.target.closest(".skil-btn");

  if (skillButton) {
    document.querySelectorAll(".skil-btn.is-active").forEach((button) => {
      button.classList.remove("is-active");
    });
    skillButton.classList.add("is-active");
  }

  // Kalau yang diklik BUKAN tombol skill dan BUKAN kotak teks
  if (!skillButton && !e.target.closest(".ket-skil")) {
    document.querySelectorAll(".ket-skil").forEach((el) => {
      el.classList.add("hidden");
    });
  }
});
