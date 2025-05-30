function stringToHex(str) {
  let hex = '';
  for (let i = 0; i < str.length; i++) {
    // Получаем код символа и преобразуем в 16-ричное значение
    const charCode = str.charCodeAt(i);
    const hexValue = charCode.toString(16);

    // Добавляем ведущий ноль для однозначных значений и добавляем к результату
    hex += hexValue.padStart(2, '0');
  }
  return hex;
}

function initStringHashForm() {
    const form = document.querySelector('form[name="stringForm"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const str = form.text.value;
        const res = stringToHex(str)

        let resultDiv = document.getElementById("result");
        if (!resultDiv) {
            resultDiv = document.createElement("div");
            resultDiv.id = "result";
            resultDiv.className = "mt-4 p-3 bg-light rounded";
            form.parentNode.insertBefore(resultDiv, form.nextSibling);
        }

        resultDiv.innerHTML = `
        <h4>Результат:</h4>
        <p class="mb-0">${res}</p>
    `;

        form.reset();


    })
}
initStringHashForm();