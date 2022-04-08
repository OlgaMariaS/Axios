//API trabalha com JSON, formato de texto
//GET= pega POST= leva dados api
//ps: getProduct  = pegarUsuario e addnewProduct pode ser adicionarNovoUsuario

//VARIVEIS GLOBAIS
const url="http://localhost:3001/productus"; //url do projeto de cad de produtos
//url da API
const newProduct = {
        name: "Fone sem fio",
        price:60
    }
const updateProduct = {
        //id não se atualiza mas deve-se identificar qual id irá alterar, cada api tem seu metodo
        name: "Fone sem fio",
        price:10
    }
//------------------------------------------------------------  
// função que pega os dados
function getProduct (){
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
getProduct ();
//------------------------------------------------------------
//função que envia os dados a api
function addnewProduct(){
    axios.post(url, newProduct)
    .then(response => {
       alert(JSON.stringify(response.data))
    })
    // .cath(error => console.log(error))
}
//addNewProduct();
//------------------------------------------------------------
//Função que atualiza os dados
function updateProduct(){
//em `url/ID` estamos dizendo que será o id X que será editado
    axios.put(`${url}/6`, updateProduct)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
}
updateProduct();
//------------------------------------------------------------
//função que deleta os dados
// function deleteProduct(){
    
// }
//------------------------------------------------------------