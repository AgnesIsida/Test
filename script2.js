let id ="3333"
const createUser = (id,nName,age,email)=>{
    let user = {
    id: id,
    nName : nName,
    age: age,
    Uemail : email    
    }
 return user   

}
console.log(createUser (id,"Alena",74))