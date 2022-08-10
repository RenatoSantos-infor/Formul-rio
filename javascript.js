//seleciona as variáveis 
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");

const errorMessagem = document.querySelector(".msg");
const items = document.querySelector(".items");

//cancela o comportamento padrão do click, tenta enviar o formalário e recaregar a página 
submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    //recebe o valor do input
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    //verificar se os campos foram preenchidos
    if (nameValue === "" || emailValue === ""){
        //adiciona mensagem 
        errorMessagem.textContent = "Por favor preencha os campos";
        //adiciona cor da class no css
        errorMessagem.classList = "error";
        
        //limpa a mensagem e a cor após 3 segundos
        setTimeout(() => {
            errorMessagem.textContent = "";
            errorMessagem.classList = "";
        },3000);
        return;
    }

    // criar a li
    const li = document.createElement("li");
    //criar a class li
    li.classList = "item";
    //obtém o conteúdo nome e email 
    li.innerHTML = `Nome: ${nameValue}<br />Email: ${emailValue}`;

    //Adiciona o itens ao elemento li
    items.appendChild(li);

    //limpa os campos após termino da função
    nameInput.value = "";
    emailInput.value = "";
});