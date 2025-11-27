function navigate(page) {
    window.location.href = page;
}

const nama = localStorage.getItem("namaPengguna");
const lastNama = localStorage.getItem("lastNamaPengguna");
if (nama !== lastNama) {
    localStorage.removeItem("score");
    localStorage.removeItem("sectionIndex");
    localStorage.removeItem("soalIndex");
    localStorage.removeItem("isFinished");
    localStorage.setItem("lastNamaPengguna", nama);
}

document.getElementById("user-info").innerText = nama ? `Hi, ${nama}` : 'Hi, User';

const sections = [
    {
        type: 'Listening',
        intro: 'In the Listening section, you will hear conversations and answer related questions. Listen carefully before selecting your answer.',
        timer: 240,
        soal: [
            { audio: '../../assets/audio/latihan/soal1.mp3', question: 'What does the woman mean?', options: ['She does not like coffee.', 'There is no coffee available.', 'She wants to buy some tea.', 'She just had a cup of tea.'], answer: 'She wants to buy some tea.' },
            { audio: '../../assets/audio/latihan/soal2.mp3', question: 'What does the woman mean?', options: ['The test is far away.', 'The test is very difficult.', 'She thinks she knows when the test is.', 'She believes the schedule is different.'], answer: 'She thinks she knows when the test is.' },
            { audio: '../../assets/audio/latihan/soal3.mp3', question: 'What does the man mean?', options: ['He lacks imagination.', 'He never takes the bus.', 'He does not care.', 'He does not know.'], answer: 'He does not know.' },
            { audio: '../../assets/audio/latihan/soal4.mp3', question: 'What does the man mean?', options: ['He will double the student’s score.', 'He will recheck the student’s answer.', 'He is sure that he makes no mistakes.', 'He is sorry for not checking the answer.'], answer: 'He will recheck the student’s answer.' },
            { audio: '../../assets/audio/latihan/soal5.mp3', question: 'What does the woman mean?', options: ['She did not attend the classes.', 'She got married.', 'She does not like the class.', 'She skipped one class.'], answer: 'She did not attend the classes.' }
        ]
    },
    {
        type: 'Structure',
        intro: 'In the Structure section, choose the correct answer to complete the sentence.',
        timer: 120,
        soal: [
            { question: 'The boy _______ is my brother.', options: ['who wearing a red hat', 'wearing a red hat', 'he wearing a red hat', 'wears a red hat'], answer: 'wearing a red hat' },
            { question: 'Hardly _______ when the phone rang.', options: ['had I arrived', 'I had arrived', 'arrived I', 'have I arrived'], answer: 'had I arrived' },
            { question: 'Neither my brother nor my parents _______ able to attend the meeting.', options: ['was', 'were', 'is', 'are'], answer: 'were' },
            { question: 'Each of the students _______ a locker.', options: ['have', 'has', 'having', 'had'], answer: 'has' },
            { question: 'The book on the table belongs to _______.', options: ['I', 'me', 'my', 'mine'], answer: 'me' }
        ]
    },
    {
        type: 'Reading',
        intro: 'In the Reading section, read the question carefully and choose the correct answer.',
        timer: 120,
        soal: [
            { question: 'The sun provides energy in the form of light and heat. What does the sun provide?', options: ['Water', 'Light and heat', 'Oxygen', 'Food'], answer: 'Light and heat' },
            { question: 'The Earth revolves around the sun once every 365 days. How long does it take?', options: ['365 hours', '365 days', '24 hours', '7 days'], answer: '365 days' },
            { question: 'Bees are important for pollinating plants. What is the role of bees?', options: ['Make honey', 'Pollinate plants', 'Build hives', 'Eat plants'], answer: 'Pollinate plants' },
            { question: 'Water covers about 71% of Earth\'s surface. How much is covered by water?', options: ['50%', '71%', '25%', '90%'], answer: '71%' },
            { question: 'Penguins are birds that cannot fly. What is true about penguins?', options: ['They can fly', 'They cannot fly', 'They can swim', 'They have fur'], answer: 'They cannot fly' }
        ]
    }
];

let sectionIndex = parseInt(localStorage.getItem("sectionIndex")) || 0;
let soalIndex = parseInt(localStorage.getItem("soalIndex")) || -1;
let correctCount = parseInt(localStorage.getItem("score")) || 0;
let timer = 0;
let timerInterval = null;

