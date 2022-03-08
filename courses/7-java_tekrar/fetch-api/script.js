/*

//text

function getText(){
    fetch('text.txt')
    .then(response=>{
       return response.text();
    }).then(data=>{
        console.log(data)
    }).catch(error=>{
        console.log(error)
    })
}

//getText()

//json

function getJson(){
    fetch('product.json')
    .then(response=>{
        return response.json();
    }).then(data=>{
        console.log(data)
    }).catch(error=>{
        console.log(error);
    })
}

//getJson()

//external api

function getExternalApi(){
    fetch('https://randomuser.me/api/?results=5')
    .then(data=>{
        return data.json()
    }).then(users=>{

        var html="";
        users.results.forEach(user => {
            
            html+=`
                <div>
                    <img src="${user.picture.medium}">
                </div>
                <div>
                    ${user.name.first}
                    ${user.name.first}
                </div>
            `;


        });

        document.querySelector('#users').innerHTML=html;
    }).catch(error=>{
        console.log(error);
    })
}
//getExternalApi();


function postExternalApi(){
    const url='https://jsonplaceholder.typicode.com/todos/';

    var data={
        method: 'POST',
        body:JSON.stringify({
            userId:1,
            title:'sample title',
            body:'sample body'
        }),
        headers: new Headers({
            'content-type':'application/json'
        })
    }

    fetch(url,data)
    .then(response=>{
        console.log(response)
    })
}

postExternalApi()
*/


/******AWAIT API */
/*
async function fn(){
    return 'hello';
}

fn()
.then(response=>{
    console.log(response);
})
*/

function getCategory(){

    var isError=true;
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            
            if(!isError){
                resolve('phone');
            }else{
                reject('error')
            }
        },1000)

    });
}

function getProducts(category){

    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`5 products in ${category}`);
        },1000)
    })
}

getCategory()
.then(getProducts)
.then(res=>console.log(res))
.catch(error=>console.log(error));

async function getProduct(){

    try{
        let category=  await getCategory();
        let result= await getProducts(category);
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}

getProduct();




