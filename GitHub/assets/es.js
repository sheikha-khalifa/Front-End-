
/* 
class is the soulmate of oop
inheritance
encapsulation
polymarphisim



*/ 
class user{

cnt=0;

constructor(name,address,age)
    {
        this.cnt;
        this.name=name;
        this.address=address;
        this.age=age;
    }
    getinfo(){
        console.log(`hello ms ${this.name} \n your age is ${this.age} \n from ${this.address}`)
    }
}
let userdata=new user("sheikha",26,"ibri")
userdata.getinfo();

