const msgBtn = document.getElementById("msgBtn");
const wordsBtn = document.getElementById("wordsBtn");
const quizBtn = document.getElementById("quizBtn");

const messageDisplay = document.getElementById("messageDisplay");
const wordsDisplay = document.getElementById("wordsDisplay");
const quizInput = document.getElementById("quizInput");
const quizResult = document.getElementById("quizResult");
const visitCount = document.getElementById("visitCount");

const imgBtn = document.getElementById("imgBtn");
const imgBox = document.getElementById("imgBox");
const galleryImg = document.getElementById("galleryImg");

const messageText = `حبيبة
انتي أمان
وانتي حب
وانتي كل الدنيا`;

const words = [
    "Habiba I love you",
    "Habiba je t’aime",
    "حبيبة قلبي",
    "Habiba my soul",
    "Habiba my life"
];

// الصور
const images = [
    "img1.jpg.jpeg",
    "img2.jpg.jpeg",
    "img3.jpg.jpeg",
    "img4.jpg.jpeg",
    "img5.jpg.jpeg"
];

let imgIndex = 0;

// كتابة حرف حرف
function typeText(text, el) {
    el.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
        el.textContent += text[i];
        i++;
        if (i === text.length) clearInterval(interval);
    }, 40);
}

// أزرار الرسائل
msgBtn.onclick = () => {
    typeText(messageText, messageDisplay);
};

wordsBtn.onclick = () => {
    const r = Math.floor(Math.random() * words.length);
    typeText(words[r], wordsDisplay);
};

// سؤال
quizBtn.onclick = () => {
    const val = quizInput.value.trim();
    if (val === "انا" || val === "أنا" || val.toLowerCase() === "ana") {
        quizResult.textContent = "إجابة صح 💖";
        quizResult.className = "message correct";
        hearts("❤");
    } else {
        quizResult.textContent = "إجابة غلط";
        quizResult.className = "message incorrect";
        hearts("🖤");
    }

    if (navigator.vibrate) navigator.vibrate(100);
};

// الصور
imgBtn.onclick = () => {
    imgBox.style.display = "block";
    galleryImg.src = images[imgIndex];

    imgIndex++;
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }

    if (navigator.vibrate) navigator.vibrate(60);
};

// قلوب
function hearts(e) {
    for (let i = 0; i < 20; i++) {
        const h = document.createElement("div");
        h.textContent = e;
        h.style.cssText = `
      position: fixed;
      left: ${Math.random() * 100}vw;
      bottom: 0;
      font-size: 20px;
      animation: fly 2s linear forwards;
    `;
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 2000);
    }
}

// عداد زيارات
let v = localStorage.getItem("visits") || 0;
v++;
localStorage.setItem("visits", v);
visitCount.textContent = v;

const videoBtn = document.getElementById("videoBtn");
const videoBox = document.getElementById("videoBox");
const myVideo = document.getElementById("myVideo");

videoBtn.addEventListener("click", () => {
    if (videoBox.style.display === "none") {
        videoBox.style.display = "block";
        myVideo.play();
    } else {
        videoBox.style.display = "none";
        myVideo.pause();
        myVideo.currentTime = 0;
    }

    if (navigator.vibrate) navigator.vibrate(80);
});