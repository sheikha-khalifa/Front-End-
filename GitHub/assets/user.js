class user{
    constructor(name,age,address,type){
        this.name=name;
        this.age=age;
        this.address=address;
        this._type=type;
    }

    get type(){
       return this._type;
    }
    getinfo(){
        console.log(`username is => ${this.name},\n UserAge is=>${this.age},\n useraddress=> ${this.address},\n userType => ${this.type}`);
    }
}
let user1=new user("sheikha",26,"ibri","Customer");
user1.getinfo();