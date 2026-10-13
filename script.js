
const pages = [
  "Aku tau kamu kecewa sama aku. Aku pengen banget kamu tau bahwa di diem aku, aku masih merhatiin dan care sama kamu.",
  "Maaf kalo sikap aku sering ngebuat kamu ngerasa sendirian. Aku masih belajar dan bakal terus belajar buat mahamin kamu dengan lebih baik.",
  "Aku sayang banget sama kamu, maaf kalo kita banyak misskom nya, maaf kalo kita banyak berantemnya.",
  "Maaf aku telat nyadar, maaf aku ngga gampang buat nangkep maksud kamu.",
  "Mungkin kamu udah cape dengerin aku ngomong, aku bakal terus berusaha buat perbaikin hubungan kita",
  "Aku bahagia banget pas kamu nungguin aku pulang (‾◡◝)",
  "Naa makasih banget yaa udah mau khawatir ke orang kayak aku :)",
  "Aku minta maaf kalo ego aku sempet nyakitin kamu :(",
  "Kamu ngga perlu buru-buru buat ngambil keputusan, apapun keputusan kamu nanti bakal selalu aku hormatin (‾◡◝)",
  "Aku belum bisa janji bakal langsung jadi sempurna, tapi aku bakal terus belajar buat mahamin kamu. Makasih udah mau baca surat ini ¬_¬. ❤️"
];

let page = 0;

const cover = document.getElementById("cover");
const letterCard = document.getElementById("letterCard");
const letter = document.getElementById("letter");
const next = document.getElementById("next");
const percent = document.getElementById("percent");
const fill = document.getElementById("fill");

document.getElementById("open").onclick = () => {
  cover.classList.add("hidden");
  letterCard.classList.remove("hidden");
  renderPage();
};

function renderPage() {
  letter.textContent = pages[page];

  percent.textContent = `${(page + 1) * 10}%`;
  fill.style.width = `${(page + 1) * 10}%`;

  next.textContent =
    page === pages.length - 1
      ? "Selesai 💗"
      : "Next ♥";
}

next.onclick = () => {
  if (page < pages.length - 1) {
    page++;
    renderPage();
  } else {
    letter.textContent =
      "Makasih udah mau baca surat ini. 💗";
    next.textContent = "Selesai";
    next.disabled = true;
  }
};



const bgMusic = document.getElementById("bgMusic");

document.getElementById("open").addEventListener("click", async () => {
  cover.classList.add("hidden");
  letterCard.classList.remove("hidden");
  renderPage();

  try {
    await bgMusic.play();
  } catch (error) {
    console.log("Browser memblokir autoplay musik.");
  }
});

