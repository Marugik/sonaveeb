// Константы
const LEADERBOARD_KEY = 'estonianQuizLeaderboard';

// Состояние приложения
let playerName = "";
let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];
let categoryStats = {};
let isEstonianToRussian = false;

// Инициализация при загрузке страницы
window.onload = function() {
    createCategoryCheckboxes();
    loadLeaderboard();
};

// Создание чекбоксов категорий
function createCategoryCheckboxes() {
    const categoriesList = document.getElementById('categories-list');
    categoriesList.innerHTML = '';
    
    for (let key in CATEGORIES) {
        const div = document.createElement('div');
        div.className = 'category-checkbox';
        div.innerHTML = `
            <input type="checkbox" id="${key}" name="category" value="${key}">
            <label for="${key}">${CATEGORIES[key].name} (${CATEGORIES[key].questions.length} вопросов)</label>
        `;
        categoriesList.appendChild(div);
    }
}

// Установка режима
function setMode(estonianToRussian) {
    isEstonianToRussian = estonianToRussian;
    const buttons = document.querySelectorAll('.mode-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[isEstonianToRussian ? 1 : 0].classList.add('active');
}

// Начало квиза
function startQuiz() {
   function startQuiz() {
    const playerName = document.getElementById('player-name').value;
    const questionCount = document.getElementById('question-count').value;

    if (!playerName) {
        alert('Пожалуйста, введите ваше имя.');
        return;
    }

    // Логика для установки количества вопросов
    let totalQuestions;
    if (questionCount === 'all') {
        totalQuestions = allQuestions.length; // Предполагается, что allQuestions - это массив всех вопросов
    } else {
        totalQuestions = parseInt(questionCount);
    }

    // Логика для начала викторины с выбранным количеством вопросов
    startQuizWithQuestions(totalQuestions);
}

function startQuizWithQuestions(totalQuestions) {
    // Ваша логика для начала викторины с заданным количеством вопросов
    console.log(`Начинаем викторину с ${totalQuestions} вопросами.`);
    // Остальная логика для начала викторины
}


    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
        .map(cb => cb.value);

    if (selectedCategories.length === 0) {
        alert('Пожалуйста, выберите хотя бы одну категорию');
        return;
    }

    // Сбор вопросов из выбранных категорий
    selectedQuestions = [];
    categoryStats = {};
    selectedCategories.forEach(category => {
        categoryStats[category] = { total: 0, correct: 0 };
        selectedQuestions = selectedQuestions.concat(
            CATEGORIES[category].questions.map(q => ({...q, category}))
        );
    });

    // Перемешивание вопросов
    selectedQuestions.sort(() => Math.random() - 0.5);

    // Сброс состояния
    currentQuestion = 0;
    score = 0;

    // Показ экрана с вопросами
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    
    updateProgress();
    showQuestion();
}

// Показ вопроса
function showQuestion() {
    const question = selectedQuestions[currentQuestion];
    const questionElement = document.getElementById('question');
    
    questionElement.textContent = isEstonianToRussian ? question.estonian : question.russian;
    
    const answerButtons = document.querySelectorAll('.answer-btn');
    const answers = isEstonianToRussian ? question.answers.toRussian : question.answers.toEstonian;
    
    answers.forEach((answer, index) => {
        answerButtons[index].textContent = answer;
        answerButtons[index].classList.remove('correct', 'wrong');
        answerButtons[index].disabled = false;
    });

    document.querySelector('.quiz-container').classList.remove('question-answered');
    const existingHint = document.querySelector('.translation-hint');
    if (existingHint) existingHint.remove();

    updateProgress();
}

// Проверка ответа
function checkAnswer(answerIndex) {
    const question = selectedQuestions[currentQuestion];
    const answerButtons = document.querySelectorAll('.answer-btn');
    
    categoryStats[question.category].total++;
    
    if (answerIndex === question.correct) {
        score++;
        categoryStats[question.category].correct++;
        answerButtons[answerIndex].classList.add('correct');
    } else {
        answerButtons[answerIndex].classList.add('wrong');
        answerButtons[question.correct].classList.add('correct');
    }

    const questionContainer = document.querySelector('.quiz-container');
    questionContainer.classList.add('question-answered');
    
    const translationHint = document.createElement('div');
    translationHint.className = 'translation-hint';
    translationHint.textContent = `Правильный перевод: ${isEstonianToRussian ? question.russian : question.estonian}`;
    questionContainer.appendChild(translationHint);

    answerButtons.forEach(btn => btn.disabled = true);

    setTimeout(() => {
        nextQuestion();
    }, 2000);
}

// Переход к следующему вопросу
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < selectedQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Обновление прогресса
function updateProgress() {
    document.getElementById('current-score').textContent = `Счёт: ${score}`;
    document.getElementById('question-progress').textContent = 
        `Вопрос: ${currentQuestion + 1}/${selectedQuestions.length}`;
    
    const progressPercent = (currentQuestion / selectedQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progressPercent}%`;
}

// Сохранение результата
function saveScore(playerData) {
    let leaderboard = getLeaderboard();
    const timestamp = new Date().toISOString();
    
    const scoreData = {
        name: playerData.name,
        score: playerData.score,
        totalQuestions: playerData.totalQuestions,
        percentage: playerData.percentage,
        mode: isEstonianToRussian ? "EST→RUS" : "RUS→EST",
        categories: playerData.categories,
        timestamp: timestamp
    };
    
    leaderboard.push(scoreData);
    leaderboard.sort((a, b) => b.percentage - a.percentage);
    leaderboard = leaderboard.slice(0, 10);
    
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(leaderboard));
}

// Получение таблицы лидеров
function getLeaderboard() {
    const leaderboard = localStorage.getItem(LEADERBOARD_KEY);
    return leaderboard ? JSON.parse(leaderboard) : [];
}

// Показ результатов
function showResults() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';

    const percentage = Math.round((score / selectedQuestions.length) * 100);

    saveScore({
        name: playerName,
        score: score,
        totalQuestions: selectedQuestions.length,
        percentage: percentage,
        categories: categoryStats
    });

    const playerResults = document.getElementById('player-results');
    playerResults.innerHTML = `
        <h3>${playerName}, ваш результат:</h3>
        <p>Правильных ответов: ${score} из ${selectedQuestions.length}</p>
        <p>Процент успеха: ${percentage}%</p>
        <p>Режим: ${isEstonianToRussian ? "Эстонский → Русский" : "Русский → Эстонский"}</p>
    `;

    showCategoryResults();
    showLeaderboard();
}

// Показ результатов по категориям
function showCategoryResults() {
    const categoryResults = document.getElementById('category-results');
    categoryResults.innerHTML = '<h3>Результаты по категориям:</h3>';
    
    for (let category in categoryStats) {
        const stats = categoryStats[category];
        if (stats.total > 0) {
            const percent = Math.round((stats.correct / stats.total) * 100);
            const div = document.createElement('div');
            div.className = 'category-result';
            div.innerHTML = `
                <h4>${CATEGORIES[category].name}</h4>
                <p>${stats.correct} из ${stats.total} (${percent}%)</p>
            `;
            categoryResults.appendChild(div);
        }
    }
}

// Показ таблицы лидеров
function showLeaderboard() {
    const leaderboard = getLeaderboard();
    const leaderboardDiv = document.getElementById('leaderboard');
    
    leaderboardDiv.innerHTML = `
        <h3>Таблица лидеров:</h3>
        <table class="leaderboard-table">
            <thead>
                <tr>
                    <th>Место</th>
                    <th>Имя</th>
                    <th>Результат</th>
                    <th>Режим</th>
                    <th>Дата</th>
                </tr>
            </thead>
            <tbody>
                ${leaderboard.map((entry, index) => `
                    <tr class="${entry.name === playerName ? 'current-player' : ''}">
                        <td>${index + 1}</td>
                        <td>${entry.name}</td>
                        <td>${entry.score}/${entry.totalQuestions} (${entry.percentage}%)</td>
                        <td>${entry.mode || "RUS→EST"}</td>
                        <td>${new Date(entry.timestamp).toLocaleDateString()}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Перезапуск квиза
function restartQuiz() {
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
}

// Шеринг результатов
function shareResults() {
    const percentage = Math.round((score / selectedQuestions.length) * 100);
    const text = `Я прошёл тест по эстонскому языку и набрал ${score} из ${selectedQuestions.length} (${percentage}%)!`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Мой результат в Estonian Language Quiz',
            text: text,
            url: window.location.href
        }).catch(console.error);
    } else {
        alert('Ваш результат: ' + text);
    }
}