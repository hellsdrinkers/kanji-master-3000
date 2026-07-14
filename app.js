import kanjiData from './data.js';
import hiraganaData from './hiraganaData.js';
import kanjiBasicoData from './kanjiBasicoData.js';
import kanjiMaster1Data from './kanjiMaster1Data.js';

// ---- AUDIO SYSTEM (Web Audio API & Speech Synthesis) ----
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSound(type) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.5);
    } else if (type === 'wrong') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
    }
}

function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
}

// ---- 3D BACKGROUND (Three.js) ----
const scene = new THREE.Scene();
scene.background = new THREE.Color('#87CEEB');
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

const cubes = [];
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

for(let i=0; i<30; i++) {
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10 - 10);
    cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    // Random pastel colors for cubes
    cube.material.color.setHSL(Math.random(), 0.7, 0.8);
    scene.add(cube);
    cubes.push(cube);
}
camera.position.z = 5;

function animate3D() {
    requestAnimationFrame(animate3D);
    cubes.forEach(c => {
        c.rotation.x += 0.01;
        c.rotation.y += 0.01;
        c.position.y += 0.02;
        if(c.position.y > 10) c.position.y = -10;
    });
    renderer.render(scene, camera);
}
animate3D();

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// ---- GAME LOGIC ----
const screens = {
    home: document.getElementById('screen-home'),
    study: document.getElementById('screen-study'),
    game: document.getElementById('screen-game'),
    gameover: document.getElementById('screen-gameover')
};

let currentDataSet = [];
let studyIndex = 0;
let currentScore = 0;
let lives = 3;
let currentItem = null;
let isAnimating = false;
let currentLevel = '';

// Dom Elements
const studyChar = document.getElementById('study-char');
const studyRomaji = document.getElementById('study-romaji');
const studyDica = document.getElementById('study-dica');
const btnStudyNext = document.getElementById('btn-study-next');
const btnStudyPrev = document.getElementById('btn-study-prev');
const btnStartQuiz = document.getElementById('btn-start-quiz');
const btnStudyAudio = document.getElementById('btn-study-audio');

const scoreDisplay = document.getElementById('hud-score');
const kanjiDisplay = document.getElementById('kanji-display');
const optionsGrid = document.getElementById('options-grid');
const feedbackOverlay = document.getElementById('feedback-overlay');
const feedbackIcon = document.getElementById('feedback-icon');
const btnGameAudio = document.getElementById('btn-game-audio');

function showScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// Level Selection
document.querySelectorAll('.btn-level').forEach(btn => {
    btn.addEventListener('click', (e) => {
        currentLevel = e.target.getAttribute('data-level');
        prepareLevelData();
        startStudyMode();
    });
});

function prepareLevelData() {
    if (currentLevel === 'H1') {
        currentDataSet = hiraganaData.filter(d => d.nivel === 'H1');
    } else if (currentLevel === 'H2') {
        currentDataSet = hiraganaData.filter(d => d.nivel === 'H2');
    } else if (currentLevel === 'K1') {
        currentDataSet = kanjiBasicoData;
    } else if (currentLevel === 'KM1') {
        currentDataSet = kanjiMaster1Data;
    } else {
        currentDataSet = [...kanjiData, ...kanjiBasicoData, ...kanjiMaster1Data]; // Todos
    }
}

// ---- STUDY MODE ----
function startStudyMode() {
    if (currentLevel === 'K-ALL') {
        // Pular estudo se for sobrevivência
        startQuizMode();
        return;
    }
    studyIndex = 0;
    updateStudyCard();
    showScreen('study');
}

function updateStudyCard() {
    const item = currentDataSet[studyIndex];
    studyChar.innerHTML = item.char || item.kanji;
    
    if (item.tipo === 'hiragana') {
        studyRomaji.textContent = item.romaji;
        studyDica.textContent = item.dica;
    } else if (item.tipo === 'kanjiBasico') {
        studyRomaji.textContent = item.portugues;
        studyDica.textContent = item.dica;
    } else {
        // É kanji de sobrevivência
        let meaning = item.portugues.split(',')[0].trim();
        studyRomaji.textContent = meaning.charAt(0).toUpperCase() + meaning.slice(1);
        studyDica.textContent = `Leitura: ${item.kunyomi || item.onyomi}`;
    }
}

