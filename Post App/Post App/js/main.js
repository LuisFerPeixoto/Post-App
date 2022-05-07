let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("botão clicado");
    formValidation();
});


let formValidation = () =>{
    if (input.volue === ""){
        console.log("Erro");
    } else{
        console.log("Sucesso");
        msg.innerHTML = "" ;
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
}