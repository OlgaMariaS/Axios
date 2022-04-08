//API trabalha com JSON, formato de texto
//GET= pega POST= leva dados api
//ps: getUser = pegarUsuario e addNewUseR pode ser adicionarNovoUsuario

//VARIVEIS GLOBAIS
const url="http://localhost:3001/productus"; //url do projeto de cad de produtos
//url da API
const newUser = {
        name: "Fone sem fio",
        price:10
    }
const userUpdate = {
        name: "Fone sem fio",
        price:45
    }
const id = 2;
// função que pega os dados
function getUser(){
//axios = carrega o que esta na api
    axios.get(url)
//get (pegar)= metodo
//Promisses
   // then correto e cath erro
        //RESPONSE (obj) recebe os dados da api
    .then(response => {
        //data = dados e também recebe os dados da api
        const data = response.data;
//por meio da DOM, pegamos o conteúdo do texto e alteramos, neste caso pegamos a div de id="renderResults" e adicionamos o valor de data
        renderResults.textContent = JSON.stringify(data);//transforma os dados de DATA me TEXTO

    })
    // .cath(error => console.log(error)) //mostra erro porém neste caso da erro pois no chrome
}
//getUser();
//------------------------------------------------------------
//função que envia os dados a api
function addNewUseR(){
    axios.post(url, newUser)
    .then(response => {
       alert("Criado novo Produto")
    })
    // .cath(error => console.log(error))
}
// addNewUseR();
//------------------------------------------------------------
//Função que atualiza os dados da api
function updateUser() {
//em `url/ID` estamos dizendo que será o id X que será editado
//template string e a forma de CONCATENAR sem usar +
    axios.put(`${url}/${id}`, userUpdate)
    .then(response => {
        alert("Atualizado o produto " + `${id}`)
    })
    //.cath(error => console.log(error))
}
//updateUser();
//------------------------------------------------------------
//Deleta os dados

function deleteUser(){
    axios.delete(`${url}/${id}`)
    .then(response => {
       // alert("Deletado produto " + `${id}`)
    })
    .cath(error => console.log(error))
}
//deleteUser();
//------------------------------------------------------------
//Pega UM dado específico 
function getOneUser(){
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data) //pega o resultado e trasformaem texto
    })
}
getOneUser();