btnStudyNext.addEventListener('click', () => {
    if (studyIndex < currentDataSet.length - 1) {
        studyIndex++;
        updateStudyCard();
    }
});
btnStudyPrev.addEventListener('click', () => {
    if (studyIndex > 0) {
        studyIndex--;
        updateStudyCard();
    }
});
btnStudyAudio.addEventListener('click', () => {
    const item = currentDataSet[studyIndex];
    if (item.tipo === 'hiragana') speakText(item.romaji);
    else if (item.tipo === 'kanjiBasico') speakText(item.char);
    else speakText(item.kanji);
});

btnStartQuiz.addEventListener('click', startQuizMode);

// ---- QUIZ MODE ----
function startQuizMode() {
    currentScore = 0;
    lives = 3;
    scoreDisplay.textContent = currentScore;
    updateHearts();
    showScreen('game');
    nextRound();
}

function updateHearts() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((h, i) => {
        h.classList.toggle('lost', i >= lives);
    });
}

function shuffleArray(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function nextRound() {
    isAnimating = false;
    currentItem = currentDataSet[Math.floor(Math.random() * currentDataSet.length)];
    
    kanjiDisplay.innerHTML = currentItem.char || currentItem.kanji;
    kanjiDisplay.classList.remove('pop');
    void kanjiDisplay.offsetWidth; 
    kanjiDisplay.classList.add('pop');

    let options = [currentItem];
    while (options.length < 3) {
        const randomItem = currentDataSet[Math.floor(Math.random() * currentDataSet.length)];
        if (!options.find(o => o === randomItem)) {
            options.push(randomItem);
        }
    }
    options = shuffleArray(options);
    
    optionsGrid.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        
        let label = '';
        if (opt.tipo === 'hiragana') {
            label = opt.romaji.toUpperCase();
        } else {
            label = opt.portugues.split(',')[0].trim().toUpperCase();
        }
        
        btn.textContent = label;
        btn.onclick = () => handleAnswer(opt, btn);
        optionsGrid.appendChild(btn);
    });
}

btnGameAudio.addEventListener('click', () => {
    if (currentItem.tipo === 'hiragana') speakText(currentItem.romaji);
    else if (currentItem.tipo === 'kanjiBasico') speakText(currentItem.char);
    else speakText(currentItem.kanji);
});

function handleAnswer(selected, btnElement) {
    if (isAnimating) return;
    isAnimating = true;

    const isCorrect = selected === currentItem;
    
    if (isCorrect) {
        playSound('correct');
        btnElement.classList.add('correct');
        currentScore += 10;
        scoreDisplay.textContent = currentScore;
        showFeedback(true);
        setTimeout(nextRound, 1000);
    } else {
        playSound('wrong');
        btnElement.classList.add('wrong');
        
        const allBtns = optionsGrid.querySelectorAll('.option-btn');
        allBtns.forEach(b => {
            let correctLabel = '';
            if (currentItem.tipo === 'hiragana') correctLabel = currentItem.romaji.toUpperCase();
            else if (currentItem.tipo === 'kanjiBasico') correctLabel = currentItem.portugues.toUpperCase();
            else correctLabel = currentItem.portugues.split(',')[0].trim().toUpperCase();
            
            if (b.textContent === correctLabel) b.classList.add('correct');
        });

        lives--;
        updateHearts();
        showFeedback(false);
        
        if (lives <= 0) setTimeout(gameOver, 1500);
        else setTimeout(nextRound, 1500);
    }
}

function showFeedback(isCorrect) {
    feedbackIcon.textContent = isCorrect ? '🌟' : '💢';
    feedbackOverlay.className = `feedback-overlay ${isCorrect ? 'show-correct' : 'show-wrong'}`;
    setTimeout(() => { feedbackOverlay.className = 'feedback-overlay'; }, 800);
}

function gameOver() {
    document.getElementById('final-score').textContent = `${currentScore} Pontos!`;
    showScreen('gameover');
}

document.getElementById('btn-home').addEventListener('click', () => {
    showScreen('home');
});
