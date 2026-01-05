const msgBtn = document.getElementById("msgBtn");
const wordsBtn = document.getElementById("wordsBtn");

const messageDisplay = document.getElementById("messageDisplay");
const wordsDisplay = document.getElementById("wordsDisplay");

const quizInput = document.getElementById("quizInput");
const quizBtn = document.getElementById("quizBtn");
const quizResult = document.getElementById("quizResult");

const visitCountDisplay = document.getElementById("visitCount");

const bgMusic = document.getElementById("bgMusic");
const sound = document.getElementById("tapSound");

const habibaMessage = `متبعديش عن بودي بودي بيحبك اوي يا بت يا حبيبه خليكي جنبو دايما يا بت اعتبريه وصيه الموقع انا بحبك اوي ♥️
خلي بالك من بودي يا بت الواد بيحبك
بحبك يا حبيبه قلبي انتي 😍
اععععععععع نفس الدماغ
بحبك يا حيوانه يا بنت الكلب
اصل الكلب دا انا بقا 😂
عايزك جنبي يا امو روح قلبي انتي متزعليش عشان زعقت او عشان اي حاجه يا روحي
فداكي دنيتي`;

const niceWords = [
    "Habiba، I love you",
    "Habiba، you are my world",
    "Habiba، je t’aime",
    "Habiba، tu es mon cœur",
    "حبيبة، بحبك",
    "حبيبة، قلبي ليكي",
    "Habiba، أنت الأمان",
    "Habiba، قلبي وروحي",
    "Habiba، حياتي كلها لك",
    "Habiba، أنت زهرتي الجميلة"
];

// عداد الزيارات مع حفظ في localStorage
function updateVisitCount() {
    let count = localStorage.getItem("visitCount") || 0;
    count = Number(count) + 1;
    localStorage.setItem("visitCount", count);
    visitCountDisplay.textContent = count;
}
updateVisitCount();

// دالة الكتابة حرف حرف
function typeWriter(text, element, speed = 40) {
    element.textContent = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// تشغيل الموسيقى لو مش شغالة
function startMusic() {
    if (bgMusic.paused) {
        bgMusic.volume = 0.3;
        bgMusic.play().catch(() => {
            console.log("Music play blocked");
        });
    }
}

// توليد قلوب طائرة
function createFly(color = "#ff2d55") {
    const c = document.createElement("div");
    c.className = "fly";

    const h = document.createElement("span");
    h.textContent = "❤";
    h.style.color = color;

    c.appendChild(h);

    c.style.left = Math.random() * window.innerWidth + "px";
    c.style.top = window.innerHeight - 80 + "px";
    c.style.setProperty("--x", (Math.random() - 0.5) * 600 + "px");
    c.style.setProperty("--y", -Math.random() * window.innerHeight + "px");

    document.body.appendChild(c);
    setTimeout(() => c.remove(), 2200);
}

// نطق القلوب حسب الإجابة
function showHearts(correct) {
    const color = correct ? "#ff2d55" : "#000";
    for (let i = 0; i < 20; i++) {
        createFly(color);
    }
}

// أزرار عرض الرسالة والكلام
msgBtn.addEventListener("click", () => {
    startMusic();
    typeWriter(habibaMessage, messageDisplay, 40);
});

wordsBtn.addEventListener("click", () => {
    startMusic();
    const randIndex = Math.floor(Math.random() * niceWords.length);
    typeWriter(niceWords[randIndex], wordsDisplay, 50);
});

// إجابة سؤال الكويز
quizBtn.addEventListener("click", () => {
    startMusic();
    const answer = quizInput.value.trim().toLowerCase();
    const correctAnswers = ["أنا", "انا", "ana", "أنا"];

    let isCorrect = correctAnswers.some(ans => ans === answer);

    if (isCorrect) {
        quizResult.textContent = "إجابة صحيحة! 💖";
        quizResult.classList.remove("incorrect");
        quizResult.classList.add("correct");
        document.body.style.backgroundColor = "#2ecc71"; // أخضر
        showHearts(true);
    } else {
        quizResult.textContent = "إجابة خاطئة! 😞";
        quizResult.classList.remove("correct");
        quizResult.classList.add("incorrect");
        document.body.style.backgroundColor = "#e74c3c"; // أحمر
        showHearts(false);
    }

    // فيبريشن
    if (navigator.vibrate) {
        navigator.vibrate(100);
    }
});

// إعادة الخلفية للسواد بعد 3 ثواني من الإجابة
quizInput.addEventListener("input", () => {
    quizResult.textContent = "";
    quizResult.classList.remove("correct", "incorrect");
    document.body.style.backgroundColor = "#000";

});
function updateDaysCounter() {
  // تاريخ البداية: 6 / 12 / 2025
  const startDate = new Date(2025, 11, 6); // الشهر 11 = ديسمبر
  const today = new Date();

  // نصفر الوقت عشان الحساب يكون مظبوط
  startDate.setHours(0,0,0,0);
  today.setHours(0,0,0,0);

  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const daysCounter = document.getElementById("daysCounter");

  if (diffDays < 0) {
    daysCounter.textContent = "لسه ما بدأناش 💖";
  } else if (diffDays === 0) {
    daysCounter.textContent = "أول يوم 💕";
  } else {
    daysCounter.textContent = `${diffDays} يوم حب`;
  }
}

updateDaysCounter();