function renderContent() {
    if (localStorage.getItem("isFinished") === "true") {
        showFinalResult();
        return;
    }

    localStorage.setItem("sectionIndex", sectionIndex);
    localStorage.setItem("soalIndex", soalIndex);

    const container = document.getElementById("content");

    if (sectionIndex === 0 && soalIndex === -1) {
        container.innerHTML = `
          <p>Selamat datang di Latihan TOEFL! Latihan ini akan membantu kamu memahami format tes TOEFL yang sebenarnya.</p>
          <p>Ada 3 bagian utama yaitu : Listening, Structure, dan Reading. <br> Setiap bagian terdiri dari 5 soal dengan waktu yang berbeda.</p>
          <div class="center-btn">
            <button onclick="showListeningGuide()">Mulai Latihan TOEFL</button>
          </div>`;
        return;
    }

    if (soalIndex === -1) {
        const section = sections[sectionIndex];
        container.innerHTML = `
          <p><b>${section.type} Section</b></p>
          <p>${section.intro}</p>
          <div class="center-btn">
            <button onclick="startSection()">Start ${section.type}</button>
          </div>`;
    } else {
        // Render soal
        const section = sections[sectionIndex];
        const soal = section.soal[soalIndex];
        let html = `<div id="timer"></div><p><b>${section.type} - Soal ${soalIndex + 1} dari ${section.soal.length}</b></p>`;
        if (soal.audio) {
            html += `<audio controls><source src="${soal.audio}" type="audio/mpeg">Browser Anda tidak mendukung audio.</audio>`;
        }
        html += `<p>${soal.question}</p>`;
        soal.options.forEach(opt => {
            html += `<label><input type="radio" name="soal" value="${opt}"> ${opt}</label>`;
        });

        let nextLabel = 'Next';
        if (soalIndex === section.soal.length - 1) {
            nextLabel = (sectionIndex === sections.length - 1) ? 'Selesai' : 'Next Section';
        }

        html += `
          <div class="navi-buttons">
            <button onclick="prevSoal()" ${soalIndex === 0 ? 'disabled' : ''}>Previous</button>
            <button onclick="nextSoal()">${nextLabel}</button>
          </div>`;
        container.innerHTML = html;
        updateTimerDisplay();
    }
}

function showListeningGuide() {
    const container = document.getElementById("content");
    container.innerHTML = `
        <p><b>Listening Section</b></p>
        <p>In the Listening section, you will hear conversations and answer related questions..</p>
        <div class="center-btn">
          <button onclick="startSection()">Start Listening</button>
        </div>`;
}

function startSection() {
    soalIndex = 0;
    timer = sections[sectionIndex].timer;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timer--;
        updateTimerDisplay();
        if (timer <= 0) {
            clearInterval(timerInterval);
            sectionIndex++;
            soalIndex = -1;
            if (sectionIndex < sections.length) {
                timer = sections[sectionIndex].timer;
                renderContent();
            } else {
                localStorage.setItem("isFinished", "true");
                showFinalResult();
            }
        }
    }, 1000);
    renderContent();
}

function updateTimerDisplay() {
    const min = Math.floor(timer / 60);
    const sec = timer % 60;
    document.getElementById("timer").innerText = `Waktu tersisa: ${min}:${sec.toString().padStart(2, '0')}`;
}

function nextSoal() {
    const section = sections[sectionIndex];
    const soal = section.soal[soalIndex];
    const selected = document.querySelector('input[name="soal"]:checked');
    if (selected && selected.value === soal.answer) {
        correctCount++;
        localStorage.setItem("score", correctCount);
    }
    if (soalIndex < section.soal.length - 1) {
        soalIndex++;
        renderContent();
    } else {
        clearInterval(timerInterval);
        sectionIndex++;
        soalIndex = -1;
        if (sectionIndex < sections.length) {
            timer = sections[sectionIndex].timer;
            renderContent();
        } else {
            localStorage.setItem("isFinished", "true");
            showFinalResult();
        }
    }
}

function prevSoal() {
    if (soalIndex > 0) {
        soalIndex--;
        renderContent();
    }
}

function showFinalResult() {
    document.getElementById("content").innerHTML = `
        <p><b>Latihan Selesai!</b></p>
        <p>Skor akhir Anda: ${correctCount} jawaban benar dari ${sections.reduce((acc, cur) => acc + cur.soal.length, 0)} soal.</p>
        <br>
        <p align="center"><b>Selamat Mengerjakan Test TOEFL!</b></p>
        <div class="center-btn">
          <button onclick="resetTest()">Coba Latihan Lagi</button>
        </div>`;
}

function resetTest() {
    sectionIndex = 0;
    soalIndex = -1;
    correctCount = 0;
    clearInterval(timerInterval);
    localStorage.removeItem("score");
    localStorage.removeItem("sectionIndex");
    localStorage.removeItem("soalIndex");
    localStorage.removeItem("isFinished");
    renderContent();
}

renderContent();
