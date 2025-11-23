const campoSenha = document.getElementById("campoSenha");
const btnGerar = document.getElementById("btnGerar");
const btnCopiar = document.getElementById("btnCopiar");
const tamanho = document.getElementById("tamanho");

const chkMinusculas = document.getElementById("chkMinusculas");
const chkMaiusculas = document.getElementById("chkMaiusculas");
const chkNumeros = document.getElementById("chkNumeros");
const chkSimbolos = document.getElementById("chkSimbolos");


function gerarSenha() {
    let caracteres = "";
    if (chkMinusculas.checked) caracteres += "abcdefghijklmnopqrstuvwxyz";
    if (chkMaiusculas.checked) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (chkNumeros.checked) caracteres += "0123456789";
    if (chkSimbolos.checked) caracteres += "!@#$%&*()-_=+{}[]/?";

    if (caracteres.length === 0) {
        window.alert("Selecione pelo menos uma opção para gerar a senha.");
        return;
    }

    let senha = "";
    let qtd = parseInt(tamanho.value);

    for (let i = 0; i < qtd; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    campoSenha.value = senha;
}


function copiarSenha() {
    if (campoSenha.value.trim() === "") return;

    navigator.clipboard.writeText(campoSenha.value)
        .then(() => {
            btnCopiar.innerText = "Copiado!";
            setTimeout(() => btnCopiar.innerText = "Copiar", 1000);
            window.alert("Senha copiada para a área de transferência!");
        });
}

btnGerar.addEventListener("click", gerarSenha);
btnCopiar.addEventListener("click", copiarSenha);