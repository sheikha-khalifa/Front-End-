let enhanceSub = (x, y, ...args) =>
 {
    let sub = x - y;

    if (args.length !== 0) 
    {
        for (let i = 0; i < args.length; i++)
        {
            sub -= args[i];
        }
    }

    return sub;
};


console.log(enhanceSub(4, 3));
console.log(enhanceSub(1, 2, 3, 4, 5, 6, 7, 8)); 

//another example to see the spread
let arr=[1,2,3,4,5,6,7];
console.log(enhanceSub(...arr));
console.log(arr);
console.log(...arr);

//Filter method

const items=[
    {name:"laptop",price:100},
    {name:"ipad",price:79},
    {name:"smasung",price:95},
   {name:"tv",price:160},
]
const filtereditem=items.filter((item)=>{
    return item.price<=100})
console.log(filtereditem)

//get the names only
let itemnames=items.map((item)=>{
    return item.name
})
console.log("-----------------------------------------------")
console.log(itemnames)
//find will return the object
let searchtv=items.find((item)=>
{
return item.name=="tv";
})
console.log("-----------------------------------------------")
console.log(searchtv)