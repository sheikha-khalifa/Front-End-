// Function to fetch all products
async function GetAllProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was a problem fetching products:', error);
      return []; // Return an empty array or handle the error accordingly
    }
  }
  
  // Function to display products
  async function DisplayProducts() {
    try {
      const Products = await GetAllProducts();
      console.log(Products);
  
      for (let i = 0; i < Products.length; i++) {
        let prd = `<div class="card" style="width: 18rem;">
          <img src="${Products[i].image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${Products[i].title}</h5>
            <p class="card-text">${Products[i].description}.</p>
            <a href="#" class="btn btn-primary">Show Product</a>
          </div>
        </div>`;
        document.getElementById("demo").innerHTML += prd;
      }
    } catch (error) {
      console.error('There was a problem displaying products:', error);
    }
  }
  
  // Call the function to display products
  DisplayProducts();
  
  // Function to get detailed product by ID
  async function GetDetailedProduct(id) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const detailedProduct = await response.json();
      return detailedProduct;
    } catch (error) {
      console.error('There was a problem fetching the detailed product:', error);
      return null; // Return null or handle the error accordingly
    }
  }
  
  // Prompt the user to enter a Product ID and fetch detailed product info
  let uservalue = Number(prompt("Enter Product ID:"));
  if (!isNaN(uservalue)) {
    (async () => {
      let prdoc = await GetDetailedProduct(uservalue);
      console.log(prdoc);
      // Do something with the detailed product information...
    })();
  } else {
    console.error('Invalid Product ID');
  }