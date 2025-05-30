function getRndInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initRandNumForm() {
    const form = document.querySelector('form[name="numsForm"]');

    if (!form) {
        console.error('Форма не найдена');
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const num_min = parseInt(form.minNumber.value);
        const num_max = parseInt(form.maxNumber.value);

        if (num_min >= num_max) {
            alert('Минимальное число должно быть меньше максимального!');
            return;
        }

        const res = getRndInteger(num_min, num_max);
        const resultDiv = document.getElementById("result");

        resultDiv.className = "mt-4 p-3 bg-light rounded";
        resultDiv.innerHTML = `
            <h4><i class="bi bi-check-circle"></i> Результат:</h4>
            <p class="display-6">${res}</p>
        `;
    });
}

document.addEventListener('DOMContentLoaded', initRandNumForm);