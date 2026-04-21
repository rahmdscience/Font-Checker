// ============================================================
//  BERKAS RAHASIA: Kuis Font — Application Script
// ============================================================

// Force Chart.js to use Brutalist Styling
Chart.defaults.font.family = "'Courier Prime', monospace";
Chart.defaults.color = "#1a1a1a";

document.addEventListener("DOMContentLoaded", () => {
  // --- QUIZ DATA ---
  const fullQuizData = [
    {
      question: "Jika hidupmu adalah sebuah lagu, temponya akan...",
      answers: [
        {
          text: "Cepat dan penuh beat elektronik.",
          category: "techy",
          icon: "fa-solid fa-forward-fast",
        },
        {
          text: "Lambat dan mengalun indah.",
          category: "elegant",
          icon: "fa-solid fa-violin",
        },
        {
          text: "Penuh kejutan dengan ritme berubah-ubah.",
          category: "fun",
          icon: "fa-solid fa-shuffle",
        },
        {
          text: "Stabil dan menenangkan.",
          category: "classic",
          icon: "fa-solid fa-guitar",
        },
      ],
    },
    {
      question:
        "Kamu menemukan sebuah buku harian tua tanpa nama. Apa yang kamu lakukan?",
      answers: [
        {
          text: "Membacanya untuk mencari tahu misterinya.",
          category: "fun",
          icon: "fa-solid fa-book-open",
        },
        {
          text: "Menghargai privasinya dan menyimpannya.",
          category: "elegant",
          icon: "fa-solid fa-lock",
        },
        {
          text: "Mencari petunjuk untuk mengembalikannya.",
          category: "classic",
          icon: "fa-solid fa-hand-holding-heart",
        },
        {
          text: "Menganalisis kertas dan tintanya.",
          category: "techy",
          icon: "fa-solid fa-vial",
        },
      ],
    },
    {
      question: "Kamu merasa paling berenergi saat...",
      answers: [
        {
          text: "Berhasil memecahkan masalah rumit.",
          category: "techy",
          icon: "fa-solid fa-lightbulb",
        },
        {
          text: "Menghabiskan waktu dengan orang terdekat.",
          category: "classic",
          icon: "fa-solid fa-people-group",
        },
        {
          text: "Menciptakan sesuatu yang baru dari imajinasi.",
          category: "elegant",
          icon: "fa-solid fa-wand-magic-sparkles",
        },
        {
          text: "Tertawa lepas bersama teman-teman.",
          category: "fun",
          icon: "fa-solid fa-face-laugh-beam",
        },
      ],
    },
    {
      question: "Menurutmu, apa tujuan utama dari sebuah seni?",
      answers: [
        {
          text: "Memprovokasi pemikiran dan diskusi.",
          category: "techy",
          icon: "fa-solid fa-comments",
        },
        {
          text: "Menciptakan keindahan dan harmoni.",
          category: "elegant",
          icon: "fa-solid fa-palette",
        },
        {
          text: "Untuk bersenang-senang dan berekspresi.",
          category: "fun",
          icon: "fa-solid fa-bomb",
        },
        {
          text: "Menceritakan kisah & melestarikan sejarah.",
          category: "classic",
          icon: "fa-solid fa-scroll",
        },
      ],
    },
    {
      question:
        "Bayangkan kamu di hutan dan menemukan dua jalan. Mana yang kamu pilih?",
      answers: [
        {
          text: "Jalan setapak yang jelas dan sering dilalui.",
          category: "classic",
          icon: "fa-solid fa-road",
        },
        {
          text: "Jalan yang tampak menantang & belum dijelajahi.",
          category: "fun",
          icon: "fa-solid fa-mountain",
        },
        {
          text: "Jalan paling efisien menuju tujuan (pake peta).",
          category: "techy",
          icon: "fa-solid fa-map",
        },
        {
          text: "Jalan yang pemandangannya paling indah.",
          category: "elegant",
          icon: "fa-solid fa-image",
        },
      ],
    },
    {
      question:
        "Saat dihadapkan pada keputusan besar, kamu lebih mengandalkan...",
      answers: [
        {
          text: "Analisis data dan logika yang jelas.",
          category: "techy",
          icon: "fa-solid fa-brain",
        },
        {
          text: "Intuisi dan perasaan mendalam.",
          category: "elegant",
          icon: "fa-solid fa-heart-pulse",
        },
        {
          text: "Mencoba sedikit dari semuanya, lihat mana yang berhasil.",
          category: "fun",
          icon: "fa-solid fa-dice",
        },
        {
          text: "Nasihat orang terpercaya & pengalaman lalu.",
          category: "classic",
          icon: "fa-solid fa-users",
        },
      ],
    },
    {
      question: "Mana yang lebih kamu takuti?",
      answers: [
        {
          text: "Gagal setelah mencoba sekuat tenaga.",
          category: "classic",
          icon: "fa-solid fa-shield-heart",
        },
        {
          text: "Tidak pernah mencoba sama sekali.",
          category: "fun",
          icon: "fa-solid fa-person-running",
        },
        {
          text: "Gagal karena tidak punya cukup data.",
          category: "techy",
          icon: "fa-solid fa-magnifying-glass-chart",
        },
        {
          text: "Gagal dan terlihat buruk di mata orang lain.",
          category: "elegant",
          icon: "fa-solid fa-eye",
        },
      ],
    },
    {
      question: "Kamu diberi satu kotak rahasia, membukanya mengubah hidupmu.",
      answers: [
        {
          text: "Langsung membukanya tanpa ragu.",
          category: "fun",
          icon: "fa-solid fa-box-open",
        },
        {
          text: "Memikirkannya berhari-hari, menimbang pro & kontra.",
          category: "classic",
          icon: "fa-solid fa-scale-balanced",
        },
        {
          text: "Mencoba mencari tahu isinya tanpa membuka.",
          category: "techy",
          icon: "fa-solid fa-x-ray",
        },
        {
          text: "Menghargai misterinya, mungkin tak akan dibuka.",
          category: "elegant",
          icon: "fa-solid fa-gift",
        },
      ],
    },
    {
      question: "Mana yang lebih penting dalam sebuah hubungan?",
      answers: [
        {
          text: "Komunikasi yang efisien dan saling mengerti.",
          category: "techy",
          icon: "fa-solid fa-satellite-dish",
        },
        {
          text: "Ikatan emosional yang dalam dan romantis.",
          category: "elegant",
          icon: "fa-solid fa-infinity",
        },
        {
          text: "Petualangan dan tawa bersama.",
          category: "fun",
          icon: "fa-solid fa-map-location-dot",
        },
        {
          text: "Komitmen dan kesetiaan jangka panjang.",
          category: "classic",
          icon: "fa-solid fa-ring",
        },
      ],
    },
    {
      question: "Apa yang membuatmu paling bangga dengan dirimu?",
      answers: [
        {
          text: "Kemampuan untuk tetap tenang di bawah tekanan.",
          category: "classic",
          icon: "fa-solid fa-anchor",
        },
        {
          text: "Keingintahuan & semangat belajar hal baru.",
          category: "techy",
          icon: "fa-solid fa-book-sparkles",
        },
        {
          text: "Kemampuan untuk membuat orang lain tersenyum.",
          category: "fun",
          icon: "fa-solid fa-face-grin-wink",
        },
        {
          text: "Selera & caramu menghargai keindahan hidup.",
          category: "elegant",
          icon: "fa-solid fa-feather-pointed",
        },
      ],
    },
  ];

  // --- RESULTS DATA ---
  const resultsData = {
    techy: {
      fontName: "Roboto Mono",
      googleFont: "Roboto+Mono",
      description:
        "SUBJEK LOGIS DAN EFISIEN. Fungsi dan inovasi adalah prioritas utama. Mengutamakan data di atas emosi. Cocok dengan sistem modern.",
      fontFamily: "'Roboto Mono', monospace",
      palette: ["#1a1a1a", "#425466", "#00D4FF", "#E1FEFF"],
    },
    elegant: {
      fontName: "Playfair Display",
      googleFont: "Playfair+Display:wght@700",
      description:
        "SUBJEK BERCITA RASA TINGGI. Memiliki apresiasi mendalam terhadap estetika dan detail. Beroperasi dengan standar kelas dan keanggunan abadi.",
      fontFamily: "'Playfair Display', serif",
      palette: ["#4C3B4D", "#C8B8DB", "#f4f1ea", "#FFFFFF"],
    },
    fun: {
      fontName: "Pacifico",
      googleFont: "Pacifico",
      description:
        "SUBJEK EKSPRESIF DAN DINAMIS. Tidak takut menonjol. Beroperasi dengan pendekatan kreatif dan tak terduga dalam setiap misinya.",
      fontFamily: "'Pacifico', cursive",
      palette: ["#9e2a2b", "#FFD93D", "#6BCB77", "#4D96FF"],
    },
    classic: {
      fontName: "Lora",
      googleFont: "Lora:wght@700",
      description:
        "SUBJEK TRADISIONAL DAN BISA DIANDALKAN. Menghargai sejarah, fondasi yang kuat, dan kualitas yang telah teruji oleh waktu. Sangat stabil.",
      fontFamily: "'Lora', serif",
      palette: ["#386641", "#8D6E63", "#EAE0D5", "#1a1a1a"],
    },
  };

  // --- DOM REFERENCES ---
  const startScreen = document.getElementById("start-screen");
  const questionScreen = document.getElementById("question-screen");
  const resultScreen = document.getElementById("result-screen");
  const startBtn = document.getElementById("start-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionWrapper = document.getElementById("question-wrapper");
  const questionText = document.getElementById("question-text");
  const answersContainer = document.getElementById("answers-container");
  const progressText = document.getElementById("progress-text");
  const progressBar = document.getElementById("progress-bar");
  const resultTitle = document.getElementById("result-title");
  const resultDescription = document.getElementById("result-description");
  const shareTwitter = document.getElementById("share-twitter");
  const shareWhatsapp = document.getElementById("share-whatsapp");
  const shareInstagramBtn = document.getElementById("share-instagram-btn");
  const copyLinkBtn = document.getElementById("copy-link-btn");
  const loadingSpinner = document.getElementById("loading-spinner");
  const resultContent = document.getElementById("result-content");
  const colorPaletteContainer = document.getElementById(
    "color-palette-container",
  );
  const scoreChartCanvas = document.getElementById("score-chart");

  // --- STATE ---
  let currentQuestionIndex = 0;
  let scores = { techy: 0, elegant: 0, fun: 0, classic: 0 };
  let quizData = [];
  let scoreChart = null;

  // --- UTILITIES ---
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function typeWriter(element, text, speed = 60) {
    let i = 0;
    element.innerHTML = '<span class="typing-cursor"></span>';
    function typing() {
      if (i < text.length) {
        element.innerHTML =
          text.substring(0, i + 1) + '<span class="typing-cursor"></span>';
        i++;
        setTimeout(typing, speed);
      } else {
        element.innerHTML = text;
      }
    }
    typing();
  }

  function copyToClipboard(button, textToCopy, successMessage) {
    const originalText = button.innerHTML;
    const copyHelper = document.getElementById("copy-helper");
    copyHelper.value = textToCopy;
    copyHelper.select();
    copyHelper.setSelectionRange(0, 99999);
    try {
      document.execCommand("copy");
      button.innerHTML = `<i class="fas fa-check mb-1 text-lg block"></i>${successMessage}`;
    } catch (err) {
      button.innerHTML = '<i class="fas fa-times mb-1 text-lg block"></i>GAGAL';
    }
    setTimeout(() => {
      button.innerHTML = originalText;
    }, 3000);
  }

  // --- QUIZ FLOW ---
  function startQuiz() {
    quizData = [...fullQuizData];
    shuffleArray(quizData);
    startScreen.classList.add("hidden");
    questionScreen.classList.remove("hidden");
    questionScreen.classList.add("fade-in");
    currentQuestionIndex = 0;
    scores = { techy: 0, elegant: 0, fun: 0, classic: 0 };
    displayQuestion();
  }

  function updateProgressBar() {
    const progressPercentage = (currentQuestionIndex / quizData.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `[ ${currentQuestionIndex + 1} / ${quizData.length} ]`;
  }

  function displayQuestion() {
    questionWrapper.classList.remove("slide-in");
    if (currentQuestionIndex >= quizData.length) {
      progressBar.style.width = `100%`;
      setTimeout(showResult, 400);
      return;
    }
    updateProgressBar();
    const currentQuestion = quizData[currentQuestionIndex];
    questionText.textContent = `"${currentQuestion.question}"`;
    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.className =
        "neo-btn w-full text-left p-4 md:p-5 flex items-center mb-4";
      button.dataset.category = answer.category;
      button.innerHTML = `
        <div class="border-r-[2px] border-[var(--ink)] pr-4 mr-4 flex-shrink-0 w-10 text-center">
          <i class="${answer.icon} text-[var(--ink)] text-xl"></i>
        </div>
        <span class="font-mono font-bold leading-tight uppercase tracking-wide">${answer.text}</span>
      `;
      button.addEventListener("click", handleAnswerClick);
      answersContainer.appendChild(button);
    });

    void questionWrapper.offsetWidth;
    questionWrapper.classList.add("slide-in");
  }

  function handleAnswerClick(e) {
    const answerButtons = answersContainer.querySelectorAll("button");
    answerButtons.forEach((btn) => (btn.disabled = true));
    const selectedCategory = e.currentTarget.dataset.category;
    scores[selectedCategory]++;
    questionWrapper.classList.add("slide-out");
    setTimeout(() => {
      currentQuestionIndex++;
      questionWrapper.classList.remove("slide-out");
      displayQuestion();
    }, 300);
  }

  // --- RESULT ---
  function showResult() {
    questionScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    loadingSpinner.classList.remove("hidden");
    resultContent.classList.add("hidden");

    const finalCategory = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b,
    );
    const result = resultsData[finalCategory];

    const fontLink = document.createElement("link");
    fontLink.id = "dynamic-font";
    fontLink.href = `https://fonts.googleapis.com/css2?family=${result.googleFont}&display=swap`;
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    document.fonts.load(`1em ${result.fontName}`).then(() => {
      setTimeout(() => {
        loadingSpinner.classList.add("hidden");
        resultContent.classList.remove("hidden");
        resultContent.classList.add("fade-in");

        typeWriter(resultTitle, `[ ${result.fontName} ]`, 80);
        resultDescription.textContent = result.description;
        resultDescription.style.fontFamily = result.fontFamily;

        // Color Palette
        colorPaletteContainer.innerHTML = "";
        result.palette.forEach((color) => {
          const swatch = document.createElement("div");
          swatch.className =
            "w-12 h-12 md:w-16 md:h-16 neo-border-thin bg-white relative";
          swatch.style.backgroundColor = color;
          swatch.innerHTML = `<div class="absolute inset-0 m-auto w-2 h-2 border-[1px] border-white mix-blend-difference"></div>`;
          colorPaletteContainer.appendChild(swatch);
        });

        renderScoreChart();

        // Share Links
        const shareText = `STATUS RAHASIA TERBONGKAR: Gaya font aku ternyata [ ${result.fontName} ]! Cek identitasmu di sini.`;
        const shareUrl = window.location.href;
        shareTwitter.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        shareWhatsapp.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
      }, 1200);
    });
  }

  function renderScoreChart() {
    if (scoreChart) scoreChart.destroy();
    const totalScore =
      Object.values(scores).reduce((sum, val) => sum + val, 0) || 1;

    scoreChart = new Chart(scoreChartCanvas, {
      type: "bar",
      data: {
        labels: ["TECHY", "ELEGAN", "FUN", "KLASIK"],
        datasets: [
          {
            label: "Kecocokan Identitas (%)",
            data: [
              (scores.techy / totalScore) * 100,
              (scores.elegant / totalScore) * 100,
              (scores.fun / totalScore) * 100,
              (scores.classic / totalScore) * 100,
            ],
            backgroundColor: ["#1a1a1a", "#f4f1ea", "#9e2a2b", "#386641"],
            borderColor: "#1a1a1a",
            borderWidth: 3,
            hoverBackgroundColor: "#000",
            hoverBorderColor: "#1a1a1a",
          },
        ],
      },
      options: {
        indexAxis: "y",
        animation: { duration: 0 },
        scales: {
          x: {
            beginAtZero: true,
            max: 100,
            border: { color: "#1a1a1a", width: 3 },
            grid: { display: false },
            ticks: {
              color: "#1a1a1a",
              font: { weight: "bold" },
              callback: (value) => value + "%",
            },
          },
          y: {
            border: { color: "#1a1a1a", width: 3 },
            grid: { display: false },
            ticks: { color: "#1a1a1a", font: { weight: "bold" } },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#1a1a1a",
            titleFont: { family: "Courier Prime", size: 14 },
            bodyFont: { family: "Courier Prime", size: 14 },
            cornerRadius: 0,
            padding: 10,
            borderColor: "#f4f1ea",
            borderWidth: 2,
          },
        },
      },
    });
  }

  function restartQuiz() {
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    startScreen.classList.add("fade-in");
    const dynamicFont = document.getElementById("dynamic-font");
    if (dynamicFont) dynamicFont.remove();
    resultTitle.style.fontFamily = "'Courier Prime', monospace";
    resultDescription.style.fontFamily = "'Crimson Text', serif";
  }

  // --- EVENT LISTENERS ---
  startBtn.addEventListener("click", startQuiz);
  restartBtn.addEventListener("click", restartQuiz);
  copyLinkBtn.addEventListener("click", () =>
    copyToClipboard(copyLinkBtn, window.location.href, "[ TERSALIN ]"),
  );
  shareInstagramBtn.addEventListener("click", () =>
    copyToClipboard(shareInstagramBtn, window.location.href, "[ TERSALIN ]"),
  );
});
