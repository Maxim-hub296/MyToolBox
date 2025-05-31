function getRndInteger() {
    let min = Math.ceil(0);
    let max = Math.floor(93);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generate_password() {
    const symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~0123456789";
    let password = "";
    while (password.length <= 15) {
        const rnd_index = getRndInteger();
        password += symbols.charAt(rnd_index);
    }
    return password;
}

function initGeneratePassword() {
    const btn = document.getElementById("button");

    btn.addEventListener("click", function () {
        const res = generate_password();

         let resultDiv = document.getElementById("result");
    if (!resultDiv) {
        resultDiv = document.createElement("div");
        resultDiv.id = "result";
        resultDiv.className = "mt-4 p-3 bg-light rounded";
        document.body.appendChild(resultDiv);
    }

    resultDiv.innerHTML = `
        <h4>Результат:</h4>
        <p class="mb-0">${res}</p>
    `;
    })
}
document.addEventListener('DOMContentLoaded', initGeneratePassword);
