function convert(str, choice) {
        let res = ""
        switch (choice) {
            case "up": res = str.toUpperCase(); break;
            case "low": res = str.toLowerCase(); break;
            case "capitalize": res = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }

        return res
}

function initStringConvertForm() {
    const form = document.querySelector('form[name="stringForm"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const str = form.string.value;
        const choice = form.register.value;

        const res = convert(str, choice)

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
initStringConvertForm();
