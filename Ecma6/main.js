
import
 user,{printname,calculateAge, calSalary} from "./user.js";

let usr=new user("sheikha",1997,2000);
printname(usr.name);
calculateAge(usr.yearofbirth);

calSalary(usr.salary);