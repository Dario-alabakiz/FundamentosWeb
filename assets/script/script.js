//tipos de variaveis
//var let const
//var = global = externo
//let = interno
//const = constante

//alert("olá mundo!");

//Date();
//console.log(Date());

const nome = document.getElementById("nome")// Não precisa definir o tipo do atributo
const email = document.querySelector("#email")// precisar definir o tipo do atributo
const assunto = document.getElementById("assunto")
// se for clase da vez de # vai trocar para .

/*function olamundo(){
    alert("Você clicou aqui")
}*/

let txtNome = document.getElementById("txtNome")
function validaNome(){
    if(nome.value.length <2){
        txtNome.innerHTML = "O nome deve ter mais de 2 caracteres"
        txtNome.style.color="red"
    }else{
        txtNome.innerHTML = "Campo preenchido corretamente"
        txtNome.style.color="green"
    }
    console.log(nome.value)
    console.log(nome.value.length)
}

var textarea = document.querySelector('textarea');
var info = document.getElementById('carResTxtVoce');
var limite = 500;
textarea.addEventListener('keyup', verificar);

function verificar(e) {
    var qtdcaracteres = this.value.length;
    var restantes = limite - qtdcaracteres;
    if (restantes > 0) {
        info.innerHTML = restantes;
        info.style.color = "green";
}else{
    info.innerHTML = restantes;
    info.style.color = "red";
this.value = this.value.slice(0, limite);
return info.innerHTML = 0 + "/500 Total de caracteres digitado";
}
info.innerHTML = "Caracteres restantes " + restantes + "/500"
}