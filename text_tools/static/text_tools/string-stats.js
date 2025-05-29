function calculateStringStats(str) {
    const str_len = str.length;
    const vowels = "aeouiyаоуиэыяюеё";

    let vowels_cnt = 0;
    let consonants_cnt = 0;

    for(const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            vowels_cnt += 1;
        } else if (char.match(/[a-zа-я]/i)) {
            consonants_cnt += 1;
        }
    }

    const word_count = str.split(" ").filter(word => word.length > 0).length;

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
            event.preventDefault();

            const str = form.string.value;
            const stats = calculateStringStats(str);

            let resultDiv = document.getElementById("result");
            if (!resultDiv) {
                resultDiv = document.createElement("div");
                resultDiv.id = "result";
                form.parentNode.insertBefore(resultDiv, form.nextSibling);
            }

            resultDiv.innerHTML = `
                <h4>Результат:</h4>
                <p>Длина строки: ${stats.length}</p>
                <p>Количество слов: ${stats.words}</p>
                <p>Количество гласных букв: ${stats.vowels}</p>
                <p>Количество согласных букв: ${stats.consonants}</p>
            `;

            form.reset();
        });
    }
}

// Инициализация при загрузке документа
document.addEventListener('DOMContentLoaded', initStringStatsForm);