// var xhr= new XMLHttpRequest();

// xhr.onreadystatechange=function(){
//     if(xhr.readyState===4 && xhr.status===200){
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('GET','msg.txt',true);
// xhr.send();
document.querySelector('#getEmployee').addEventListener('click',loadEmployee);

function loadEmployee(){


    const xhr = new XMLHttpRequest();
    xhr.open('GET','employees.json',true);

    setTimeout(() => {
        
        xhr.onload = function(){


            if(this.status === 200){       
    
                let employees = JSON.parse(this.responseText)
    
                let html="";
                
                employees.forEach(employee => {
                    html+= `<tr>
                                <td>${employee.firstName}</td>
                                <td>${employee.lastName}</td>
                                <td>${employee.age}</td>
                                <td>${employee.retired}</td>
                            </tr>`;
                });             
    
                    document.querySelector('#employees').innerHTML = html;
    
            }
        }
        xhr.send();

    }, 1500);
}

















