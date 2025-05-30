function initStringStripForm() {
    const form = document.querySelector('form[name="stringForm"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const str = form.text.value;

        const res = str.trim();

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
initStringStripForm();