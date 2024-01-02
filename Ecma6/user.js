export default class User{
    constructor(name,yearofbirth,salary){
        this.name=name;
        this.yearofbirth=yearofbirth;
        this.salary=salary;

    
    }
    }
    export function calculateAge(yearofbirth){
        let age = 2024-yearofbirth;
        console.log(`your age is:${age}`)
    }
    export  function calSalary(salary){
     let amountsalary= salary*0.3;
     console.log(`deduction amount  is:${amountsalary}`)
     let netsalary=salary-amountsalary;
     console.log(`your net salary is:${netsalary}`)

    }
    export function printname(name){
        console.log(`your name is :${name}`)
    }
   
    