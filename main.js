//API trabalha com JSON, formato de texto
//GET= pega POST= leva dados api
//ps: getProduct = pegarUsuario e addNewProduct pode ser adicionarNovoUsuario

//VARIVEIS GLOBAIS
const url="http://localhost:3001/productus"; //url do projeto de cadastro de produtos
//url da API
const newProduct = {
        name: "Fone sem fio",
        price:10
    }
const ProductUpdate = {
        name: "Fone sem fio",
        price:45
    }
const id = 2;
// função que pega os dados
function getProduct(){
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
//getProduct();
//------------------------------------------------------------
//função que envia os dados a api
function addNewProduct(){
    axios.post(url, newProduct)
    .then(response => {
       alert("Criado novo Produto")
    })
    // .cath(error => console.log(error))
}
// addNewProduct();
//------------------------------------------------------------
//Função que atualiza os dados da api
function updateProduct() {
//em `url/ID` estamos dizendo que será o id X que será editado
//template string e a forma de CONCATENAR sem usar +
    axios.put(`${url}/${id}`, ProductUpdate)
    .then(response => {
        alert("Atualizado o produto " + `${id}`)
    })
    //.cath(error => console.log(error))
}
//updateProduct();
//------------------------------------------------------------
//Deleta os dados

function deleteProduct(){
    axios.delete(`${url}/${id}`)
    .then(response => {
       // alert("Deletado produto " + `${id}`)
    })
    .cath(error => console.log(error))
}
//deleteProduct();
//------------------------------------------------------------
//Pega UM dado específico 
function getOneProduct(){
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data) //pega o resultado e trasformaem texto
    })
}
getOneProduct();