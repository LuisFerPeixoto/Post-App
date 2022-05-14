let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("botÃ£o clicado");
    formValidation();
});


let formValidation = () =>{
    if (input.value === ""){
        console.log("Erro");
        msg.innerHTML = "Este campo nÃ£o pode ficar vazio";
    } else{
        console.log("Sucesso");
        msg.innerHTML = "" ;
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data ["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = () =>{
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options text-white">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    input.value = "";
};

let editPost = (e) =>{
    input.value = e.parentElement.previousElementSibling.innerHTML
    e.parentElement.parentElement.remove();
};

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

