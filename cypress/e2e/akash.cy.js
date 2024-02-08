/// <reference types = "cypress"/>

let username='Admin';
let password='admin123';

function login(user, pass){

    if(user=== 'Admin' && pass === 'admin123'){

          return 'Login successfully';
    }else{
        return 'invalid data';
    }


}

let result= login(username, password);
console.log(result);