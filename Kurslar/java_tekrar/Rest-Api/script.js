/*
document.querySelector('#getOne').addEventListener('click', getOne);

document.querySelector('#getAll').addEventListener('click', getAll);

document.querySelector('#postData').addEventListener('click',postData);


function getOne() {

    var id = document.getElementById('postid').value;
    var url = "https://jsonplaceholder.typicode.com/posts/"+id;
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.onload = function () {

        if (this.status === 200) {
            var post = JSON.parse(this.responseText);

            var html = "";
                
            html += `
            
            <div class="card">
                <div class="card-header">
                ${post.id}-${post.title}
                ${post.id}-${post.title}
                </div>
                 <div class="card-body">
                    <blockquote class="blockquote mb-0">
                    <p>${post.body}</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                     </blockquote>
                </div>
            </div>

            `;

            document.querySelector('#results').innerHTML = html;
        }

    }
    xhr.send()

}

function getAll() {
    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.onload = function () {

        if (this.status === 200) {
            var posts = JSON.parse(this.responseText);

            var html = "";

            posts.forEach(post => {
                
            html += `
            
            <div class="card">
                <div class="card-header">
                 ${post.title}
                </div>
                 <div class="card-body">
                    <blockquote class="blockquote mb-0">
                    <p>${post.body}</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                     </blockquote>
                </div>
            </div>

            `;

        });

            document.querySelector('#results').innerHTML = html;
        }

    }
    xhr.send()
}

function postData(){
    const data = {
        userId : 1,
        title:'new title',
        body:'new body'
    }

    var json = JSON.stringify(data);
    var url="https://jsonplaceholder.typicode.com/posts";
    var xhr= new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');

    xhr.onload=function(){
        if(xhr.status===201 && xhr.readyState===4){
            var post=xhr.responseText;
            console.log(post);
        }
    }

    xhr.send(json);
}
*/
/************************** */

/*
var products=[
    {id:1,name:'samsung s8',price:3000},
    {id:2,name:'samsung s7',price:2000},
    {id:3,name:'samsung s6',price:1000}
]





function addProduct(prd,callback){

    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            products.push(prd);
            let added=false;

            if(added){
                resolve();
            }else{
                reject('hata : 500');
            }
        })
    });

    // if(added){
    //     setTimeout(()=>{
 
    //         callback(null,prd);
    //     },2000)
    // }else{
    //     callback('500',prd);
    // }
}

function getProducts(){

    setTimeout(()=>{
        products.forEach(p=>{
            console.log(p.name);
        });
    },1000)

}

addProduct({id:4,name:'samsung s5',price:500}).then(getProducts)
.catch(function(err){
    console.log(err);
});
*/
/************************** */
/*
var p = new Promise(function(resolve,reject){
    if(true){
        resolve('success');
    }else{
        reject('failure');
    }
});

p.then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})
*/
/*
new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(5);
    },1000)
}).then(function(number){
    console.log(number);
    return number*number;
}).then(function(number){
    console.log(number);
})

*/
/*
const isMomHappy=true;
const willGetNewPhone=new Promise((resolve,reject)=>{
    if(isMomHappy){
        const phone={
            name:'iphone 8',
            price:4000,
            color:'silver'
        }
        resolve(phone);
    }else{
        const error= new Error('mom is not happy');
        reject(error);
    }
});

const showToFriends=function(phone){
    const message="hey friends this is my new phone "+phone.name;
    return  Promise.resolve(message);
}

const askMom=function(){
    willGetNewPhone.then(showToFriends)
    .then(message=>console.log(message))
    .catch(error=>{
        console.log(error);
    })
}

askMom();
*/
/************************* */

let myObj={
    url:"https://randomuser.me/api/?results=5"
}

let request = obj =>{
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || 'GET',obj.url);

        if(xhr.headers){
            Object.keys[onrejectionhandled.headers].forEach(key => {
                xhr.setRequestHeader(key,obj.headers[key]);
            });
        }

        xhr.onload=()=>{
            if(xhr.status>=200 && xhr.status<300){
                resolve(xhr.response);
            }else{
                reject(xhr.statusText);
            }
        }

        xhr.onerror=()=>{
            reject(xhr.statusText);
        }

        xhr.send(obj.body);
    });
}

let buildHtml=function(data){
    let users=JSON.parse(data);

    let html="";
    users.results.forEach(user=>{
        html=`
            <div>
                <img src="${user.picture}">
                <div>
                    ${user.name.title} ${user.name.first} ${user.name.last}
                </div>
            </div>
        
        `;
    })

    document.querySelector('#users').innerHTML=html;

    return Promise.resolve('html is loaded')
}

request(myObj).then(buildHtml)
.then(msg=>{
    console.log(msg);
})
.catch(error=>{
    console.log(error);
})





