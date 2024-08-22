let pagina = document;
let botaoSubmeter = document.getElementById("botao-submeter");

botaoSubmeter.addEventListener("click", submeter);

let nome =  document.getElementById("nome").value;

console.log(nome);

function submeter() {
    let nome = document.getElementById("nome").value;
    console.log(nome);
        if(nome == "") {
            alert("Nome vazio")
        };

    let idade = document.getElementById("idade").value;
    console.log(idade);
        if(idade == "") {
        alert("O campo está vazio")
    };

    let cpf = document.getElementById("cpf").value;
    console.log(cpf);
        if(cpf == "") {
        alert("O campo está vazio")
    };
}

function validaCPF(cpf) {
    if(cpf == "") {
        return false;
    }

    //if() {
    ve
    
    // retorna rue seo cpf for válido, caso contrário retorna false
    return true;
}