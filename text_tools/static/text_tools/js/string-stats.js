function calculateStringStats(str) {
    const str_len = str.length;
    const vowels = "aeouiyаоуиэыяюеё";

    let vowels_cnt = 0;
    let consonants_cnt = 0;

    for(const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            vowels_cnt += 1;
        } else if (char.match(/[a-zа-я]/)) {  // Убрали флаг 'i'
            consonants_cnt += 1;
        }
    }

    // Более точный подсчет слов
    const word_count = str.trim() === '' ? 0 : str.trim().split(/\s+/).length;

    return {
        length: str_len,
        vowels: vowels_cnt,
        consonants: consonants_cnt,
        words: word_count
    };
}

function initStringStatsForm() {
    const form = document.querySelector('form[name="stringForm"]');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();  // Ключевая строка!

            console.log("Form submission intercepted");

            const str = form.string.value;
            const stats = calculateStringStats(str);

            const resultDiv = document.getElementById("result");
            resultDiv.className = "mt-4 p-3 bg-light rounded";
            resultDiv.innerHTML = `
                <h4>Результат:</h4>
                <p>Длина строки: ${stats.length}</p>
                <p>Количество слов: ${stats.words}</p>
                <p>Количество гласных букв: ${stats.vowels}</p>
                <p>Количество согласных букв: ${stats.consonants}</p>
            `;
            form.reset();

            // Для дебага - проверьте консоль браузера
            console.log("Results displayed", stats);
        });
    } else {
        console.error("Form not found!");
    }
}

// Инициализация
if (document.readyState !== 'loading') {
    initStringStatsForm();
} else {
    document.addEventListener('DOMContentLoaded', initStringStatsForm);
}