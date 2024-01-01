async function GetDetailedProduct(){
    const respnse=await fetch('https://fakestoreapi.com/products')
    const detailedproduct=await respnse.json();
    console.log(detailedproduct) 
}
//let uservalue=Number(prompt("enterproduct id: "));
//let prdoc=await GetDetailedProduct(uservalue);
//console.log(prdoc)
GetDetailedProduct();